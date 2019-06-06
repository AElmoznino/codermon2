import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { filterPokemons } from '../../utils/utils'
import { GridColumn, GridSection } from '../../components/Grid/Grid'

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.medium};
`

const SearchResultText = styled.p``

const PokemonWrap = styled.div`
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.medium};

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`

const PokemonImageFigure = styled.figure`
  height: 250px;
  margin: 0;
`

const PokemonImage = styled.img`
  margin-bottom: ${({ theme }) => theme.sizes.medium};
  max-height: 250px;
  max-width: 250px;
`

const PokemonName = styled.h4`
  color: #313131;
  font-size: 18px;

  @media (min-width: 1025px) {
    font-size: 24px;
  }
`

const GET_POKEMONS = gql`
  query getPokemons {
    pokemons(first: 150) {
      id
      image
      name
      number
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
          <GridColumn>
            <div>
              <SearchWrap>
                <div>
                  <label>Sök på Pokémons efter namn: </label>
                  <input
                    onChange={event => setSearchTerm(event.target.value)}
                  />
                </div>
                {!!searchTerm.length && (
                  <SearchResultText>
                    <strong>{filteredPokemons.length}</strong> Pokémons matchar
                    din sökning på: <strong>{searchTerm}</strong>
                  </SearchResultText>
                )}
              </SearchWrap>
              <GridSection>
                {filteredPokemons.map(pokemon => {
                  return (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.name}`}>
                      <PokemonWrap>
                        <PokemonImageFigure>
                          <PokemonImage
                            alt={pokemon.name}
                            src={pokemon.image}
                          />
                        </PokemonImageFigure>
                        <PokemonName>
                          {pokemon.name} (#{pokemon.number})
                        </PokemonName>
                      </PokemonWrap>
                    </Link>
                  )
                })}
              </GridSection>
            </div>
          </GridColumn>
        )
      }}
    </Query>
  )
}

export default Start
