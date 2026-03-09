import { api } from './api'

//Para mostrar todos los datos ya que solo muestra name + url en la base
export const getAllPokemons = async () => {
   const response = await api.get('pokemon/?limit=20')
   const result = response.data.results

   const pokemonDetallado = await Promise.all(
      result.map(async (p: { url: string }) => {
         const pokemon = await api.get(p.url)
         return pokemon.data
      }),
   )
   return pokemonDetallado
}

export const getPokemonByName = async (name: string) => {
   const response = await api.get(`pokemon/${name}`)
   return response.data
}
