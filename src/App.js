import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './Client'
import Start from './Start/Start'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Start />
      </ApolloProvider>
    )
  }
}

export default App
