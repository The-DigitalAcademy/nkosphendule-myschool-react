

import React from "react";
import { Container,Row,Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";



const Courses = () => {
  return (
  <section>
    <Container>
        <Row>
            <Col lg='4'>
                <div className="single_course_item">
                    <div className="course_img">
                        <img src={courseImg1} alt=""  className="w-100"/>
                    </div>

                    <div className="course_details">
                        <h5 className="course_title">
                            Wed Design BootCamp-2022 for Beginners
                        </h5>

                        <div className=' d-flex justity-content-between align-items-center'>
                            <p className="lesson d-flex align-items-center gap-1">
                            <i class="ri-book-open-line"></i> 12 Lesson 
                            </p>

                            <p className="students d-flex align-items-center gap-1">
                            <i class="ri-user-line"></i> 12.5K  
                            </p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default Courses;
