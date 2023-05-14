import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
function NoPage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://thumbs.dreamstime.com/b/full-length-portrait-young-fit-man-dark-cloths-white-background-male-fashion-model-posing-casual-outfit-attractive-169232656.jpg/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://thumbs.dreamstime.com/b/full-length-portrait-young-fit-man-dark-cloths-white-background-male-fashion-model-posing-casual-outfit-attractive-169232656.jpg.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://thumbs.dreamstime.com/b/full-length-portrait-young-fit-man-dark-cloths-white-background-male-fashion-model-posing-casual-outfit-attractive-169232656.jpg/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default NoPage;