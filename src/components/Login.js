import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import FormLogin from './FormAccount';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

function ContainerExample() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
    <Container className='mt-5'>
      <Row className="justify-content-md-center">
        <Col sm xs lg="8" className='p-5 borderk'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3} className='bg-light shadow-lg'>
          <Nav variant="pills" className="flex-column mt-5 pt-3">
            <Nav.Item>
              <Nav.Link className='btn btn-outline-dark bg-secondary mb-5 shadow-lg fw-bolder fs-4' eventKey="first">SIGN IN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='btn btn-outline-dark mb-5 bg-secondary shadow-lg fw-bolder fs-4' eventKey="second">SIGN UP</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className='shadow-lg p-5'><LoginForm /></Tab.Pane>
            <Tab.Pane eventKey="second" className='shadow-lg p-5'><FormLogin /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container></Col>
      </Row>
    </Container>
    </>
  );
}

export default ContainerExample;