import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContainerExample() {
  return (
    <Container fluid className='p-0 bg-dark justify-content-md-center '>
      <Row>
        <Col>
        <img
          className="d-block w-75 mx-auto shadow-lg opacity-75"
          style={{height: 200}}
          src="./images/LogoMakr-2tYjNo.png"
          alt="Second slide"
        />
        </Col>
      </Row>
    </Container>
  );
}
export default ContainerExample;