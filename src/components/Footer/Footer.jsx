

import React from 'react'
import { Container,Row, Col, ListGroup, ListGroupItems, List } from 'reactstrap';

const footerQuickLinks = [
   
]

const footerInfoLinks = [
    

]

const Footer = () => {
  return ( <footer className="footer">
    <Container>
        <Row>
            <Col lg="3">
            <h2 className='d-flex align-items-center gap-1'><i class="ri-pantone-line"></i> Learners.</h2>

            <div className="follow">
                <p>Follow us</p>
                <span>
                    {" "} 
                    <a href="facebook.com"><i class="ri-facebook-line"></i>
                </a>
                </span>

                <span>
                    {" "} 
                    <a href="facebook.com"><i class="ri-instagram-line"></i>
                </a>
                </span>

                <span>
                    {" "} 
                    <a href="facebook.com"><i class="ri-linkedin-line"></i>
                </a>
                </span>

                <span>
                    {" "} 
                    <a href="facebook.com"><i class="ri-twitter-line"></i>
                </a>
                </span>
            </div>
            </Col>

            <Col lg="3">
                {/* <h6>Explore</h6> */}
                <List>
                    {
                        footerQuickLinks.map((item,index)=>(
                            <List key={index}> <a href={item.url}>{item.display}</a></List>
                        ))}
                </List>
            </Col>

            <Col lg="3">
                {/* <h6>Information</h6> */}
                <List>
                    {
                        footerInfoLinks.map((item,index)=>(
                            <List key={index}> <a href={item.url}>{item.display}</a></List>
                        ))}
                </List>
            </Col>

            {/* <Col lg="3">
                <h6>Get in Touch</h6>
                <p>Address:Orange Farm</p>
                <p> Phone: +27 634244380 </p>
                <p>Email: example@gmail.com</p>
            </Col> */}
        </Row>
    </Container>
  </footer>
  );
};

export default Footer;