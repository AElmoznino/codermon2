import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_POKEMON = gql`
  query getPokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      types
      maxCP
      number
      weight {
        minimum
        maximum
      }
      classification
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      evolutions {
        id
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
    }
  }
`

const Pokemon = ({ match }) => {
  const pokemon = match.params.name

  return (
    <Query query={GET_POKEMON} variables={{ name: pokemon }}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`

        return (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )
      }}
    </Query>
  )
}

export default Pokemon
