import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

// Use the exact filenames
import crimeRateImg from "../../Assets/Projects/Crime-rate.png"; // Make sure .png, not .pmg
import fitnessTrackerImg from "../../Assets/Projects/FitnessTracker.png";
import notesImg from "../../Assets/Projects/tipCalc.png"; // You can rename tipCalc.png to Notes.png if you want
import weatherCalcImg from "../../Assets/Projects/Weathercal.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Crime Rate Predictor */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={crimeRateImg}
              title="Crime Rate Predictor"
              description="Predicts crime rates with graphs, charts, and heatmaps based on selected country, state, cities, time, and crime type."
              ghLink="https://github.com/rprp14/Crime-Rate"
              isBlog={false}
            />
          </Col>

          {/* Fitness Tracker */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={fitnessTrackerImg}
              title="Fitness Tracker"
              description="A web app to track fitness activities, calories, and workouts with stats visualization."
              ghLink="https://github.com/rprp14/Fitness_Tracker"
              isBlog={false}
            />
          </Col>

          {/* Notes / Tip Calculator */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={notesImg}
              title="Notes App / Tip Calculator"
              description="A simple app to add, edit, delete, and save notes locally (or calculate tips)."
              ghLink="https://github.com/rprp14/Notes"
              isBlog={false}
            />
          </Col>

          {/* Weather App */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={weatherCalcImg}
              title="Weather Calculator"
              description="A web app that fetches weather data and displays it with analytics."
              ghLink="#" // Add GitHub link if available
              isBlog={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
