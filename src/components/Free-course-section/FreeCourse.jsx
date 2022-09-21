

import React from 'react';
import { Container,Row,Col } from 'reactstrap';

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/study.png";
import courseImg03 from "../../assests/images/learn.png";
import courseImg04 from "../../assests/images/computer.png"; 

import FreeCourseCard from './FreeCourseCard';

import "./free-course.css"

const FreeCourseData = [
    {
        id:"01",
        imgUrl: courseImg01,
    },

    {
        id:"02",
        imgUrl: courseImg02,
    },

    {
        id:"03",
        imgUrl: courseImg03,
    },

    {
        id:"04",
        imgUrl: courseImg04,
    },

    
]

const FreeCourse = () => {
  return (
  <section>
    <Container>
        <Row>
            <Col lg="12" className='text-center mb-5'>
                <h2 className='fw-bold'>Our Study and Learn</h2>
            </Col>

            {FreeCourseData.map((item) => (
              <Col lg="3" key={item.id}>
                <FreeCourseCard item={item}/>
              </Col>
            ))}
        </Row>
    </Container>
  </section>
  );
};

export default FreeCourse;
