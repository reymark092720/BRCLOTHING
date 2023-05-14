
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Feedback from 'react-bootstrap/Feedback'
import { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function FormExample() {
  const navigate = useRouteMatch();
  const [datas, setDatas] = useState(null)
  console.log(datas);
  useEffect(() => {
    fetch('https://sheet.best/api/sheets/161c399f-bdd1-4864-a369-a92dacca92f1')
            .then(res=>res.json())
            .then(json=>setDatas(json))
  },[]);
  const { Formik } = formik;
  const schema = yup.object().shape({
    email: yup.string().email('example@gmail.com')
    .required(),
    password: yup.string().required()

  });

  return (
    
    <Formik
      validationSchema={schema}
      onSubmit={values => {
        {datas.map((data => {
          if(values.email === data.email && values.password === data.password){
            toast.success('Success')
            navigate('/')
          }
          else {
            toast.warning('Email and Password do not match!')
          }
        }))}
        
      }}
      initialValues={{
        email: '',
        password: ''
      }}
     
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit} className='ms-5'>
          <Row className="mb-3">
            
          <Form.Group as={Col} md="12" controlId="validationFormik01" className='mb-4'>
              <Form.Label className='fw-bolder'>EMAIL ADDRESS</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                autoFocus
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && !!errors.email}
                
              />
              <Form.Control.Feedback type="invalid" >
              {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormik02" className='mb-4'>
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
              autoFocus
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
          </Row>
          <Button type="submit" className='w-100 mb-5' onClick={handleSubmit}>Login</Button>
          Dont have any account!
          <ToastContainer position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
 />
        </Form>
      )}
    </Formik>
    
  );
}

export default FormExample;