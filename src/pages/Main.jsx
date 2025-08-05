import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useCallback, useRef, useState } from "react";
import PokemonCard from "../components/PokemonCard";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
const LIMIT = 6;

const Main = () => {
  const [collection, setCollection] = useState(() => {
    const saved = localStorage.getItem("collection");
    return saved ? JSON.parse(saved) : [];
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["pokemon"],
      staleTime: 1000 * 60 * 5,
      queryFn: async ({ pageParam = 0 }) => {
        const res = await fetch(
          `${POKEMON_API}?offset=${pageParam}&limit=${LIMIT}`
        );
        const data = await res.json();

        const detailed = await Promise.all(
          data.results.map(async (p) => {
            const res = await fetch(p.url);
            const json = await res.json();
            return {
              name: json.name,
              image: json.sprites.front_default,
              types: json.types.map((t) => t.type.name).join(", "),
              stats: {
                hp: json.stats[0].base_stat,
                attack: json.stats[1].base_stat,
                defense: json.stats[2].base_stat,
              },
            };
          })
        );
        console.log(detailed);

        return {
          results: detailed,
          next: data.next,
        };
      },
      getNextPageParam: (lastPage) => {
        const nextUrl = lastPage.next;
        if (!nextUrl) return undefined;
        const offset = new URL(nextUrl).searchParams.get("offset");
        return Number(offset);
      },
    });

  const observerRef = useRef(null);
  const bottomRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const addToCollection = (pokemon) => {
    const exists = collection.find((p) => p.name === pokemon.name);
    if (!exists) {
      const updated = [...collection, pokemon];
      setCollection(updated);
      localStorage.setItem("collection", JSON.stringify(updated));
    }
  };

  return (
    <div className="bg-violet-500 p-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data?.pages.map((page) =>
          page.results.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              onAdd={addToCollection}
            />
          ))
        )}
        <div ref={bottomRef} className="h-10" />
        {isFetchingNextPage && (
          <p className="pb-10 col-span-full text-center text-white">
            Loading more Pokemon...
          </p>
        )}
      </div>
    </div>
  );
};

export default Main;
