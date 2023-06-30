import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center">
        <Col md="4" className="footer-copywright">
          <h3>Developed by Hemeshwar Konduru</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
