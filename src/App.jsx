import { useState } from 'react'
import './style/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '~bootstrap/scss/bootstrap';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from './components/organism/Header'
import Sidebar from'./components/organism/Sidebar'
import Main from'./components/organism/Main'

function App() { 

  return (
    <>
      <Header/>
      <Container fluid>
        <Row>
          <Sidebar/>
          <Main/>
        </Row>
      </Container>
    </>
  )
}

export default App
