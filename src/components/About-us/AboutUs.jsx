import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import "./about.css";
import aboutImg from "../../assests/images/team us.png";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About Us</h2>
              <p>team work a project html, js and css</p>

              <div className="about_counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single_counter"></div>


                  <div className="single_counter"></div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single_counter"></div>

                  <div className=" d-flex gap-5 align-items-center"></div>
                  <div className="single_counter"></div>
                </div>
                <div></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
