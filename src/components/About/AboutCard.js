import React from "react";
import Card from "react-bootstrap/Card";
import { ImEarth,ImTrophy } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi, I am <span className="orange">Hemeshwar Konduru</span>, a final year Master's student pursuing
            Computer Science (MSCS) at <span className="orange">Indiana Univeristy Bloomington.</span>
            <br />
            <br />
            I worked as a Backend Java Developer in Tata Consultancy Services for 2 years, where I worked 
            on .NEt Core, Micro-services, ReactJs, Kubernetes, Google CLoud Platform, MongoDB. I also worked on other
            frameworks like React.js, Node.js, Flask.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImTrophy /> Playing Badminton, Cricket, and Volleyball
            </li>
            <li className="about-activity">
              <ImEarth /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
