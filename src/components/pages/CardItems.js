import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Def(props) {
  const [show, setShow] = React.useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
        <Card style={{ width: '18rem' }} className='position-relative text-dark'>
      <Card.Img 
      style={{height: 300}}
      variant="top" 
      src={props.coverImage} />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        {props.openSpots === 0 && <div className='position-absolute top-0 start-0 border border-danger p-2 fw-bolder bg-danger rounded'>Sold Out</div>}
        <Card.Text className='text-center'>
            <p className='fs-5'>{props.description}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    )
};
