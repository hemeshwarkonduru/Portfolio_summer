import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiIntellijidea,
  SiEclipseide
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /><p className="small-text">VS code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /><p className="small-text">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea /><p className="small-text">Intellij IDEA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide /><p className="small-text">Eclipse IDE</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /><p className="small-text">Heroku</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
