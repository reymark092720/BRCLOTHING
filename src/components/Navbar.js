import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './pages/Home';
import { Favorite } from '../pages/Favorite';
import { Shop } from "../pages/shop/shop";
import { Cart } from "../pages/cart/cart";
import { ShopContextProvider } from "../context/shop-context";
function NavScrollExample() {
  return (
    <ShopContextProvider>
    <Router>
   
    <div className='sticky-top'>
    <Container fluid className='p-0'>
    <Navbar bg="dark" variant='dark' expand="lg border" className='shadow-lg fs-4'>
      
        <Nav className='px-3'>
      <Navbar.Brand href="#home" className='text-dark'>
            <img
              alt=""
              src="https://media.discordapp.net/attachments/1098990936786227292/1105046607185059902/LogoMakr-0fwK60.png"
              width="80"
              height="80"
              className="d-inline-block align-center"
            />{' '}
            </Navbar.Brand>
            </Nav>
      
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='justify-content-center'><Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="/" id='asd'><Button variant="outline-light" className='px-3 border-0 h1 fs-4'>Home</Button></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/shop" ><Button variant="outline-light" className='px-3 border-0 h1 fs-4'>Products</Button></Nav.Link>
            </Nav.Item>
            </Nav></div>
            
          </Nav>
          <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
              <Nav.Link as={Link} to="/favorites"><Button variant="outline-light" className='px-3 border-0 h1 fs-4'><i class="bi bi-heart"></i></Button></Nav.Link>
            </Nav.Item>
                        
            <Nav.Item>
              <Nav.Link as={Link} to="/cart"><Button variant="outline-light" className='px-3 border-0 h1 fs-4'><i class="bi bi-cart3"></i></Button></Nav.Link>
            </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login" className=' text-light'>
            <Button variant="outline-light" className='px-3'>SIGN IN<div class="vr mx-3"></div>SIGNUP</Button>
              </Nav.Link>
              </Nav.Item>
            </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
    </div>
    <div>
    <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/favorites">
            <Favorite />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
    </ShopContextProvider>
  );
}

export default NavScrollExample;
