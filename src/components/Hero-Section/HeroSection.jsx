import React from "react";
import { Container,Row, Col } from "reactstrap";
import heroImg from "../../assests/images/teacher.png";
import './hero-section.css'

const HeroSection = () => {
  return (
  <section>
    <Container>
        <Row>
            <Col lg="6" md= "6">
               <div className="hero_content">
               <h2 className="mb-4">
                Anytime <br /> Learn on your <br /> Schedule
                </h2>
                <p className="mb-4">
                Teacher and chidren a learn book and development.</p>
               </div>
            </Col>
            <Col lg="6" md="6">
                <img src={heroImg} alt="" className="w-100"/>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default HeroSection;