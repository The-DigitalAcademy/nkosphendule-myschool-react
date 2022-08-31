

import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio iusto aut at corporis illo tenetur quas repellendus accusantium fugiat",
    icon: "ri-draft-line",
  },

  {
    title: "ALL Time Support",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio iusto aut at corporis illo tenetur quas repellendus accusantium fugiat",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis distinctio iusto aut at corporis illo tenetur quas repellendus accusantium fugiat",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single_feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;