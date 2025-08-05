import Button from "./Button";
import { getRandomBadgeColor } from "../utils/getRandomBadgeColor";

const PokemonCard = ({ pokemon, onAdd }) => {
  return (
    <div className="w-full justify-between items-center space border rounded p-4 bg-white shadow flex flex-col  items-center ">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="bg-pink-400 rounded-full  h-20"
      />
      <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
      <p className="text-sm text-gray-600 flex flex-wrap gap-1">
        {pokemon.types.split(",").map((type, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded-full text-xs capitalize ${getRandomBadgeColor()}`}
          >
            {type}
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
      <Button onClick={() => onAdd(pokemon)}>
        <span className="mr-2 text-lg font-bold">+</span> Add to Collection
      </Button>
    </div>
  );
};

export default PokemonCard;
