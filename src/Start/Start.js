import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 150) {
      id
      name
      image
    }
  }
`

const Start = () => (
  <Query query={GET_POKEMONS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...'
      if (error) return `Error! ${error.message}`

      return (
        <div>
          {data.pokemons.map(pokemon => {
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

export default Start
