import React from "react"
import Link from "next/link"


const colorMap = {
  fire: "bg-red-500",
  water: "bg-blue-500",
  grass: "bg-green-500",
}

function PokemonListItem({ pokemon }) {
  return (
   <Link href={`/pokemons/${pokemon.name}`}>
    <li className="border border-gray-400 p-5 flex flex-col">
      <span className="flex items-center space-x-4">
        <div className={`w-20 h-20 text-gray-50 rounded-full grid place-items-center ${colorMap[pokemon.type1]}`}>
           <span>
           {pokemon.type1}
           </span>
        </div>
        <span className="text-gray-700 text-xl">{pokemon.name}</span>
      </span>
      <span className="text-gray-700"> {pokemon.classfication}</span>
    </li>
   </Link>
  )
}

export default function PokemonList({ pokemons }) {
  return (
    <ul>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon, index) => <PokemonListItem pokemon={pokemon} key={index} />)
      ) : (
        <h1 className="text-3xl text-gray-600"> No pokemons in database </h1>
      )}
    </ul>
  )
}
