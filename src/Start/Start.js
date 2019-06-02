import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { filterPokemons } from './../utils/utils'

const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 150) {
      id
      name
      image
    }
  }
`

const Start = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Query query={GET_POKEMONS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        const filteredPokemons = filterPokemons(data.pokemons, searchTerm)

        return (
          <div>
            <input onChange={event => setSearchTerm(event.target.value)} />
            {!!searchTerm.length && (
              <h3>
                {filteredPokemons.length} Pokémons matchar din sökning på:{' '}
                {searchTerm}
              </h3>
            )}
            {filteredPokemons.map(pokemon => {
              return (
                <div key={pokemon.id}>
                  <h3>{pokemon.name}</h3>
                  <img
                    alt={pokemon.name}
                    src={pokemon.image}
                    style={{ maxWidth: '100px' }}
                  />
                </div>
              )
            })}
          </div>
        )
      }}
    </Query>
  )
}

export default Start
