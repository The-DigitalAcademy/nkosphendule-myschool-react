import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";

// import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

// import ReactPlayer from 'react-player'


const ChooseUs = () => {

    const [showVideo,setShowVideo] = useState(false)
  return (
  <section>
    <Container>
        <Row>
            <Col lg="6">
                <div className="choose_content">
                    <h2>Why Choose Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, adipisci vitae. Recusandae facilis quasi corporis esse aliquam impedit enim accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus harum corrupti eveniet laudantium porro consequuntur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi explicabo accusamus esse rem velit ipsum quis in sint autem magnam.
                    </p>
                </div>
            </Col>

            <Col lg="6">
                <div className="choose_img">

                    {/* {showVideo ? (
                    <ReactPlayer
                    url="https://www.youtube.com/watch?
                    v=qFp27TR4Yew"
                    controls
                    />
                    ) : (
                        <img src={chooseImg} alt="" className="w-100" />
                    )} */}
                
                    <span className="play_icon">
                    <i class="ri-play-circle-line" onClick={()=>
                    setShowVideo(!showVideo)}></i>
                    </span>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  );
};

export default ChooseUs;
