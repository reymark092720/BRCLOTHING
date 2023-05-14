import * as formik from 'formik';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Disabled = () => {

  const { Formik } = formik;
  const schema = yup.object().shape({
    firstname: yup.string().max(15, 'Must be 15 characters or less').required(),
    lastname: yup.string().required(),
    address: yup.string().required(),
    contactnumber: yup.string().max(11, 'Must be 11 Digits').required(),
    email: yup.string().email('example@gmail.com')
    .required(),
    password: yup.string().required(),
    confirmpassword: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });
  return (
    <>   
    <Formik
    
      validationSchema={schema}
      onSubmit={values => {
        
        if(values.password !== values.confirmpassword){
          toast.warning('Password do not match!');
        }else {
          toast.success('Password match!');

        }
        axios.post('https://sheet.best/api/sheets/161c399f-bdd1-4864-a369-a92dacca92f1',values)
        .then(response => {
          console.log(response)
          toast.success('Success');
          
        })
        .then(err => {
          console.log(err)
        })
      }}
      initialValues={{
        firstname: '',
        lastname: '',
        address: '',
        contactnumber: '',
        email: '',
        password: '',
        terms: false,
        confirmpassword: ''
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className=' ms-5'>
          <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01" className='mb-4'>
              <Form.Label className='fw-bolder'>FIRSTNAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="firstname"
                name="firstname"
                value={values.firstname}
                onChange={handleChange}
                isInvalid={touched.firstname && !!errors.firstname}
              />
              <Form.Control.Feedback type="invalid">
              {errors.firstname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02" className='mb-4'>
              <Form.Label className='fw-bolder'>LASTNAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="lastname"
                name="lastname"
                value={values.lastname}
                onChange={handleChange}
                isInvalid={touched.lastname && !!errors.lastname}
              />
              <Form.Control.Feedback type="invalid">
              {errors.lastname}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02" className='mb-4'>
              <Form.Label className='fw-bolder'>ADDRESS</Form.Label>
              <Form.Control
                type="text"
                placeholder="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                isInvalid={touched.address && !!errors.address}
              />
              <Form.Control.Feedback type="invalid">
              {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02" className='mb-4'>
              <Form.Label className='fw-bolder'>CONTACT NUMBER</Form.Label>
              <Form.Control
                type="number"
                placeholder="+63"
                name="contactnumber"
                value={values.contactnumber}
                onChange={handleChange}
                isInvalid={touched.contactnumber && !!errors.contactnumber}
              />
              <Form.Control.Feedback type="invalid">
              {errors.contactnumber}
              </Form.Control.Feedback>
            </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationFormik03" className='mb-4'>
              <Form.Label className='fw-bolder'>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
              />
              <Form.Control.Feedback type="invalid">
              {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormik04" className='mb-4 w-100'>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && !!errors.password}
              />
              <Form.Control.Feedback type="invalid">{errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormik05" className='mb-4 w-100'>
              <Form.Label>CONFIRM PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirmpassword"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                isInvalid={touched.confirmpassword && !!errors.confirmpassword}
              />
              <Form.Control.Feedback type="invalid">{errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit" className='w-100 d-block mb-5'>SUBMIT</Button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
    </>
  );
}

export default Disabled;