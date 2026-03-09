'use client'

import { PokemonT } from '@/types'
import { useRouter } from 'next/navigation'

import './pokemonC.css'

type Props = {
   pokemon: PokemonT
}

const PokemonC = ({ pokemon }: Props) => {
   const router = useRouter()

   console.log(pokemon.id)

   return (
      <>
         <div className="pokemonCardContainer">
            <button onClick={() => router.push('/pokemon/' + pokemon.name)}>
               <div className="pokemonCardInfoContainer">
                  <p>Nombre: {pokemon.name}</p>
                  <p>ID: {pokemon.id}</p>
                  <p>Peso: {pokemon.weight}</p>
                  <p>Altura: {pokemon.height}</p>
                  <p>Experiencia Base: {pokemon.base_experience}</p>
               </div>
            </button>
         </div>
      </>
   )
}

export default PokemonC
