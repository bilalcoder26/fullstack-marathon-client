import { useState, useEffect } from "react";
type Pokemon = {
  name: string;
  url: string;
};

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    function fetchKantoPokemon() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
        .then((response) => response.json())
        .then((allpokemon) => setPokemon(allpokemon.results));
    }
    fetchKantoPokemon();
  }, []);

  const getPokemonDetails = (name: string) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        alert(
          `Name: ${data.name}\nHeight: ${data.height}\nWeight: ${data.weight}\nTypes: ${data.types
            .map((t: any) => t.type.name)
            .join(", ")}`
        );
        console.log(data)
      });
  }
  return (
    <div
      className='
        grid
        gap-6 sm:gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      '
    >
      {pokemon.map((p, i) => (
        <div
          key={i}
          className=" font-bold text-center py-2 border-b border-gray-200 border-4 rounded-lg p-4
         mx-auto mt-10
         w-36 h-36
         overflow-y-scroll"
        >
          {p.name}
          <button className="mt-2 text-sm bg-blue-500 text-white px-2 py-1 rounded cursor-pointer" onClick={() => getPokemonDetails(p.name)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
