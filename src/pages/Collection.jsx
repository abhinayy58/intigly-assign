import React from "react";

const Collection = ({ collection, setCollection }) => {
  const handleDrop = (e, toIndex) => {
    const fromIndex = Number(e.dataTransfer.getData("from"));
    if (fromIndex === toIndex) return;

    const updated = [...collection];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    setCollection(updated);
    localStorage.setItem("collection", JSON.stringify(updated));
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required for onDrop to work
  };

  return (
    <div>
      <div className="min-h-screen bg-violet-500 p-10 pt-20 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {collection.map((pokemon, idx) => (
          <div
            key={pokemon.name}
            draggable
            data-index={idx}
            onDragStart={(e) => e.dataTransfer.setData("from", idx)}
            onDrop={(e) => handleDrop(e, idx)}
            onDragOver={handleDragOver}
            className="border rounded p-4 bg-white shadow cursor-move transition-transform hover:scale-105"
          >
            <h3 className="font-bold text-center text-xl capitalize mb-2">
              {pokemon.name}
            </h3>
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="rounded-full bg-pink-400 mx-auto h-24 mb-2"
            />
            <p className="text-sm text-gray-700 text-center mb-2">
              <span className="font-semibold"></span>{" "}
              {pokemon.types.split(",").map((type, i) => (
                <span
                  key={i}
                  className="inline-block bg-violet-100 text-violet-700 px-2 py-1 m-1 rounded-full text-xs capitalize"
                >
                  {type.trim()}
                </span>
              ))}
            </p>
            <p className="py-4 flex justify-between w-full text-sm">
              <div className="flex flex-col items-center">
                <p>HP</p> <p>{pokemon.stats.hp}</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Attack</p> <p>{pokemon.stats.attack}</p>
              </div>
              <div className="flex flex-col items-center">
                <p>Defence</p> <p>{pokemon.stats.defense}</p>
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
