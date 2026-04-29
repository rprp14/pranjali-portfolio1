import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranjali Bodke</span>
            {" "}from <span className="purple">Maharashtra, India.</span>
            <br />
            I am passionate about <span className="purple">Data Analytics</span> and 
            <span className="purple"> DevOps</span>, constantly learning and building 
            projects in these domains.
            <br />
            I have a strong interest in transforming data into insights and automating 
            workflows using modern tools and technologies.
            <br />
            <br />
            Apart from tech, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading & exploring new tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep growing, and automate what you can!"{" "}
          </p>
          <footer className="blockquote-footer">Pranjali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
