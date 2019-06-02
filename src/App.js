import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import client from './Client'
import Start from './routes/Start/Start'
import Pokemon from './routes/Pokemon/Pokemon'

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <Route path="/" exact component={Start} />
          <Route path="/pokemon/:name" component={Pokemon} />
        </ApolloProvider>
      </Router>
    )
  }
}

export default App
