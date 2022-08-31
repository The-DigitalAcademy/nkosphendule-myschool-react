import React from 'react';
import "./newsletter.css";
import { Container, Row, Col } from 'reactstrap';


const Newsletter = () => {
  return (
    <section>
        <Container className='newsletter'>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='mb-3'>Our not have email</h2>
                    <div className="add">
                    <input type="text" placeholder='Email'/>
                    <button className="button">add</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Newsletter;