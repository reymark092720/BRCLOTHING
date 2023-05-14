import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import '../App.css'; 
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='fs-3' onClick={handleShow}>
        <span>Register!</span>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                    <h1 class="text-center">Create an Account</h1>
                    <label for="email">YOUR NAME</label>
                    <input type="text" class="w-100 my-2" placeholder="name" id="first1" onkeyup="validate2();"/>
                    <div id="errFirst1"></div>
                    <label for="email">EMAIL ADDRESS</label>
                    <input type="email" class="w-100 my-2" placeholder="name@gmail.com" id="email1" onkeyup="validate2();"/>
                    <div id="errEmail1"></div>
                    <label for="email">PASSWORD</label>
                    <input type="password" class="w-100 my-2" placeholder="Password" id="password1" onkeyup="validate2();"/>
                    <div id="errPassword1"></div>
                    <label for="email">CONFIRM PASSWORD</label>
                    <input type="text" class="w-100 my-2" placeholder="Confirm Password" id="confirm1" onkeyup="validate2();"/>
                    <div id="errConfirm1"></div>
                    <button type="submit" class="btn btn-primary my-3 w-100" id="button">Create</button>
                    <p>Have an account? <a href="#home" data-bs-toggle="modal" data-bs-target="#modal"><Login /></a></p>
                </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;