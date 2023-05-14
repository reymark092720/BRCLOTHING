import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import data from '../data';
import CustomPage from './CustomPage';
import CardItems from '../CardItems';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Section1.css';

function AutoLayoutVariableExample() {
  const [key, setKey] = useState('home');
  
  const cards2 = data.map(item => {
    return (
      <CardItems 
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mt-5 just justify-content-md-center bg-dark fs-3 p-5 text-dark"
      fill
    >
      <Tab eventKey="home" title="Featured">
        <div>
        <Container fluid>
      <Row>
        <Col md={12} 
        className='p-5 border text-center fs-3 d-flex flex-wrap p-5 gap-3 shadow-lg justify-content-center'>
          <h1>Featured Tees</h1>
          <p className='text-wrap'>Get ready for summer by stocking up on our latest and most popular District 100% supersoft ringspun cotton tees.</p>
          {cards2}
          </Col>
      </Row>
      
    </Container>
        
        </div>
      </Tab>
      <Tab eventKey="profile" title="Promo">
      <Container className='position-relative'>
      <div class="border position-absolute top-50 start-50 translate-middle bg-dark" style={{height: "500px",width: "300px"}}><Image
        fluid
          className="d-block w-100 h-100"
          src="https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        /></div>
      <Row>
        <Col variant="secondary" className='p-5 border text-center fs-3 d-flex flex-wrap p-5 gap-3 shadow-lg justify-content-center bg-dark'>
          
          </Col>
          <Col className='border'>
              <Row>
            <Col md={12} className='p-5 bg-secondary w-100 text-center'>
              <h1 className='display-3'>SPECIAL <br/> <span className='fw-bolder'>PROMO</span></h1>
              <h1 className='display-3'>Get UP 2 <br/> <span className='fw-bolder'>30 %</span></h1>
              </Col>
              <Col md={12} className='p-5 bg-primary d-block align-self-center'>
              <Row className='justify-content-center'>
        <Col md={6} >
        <br/>
              <Button variant="secondary" className='p-3 shadow-lg fs-2 fw-bolder'>SHOP NOW</Button>{' '}
              
              <p className='mt-5'><i class="bi bi-telephone-plus"> 091545455</i></p>
              
              <p><i class="bi bi-globe">www.http://localhost:3000/.com</i></p></Col>
      </Row>
              
              </Col>
          </Row>
          </Col>
      </Row>
      
    </Container>
      </Tab>
      <Tab eventKey="contact" title="Sales">
      <CustomPage />
      <div className='d-flex flex-wrap py-5 gap-3 shadow-lg justify-content-center mx-3'>
        
        </div>
      </Tab>
    </Tabs>
    </div>
  );
}

export default AutoLayoutVariableExample;




// import Nav from 'react-bootstrap/Nav';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Promo from './Promo';
// import Featured from './Featured';
// import Sales from './Sales';
// import Disabled from './Disabled';
// function Section() {
//     return (
//       <Router>
//       <>
//         <Nav className="justify-content-center  mt-5 bg-light fs-1" activeKey="/promo">
//           <Nav.Item>
//             <Nav.Link as={Link} to="/">Promo</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/featured" eventKey="link-1">Featured</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/sales" eventKey="link-2">Sales</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link as={Link} to="/disabled" eventKey="link-3">
//               Disabled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//         </>
//         <div>
//         <Switch>
//               <Route path="/disabled">
//                 <Disabled />
//               </Route>
//               <Route path="/featured">
//                 <Featured />
//               </Route>
//               <Route path="/sales">
//                 <Sales />
//               </Route>
//               <Route path="/">
//                 <Promo />
//               </Route>
//             </Switch>
//             </div>
//         </Router>
//   );
// }

// export default Section;