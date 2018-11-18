import React, { Component } from 'react'
import './App.css'
import { Container } from 'reactstrap'
import { WOWStore } from './store.js'
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import WOWList from './containers/WOWList'

class App extends Component {
  render () {
    return (
      <WOWStore>
        <Container fluid={true}>
          <Header />
          <SubHeader/>
          <WOWList />
        </Container>
      </WOWStore>
    )
  }
}

export default App
