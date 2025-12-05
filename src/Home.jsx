import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Home() {
  return (
    <>
    <h1 className='text-center'>Home</h1>
    <Container className='bg-danger'>
      <Row>
        <Col className='bg-primary'>1 of 3</Col>
        <Col className='bg-secondary'>2 of 3</Col>
        <Col className='bg-warning'>3 of 3</Col>
      </Row>
    </Container>
    </>

  )
}

export default Home