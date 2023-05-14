import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function ContainerExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });
  return (
    <Container fluid className='p-3 mt-5'>
      <Row>
        <Col><p className='fs-4 fw-bolder'>Customer Care</p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Contact Us</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> FAQ's</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Return & Exchanges</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Shipping & Handling</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Damage or Defect</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Items</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Cancelling or Changing an Order</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Terms of Service</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'>Privacy</a></p>
        </Col>
        <Col>
        <p className='fs-4 fw-bolder'>Inside BR Clothing</p>
        <div><p><a href='#' className='text-decoration-none p-0 text-dark'>About Us</a></p>
        <p><Link className='text-decoration-none p-0 text-dark'  to="/login">Product</Link>s</p>
        <p><Link className='text-decoration-none p-0 text-dark'  to="/cart"><p>Cart</p></Link></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'>Featured</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'>Sales</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'>Promo</a></p></div>
        
        </Col>
        <Col>
        <p className='fs-4 fw-bolder'>My Account</p>
        <Link className='text-decoration-none p-0 text-dark'  to="/login"><p>Sign In/Register</p></Link>
        <Link className='text-decoration-none p-0 text-dark'  to="/favorites"><p>My Favorite</p></Link>
        <Link className='text-decoration-none p-0 text-dark'  to="/cart"><p>My Cart</p></Link>
        </Col>
        <Col><p className='fs-4 fw-bolder '>Top Searchers</p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'>Black T-shirt</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Black T-shirt</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Black T-shirt</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Black T-shirt</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Contact Us</a></p>
        <p><a href='#' className='text-decoration-none p-0 text-dark'> Contact Us</a></p></Col>
        <Col>
        <p className='fs-4 fw-bolder'>Sign up & get 10% off your next order</p>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
  
        
          <Form.Group className="position-relative mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
            />
          </Form.Group>
          <Button type="submit">Subscribe</Button>
          </Row>
        </Form>
      )}
     
    </Formik>
    <div className='p-2 d-flex gap-5'>
    <a href='#'><i class="bi bi-facebook" style={{fontSize: "2rem"}}></i></a>
    <a href='#'><i class="bi bi-instagram" style={{fontSize: "2rem", color: 'red'}}> </i></a>
    <a href='#'><i class="bi bi-twitter" style={{fontSize: "2rem"}}> </i></a>
    <a href='#'><i class="bi bi-person-lines-fill" style={{fontSize: "2rem",color: 'red'}}></i></a>
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
  