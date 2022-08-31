import React from "react";
import "./Testimonals.css";
import { Container, Row, Col } from "reactstrap";

import img from "../../../src/assests/images/voice.png";
import Slider from "react-slick";

const Testimonals = () => {
  const props = {
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="testimonal d-flex justify-content-between align-items-center">
              <div className="testimonal_img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonal_content w-50">
                <h2 className="mb-4">Our teach sign </h2>

                <Slider {...props}>
                  <div>
                    <div className="single_testimonial">
                      <p></p>

                      <div className="student_info">
                        <h6>The media of hall </h6>
                        <p>DA, south africa</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;