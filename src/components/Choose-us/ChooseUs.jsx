import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from 'react-player'


const ChooseUs = () => {

    const [showVideo,setShowVideo] = useState(false)
  return (
  <section>
    <Container>
        <Row>
            <Col lg="6">
                <div className="choose_content">
                    <h2>Why Choose Us</h2>
                    <p>LIf you are a student, a former student, or an educator and have an interesting story about your experience, please tell us about it. 
                    </p>
                </div>
            </Col>

            <Col lg="6">
                <div className="choose_img">

                    {showVideo ? (
                    <ReactPlayer
                    url="https://www.youtube.com/watch?v= qFp27TR4Yeww"
                    controls 
                    width="100%" 
                    height="300px"
                    />
                    ) : (
                        <img src={chooseImg} alt="" className="w-100" />
                    )}
                
                   {
                    !showVideo &&  <span className="play_icon">
                    <i class="ri-play-circle-line" onClick={()=>
                    setShowVideo(!showVideo)}></i>
                    </span>
                   }
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default ChooseUs;
