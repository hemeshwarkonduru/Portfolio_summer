import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDotnet,
} from "react-icons/di";
import {
  SiPostgresql,
  SiSpringboot,
  SiGooglecloud,
  SiFlask
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "left", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /><p className="small-text">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet/><p className="small-text">C# .NET</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /><p className="small-text">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /><p className="small-text">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /><p className="small-text">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot /><p className="small-text">Spring Boot</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /><p className="small-text">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /><p className="small-text">Python Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /><p className="small-text">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /><p className="small-text">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /><p className="small-text">PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /><p className="small-text">Google Cloud Platform</p>
      </Col>
    </Row>
  );
}

export default Techstack;
