import React from 'react';
import "./Testimonals.css"
import { Container,Row, Col } from 'reactstrap';

import img from "../../../src/assests/images/testimonial01.png"
import Slider from "react-slick";


const Testimonals = () => {


    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1
    }
  return <section>
    <Container>
        <Row>
            <Col lg="8">
                <div className="testimonal_wrapper d-flex justify-content-between">

                    <div className="testimonal_img">
                        <img src={img} alt="" />
                    </div>

                    {/* <div className="testimonal_content">
                        <h2>Our teach sign </h2>

                        <Slider {...settings }>
                            <div className="single_testimonial">
                                <h6>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aliquam consequuntur architecto non perspiciatis cumque reiciendis sint rem vitae veniam.</p>

                                <div className="student_info">
                                    <h6>Jhon Doe</h6>
                                    <p>California, United State</p>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <h6>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aliquam consequuntur architecto non perspiciatis cumque reiciendis sint rem vitae veniam.</p>

                                <div className="student_info">
                                    <h6>Jhon Doe</h6>
                                    <p>California, United State</p>
                                </div>
                            </div>

                            <div className="single_testimonial">
                                <h6>Excellent course of materials</h6>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aliquam consequuntur architecto non perspiciatis cumque reiciendis sint rem vitae veniam.</p>

                                <div className="student_info">
                                    <h6>Jhon Doe</h6>
                                    <p>California, United State</p>
                                </div>
                            </div>
                        </Slider>
                    </div> */}
                </div>
            </Col>
        </Row>
    </Container>
  </section>
};

export default Testimonals;
