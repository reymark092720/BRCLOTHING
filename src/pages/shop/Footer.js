import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function ContainerExample() {
  return (
    <Container fluid className='p-3 mt-5'>
      <Row>
        <Col><p className='fs-4 fw-bolder'>Customer Care</p>
        <p>Contact Us</p>
        <p>FAQ's</p>
        <p>Return & Exchanges</p>
        <p>Shipping & Handling</p>
        <p>Damage or Defect</p>
        <p>Items</p>
        <p>Cancelling or Changing an Order</p>
        <p>Terms of Service</p>
        <p>Privacy</p>
        </Col>
        <Col>
        <p className='fs-4 fw-bolder'>Inside BR Clothing</p>
        <div><p>About Us</p>
        <p>Products</p>
        <p>Carts</p>
        <p>Featured</p>
        <p>Sales</p>
        <p>Promo</p></div>
        
        </Col>
        <Col>
        <p className='fs-4 fw-bolder'>My Account</p>
        <p>Sign In/Register</p>
        <p>My Favorite</p>
        <p>My Cart</p>
        </Col>
        <Col><p className='fs-4 fw-bolder'>Top Searchers</p>
        <p>Black T-shirt</p>
        <p>Black T-shirt</p>
        <p>Black T-shirt</p>
        <p>Black T-shirt</p>
        <p>Contact Us</p>
        <p>Contact Us</p></Col>
        <Col>
        <p className='fs-4 fw-bolder'>Sign up & get 10% off your next order</p>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Recipient's email"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2" className='bg-danger'>Subscribes</InputGroup.Text>
      </InputGroup>
      <Form>
      {['checkbox'].map((type) => (
        <div  className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />
          By checking the box, you agree that you are at least 16 years of age.
        </div>
      ))}
    </Form>
    <div className='p-2 d-flex gap-5'>
    <i class="bi bi-facebook" style={{fontSize: "2rem"}}></i>
    <i class="bi bi-instagram" style={{fontSize: "2rem"}}> </i>
    <i class="bi bi-twitter" style={{fontSize: "2rem"}}> </i>
    <i class="bi bi-person-lines-fill" style={{fontSize: "2rem"}}></i>
    </div>
    
        </Col>
      </Row>
      <Row>
         <Col xs lg="12" className='text-center bg-dark text-light p-4'><i class="bi bi-at"> All Right Reserve</i></Col>
      </Row>

    </Container>
  )
  }
  export default ContainerExample;

  

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';


// const Footer = () => {
//   const [modalShow, setModalShow] = useState(false);
//     return (
//       <Container className='border text-light text-center shadow-lg' fluid>
//       <Row className="justify-content-md-center">
//         <Col className='p-3 border gap-3 d-flex'>
//           <Button className='w-50 p-3 shadow-lg' variant="dark"><a href='#home' className='text-light fw-bolder'><i class="bi bi-facebook" style={{fontSize: "2rem"}}> Facebook</i></a></Button>{' '}
//           <Button className='w-50 p-3 shadow-lg' variant="dark"><a href='#home' className='text-light fw-bolder'><i class="bi bi-instagram" style={{fontSize: "2rem"}}> Instagram</i></a></Button>{' '}
//           <Button className='w-50 p-3 shadow-lg' variant="dark"><a href='#home' className='text-light fw-bolder'><i class="bi bi-twitter" style={{fontSize: "2rem"}}> Twitter</i></a></Button>{' '}
//           <Button className='w-50 p-3 shadow-lg' variant="dark"><a href='#home' className='text-light fw-bolder'><i class="bi bi-person-lines-fill" style={{fontSize: "2rem"}}> Contact Us</i></a></Button>{' '}
//         </Col>
//         <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//       </Row>
//       <Row className="justify-content-md-center">
//         <Col xs lg="3" className=' border p-3 fs-4'><a href='#home' onClick={() => setModalShow(true)}>ABOUT US</a></Col>
//         <Col xs lg="3" className=' border p-3 fs-4'><a href='#home' onClick={() => setModalShow(true)}>FAQ's</a></Col>
//         <Col xs lg="3" className=' border p-3 fs-4p-3 fs-4'><a href='#home' onClick={() => setModalShow(true)}>TERM OF SERVICE</a></Col>
//       </Row>
//       <Row className="justify-content-md-center text-dark">
//         <Col xs lg="12" className='border p-2'><i class="bi bi-at"> All Right Reserve</i></Col>
//       </Row>
//     </Container>
//     )
//   };
//   export default Footer;

//   function MydModalWithGrid(props) {
//     return (
//       <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className='modal-dialog modal-lg'>
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter" className='text-center fs-1'>
//             About Us
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="show-grid">
//           <Container>
//             <Row>
//               <Col xs={12} md={6} className='p-5 border bg-dark'>
//               <Image 
//             src="https://images.pexels.com/photos/7479825/pexels-photo-7479825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//             className='h-100'  
//             fluid /> 
//               </Col>
//               <Col xs={6} md={6} className='p-5 border bg-primary'>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
//               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={12} md={6} className='p-5 border bg-success'>
                
//               </Col>
//               <Col xs={6} md={6} className='p-5 border'>
                
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={6} md={4} className='p-5 border'>
               
//               </Col>
//               <Col xs={6} md={4} className='p-5 border'>
                
//               </Col>
//               <Col xs={6} md={4} className='p-5 border'>
                
//               </Col>
//             </Row>
//             <Row>
//               <Col xs={6} md={4} className='p-5 border'>
               
//               </Col>
//               <Col xs={6} md={4} className='p-5 border'>
                
//               </Col>
//               <Col xs={6} md={4} className='p-5 border'>
                
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
  