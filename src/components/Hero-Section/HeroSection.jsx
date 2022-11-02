import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/teacher.png";
import heroImg2 from "../../assests/images/photo-teach.jpeg";
import heroImg3 from "../../assests/images/photo-png.jpeg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2 className="mb-2">Anytime learn on your schedule</h2>
              <p className="mb-4">
                Teacher and chidren a learn book and development.
              </p>
            </div>
          </Col>

          <div className="pictureCard">
            <Col
              lg="3"
              md="5"
              className="text-center mb-5"
              style={{ float: "right" }}
            >
              <img src={heroImg} alt="" className="w-10" />
            </Col>
            <Col
              lg="6"
              md="5"
              className="text-center mb-5"
              style={{ float: "right" }}
            >
              <img src={heroImg2} alt="" className="w-10" />
            </Col>
            <Col
              lg="3"
              md="5"
              className="text-center mb-5"
              style={{ float: "right" }}
            >
              <img src={heroImg3} alt="" className="w-10" />
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
