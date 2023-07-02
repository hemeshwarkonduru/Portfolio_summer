import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eventimg from "../../Assets/bg_img.jpg";
import datavis from "../../Assets/Projects/Blog-thumbnail.png";
import mlimage from "../../Assets/1_cG6U1qstYDijh9bPL42e-Q.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects I've worked on
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={datavis}
              title="Super Market Data Analyzer"
              description="A data Analyzer app based on Super market items database, this website shows the visualizations of data of the transactions and items, we used React.js, Node.js, PostgreSQL"
              ghLink="https://github.com/hemeshwarkonduru/super_market_analyzer_front"
              demoLink="https://adt-web.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventimg}
              title="Event Factory"
              description="A one stop venue booking and event organizing app build on React.js and Flask using Restful architecture."
              ghLink="https://github.com/hemeshwarkonduru/eventfactory-backend"
              demoLink="https://eventfactory.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlimage}
              title="Image Classifier"
              description="Code that classifies the images between cat and dogs using Convolutional Neural Networks."
              ghLink="https://github.com/hemeshwarkonduru/Image-Recognition-using-CNN-in-Python"          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
