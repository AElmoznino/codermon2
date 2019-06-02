import { filterPokemons } from './utils'

const pokemons = [
  {
    id: 'UG9rZW1vbjowMDE=',
    name: 'Bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  },
  {
    id: 'UG9rZW1vbjowMDI=',
    name: 'Ivysaur',
    image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
  },
  {
    id: 'UG9rZW1vbjowMDM=',
    name: 'Venusaur',
    image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
  },
  {
    id: 'UG9rZW1vbjowMDQ=',
    name: 'Charmander',
    image: 'https://img.pokemondb.net/artwork/charmander.jpg',
  },
]

describe('filterPokemons', () => {
  it('should return only Bulbasaur when searching for "Bulba"', () => {
    const expected = [pokemons[0]]

    expect(filterPokemons(pokemons, 'Bulba')).toEqual(expected)
  })

  it('should return only Bulbasaur when searching for "bulba"', () => {
    const expected = [pokemons[0]]

    expect(filterPokemons(pokemons, 'bulba')).toEqual(expected)
  })

  it('should return Bulbasaur, Ivysaur and Venusaur when searching for "saur"', () => {
    const expected = [pokemons[0], pokemons[1], pokemons[2]]

    expect(filterPokemons(pokemons, 'saur')).toEqual(expected)
  })
})
