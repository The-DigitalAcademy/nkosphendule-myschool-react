


import React from 'react';
import "./Testimonals.css"
import { Container,Row, Col } from 'reactstrap';

import img from "../../assests/images/testimonal01.png"

const Testimonals = () => {
  return <section>
    <Container>
        <Row>
            <Col lg="">
                <div className="testimonal_wrapper d-flex justify-content-between">

                    <div className="testimonal_img">
                        <img src={img} alt="" />
                    </div>

                    <div className="testimonal_content">
                        <h2>Our Students Voice</h2>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
};

export default Testimonals;
