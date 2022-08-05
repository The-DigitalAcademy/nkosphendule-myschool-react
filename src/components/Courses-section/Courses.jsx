import React from "react";
import { Container,Row,Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";


const  coursesData = [
    {
        id:"01",
        title: "web Design BootCamp-2022 for Beginners",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg1
    },

    {
        id:"02",
        title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg2
    },

    {
        id:"03",
        title: "UI/UX BootCamp for Beginners in 2022",
        lesson: 12,
        students: 12.5,
        rating: 5.9,
        imgUrl: courseImg3
    },
];

const Courses = () => {
  return (
    <section>
        <Container>
            <Row>

                <Col lg="12" className="mb-5">
                    <div className="course_top d-flex justify-content-between align-items-center">
                        <div className="course_top_left w-50">
                            <h2>Our Popular Courses</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis.</p>
                        </div>

                        <div className="w-50 text-end">
                        <button className="btn">See All</button>
                        </div>
                    </div>
                </Col>
              {coursesData.map((item) => (
                <Col lg='4' md="6">
                    <CourseCard key={item.id} item={item} />
                </Col>
               ))}
            </Row>
        </Container>
    </section>
  );
};

export default Courses;
