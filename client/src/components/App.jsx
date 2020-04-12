import React from 'react'
import { Container, Header } from 'semantic-ui-react'
// component imports
import Daemon from './Daemon.jsx'

const App = () => {
  return (
    <Container fluid textAlign="center">
      <Header as="h1" textAlign="center">JAMBU</Header>
      <Daemon />
    </Container>

  )
}

export default App
