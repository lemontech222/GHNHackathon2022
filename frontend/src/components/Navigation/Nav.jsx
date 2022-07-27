import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => {
  return (
    <Container>
      <Row>
        <Col style={{border:'1px solid black'}} xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col style={{border:'1px solid black'}} xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col style={{border:'1px solid black'}} xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
    </Container>
  )
}

export default Nav