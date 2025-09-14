import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiGit, SiGithub, SiDocker, SiPodman, SiAmazonaws, SiLinux, SiKubernetes, SiFigma, SiCanva } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPodman /></Col>
      {/* Removed SiBuildah because it does not exist */}
      <Col xs={4} md={2} className="tech-icons"><SiAmazonaws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKubernetes /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCanva /></Col>
    </Row>
  );
}

export default Toolstack;
