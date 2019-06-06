import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import client from './Client'
import theme from './theme'
import Start from './routes/Start/Start'
import Pokemon from './routes/Pokemon/Pokemon'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Route path="/" exact component={Start} />
            <Route path="/pokemon/:name" component={Pokemon} />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
