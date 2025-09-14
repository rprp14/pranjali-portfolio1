import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";

// Import images (make sure these exist inside src/Assets/Projects/)
import crimeRateImg from "../../Assets/Projects/Crime-rate.png";
import fitnessTrackerImg from "../../Assets/Projects/FitnessTracker.png";
import notesImg from "../../Assets/Projects/tipCalc.png";
import weatherCalcImg from "../../Assets/Projects/Weathercal.png";
import amazonPrimeImg from "../../Assets/Projects/Amazon.png";

import psoEdgeImg from "../../Assets/Projects/Pso.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
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
              ghLink="https://github.com/rprp14/Fitness-Tracker"
              isBlog={false}
            />
          </Col>

          {/* Tip Calculator */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={notesImg}
              title="Tip Calculator"
              description="An easy tip calculator for quick bill splitting."
              ghLink="https://github.com/rprp14/Tip-Calculator"
              isBlog={false}
            />
          </Col>

          {/* Weather Calculator */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={weatherCalcImg}
              title="Weather Calculator"
              description="A web app that fetches weather data and displays it with analytics."
              ghLink="https://github.com/rprp14/Weather-Calculator"
              isBlog={false}
            />
          </Col>

          {/* Amazon Prime Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={amazonPrimeImg}
              title="Amazon Prime Dashboard"
              description="Interactive dashboard analyzing Amazon Prime Video content, highlighting insights like total titles, ratings, genres, countries, and release year trends."
              ghLink="https://github.com/rprp14/Amazon-prime-Dashboard"
              isBlog={false}
            />
          </Col>

         

          {/* PSO Edge Detection */}
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={psoEdgeImg}
              title="PSO Edge Detection"
              description="Edge detection technique using Particle Swarm Optimization (PSO) combined with image sharpening filters, implemented in Python."
              ghLink="https://github.com/rprp14/PSO_Edge_Detection"
              isBlog={false}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
