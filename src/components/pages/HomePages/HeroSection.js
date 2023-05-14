import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Placeholder from 'react-bootstrap/Placeholder';
import Coursel from './Carousel';


function ContainerExample() {
    return (
      <Container fluid className='mt-2 text-dark p-5'>
        <Row className='p-2 shadow-lg'>
          <Col xl={6}>
            <Row className='position-relative'>
              <Col className='p-5 align-self-center'>
                <h1 className='fw-bolder display-2'>NEW CLOTHES,<br /> NEW <Placeholder xs={6} bg="dark h5" /><br /> PASSION</h1>
                <p className='border-start p-2 w-75' style={{textAlign: "justify"}}>“Never wear anything that panics the cat.” “Looking good isn't self-importance; 
                it's self-respect.” “Dressing well is a form of good manners.” “The boor covers himself, the rich man or the fool adorns himself, 
                and the elegant man gets dressed.”</p>
                </Col>
            </Row>
            <Row className='text-center'>
              <Col className='border p-4 bg-dark'><Link to="/shop" className='btn btn-outline-secondary text-light w-75 text-decoration-none fw-bolder fs-3'>SHOP NOW</Link></Col>
              <Col className='border p-4 bg-secondary fw-bolder fs-2' ><Link to="/shop" className='btn btn-outline-dark text-light w-75 text-decoration-none fw-bolder fs-3'>SEE PROMO</Link></Col>
            </Row>
        </Col>
          <Col className='p-3' xl={6}>
            <Coursel />
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default ContainerExample;