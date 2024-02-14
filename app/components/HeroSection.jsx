import React from "react";
import { Button, Image, Row, Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const sequenceAnimation = {
    first: "Isaac",
    second: "a Full-Stack Engineer",
    third: "a Veteran",
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <Row>
          <Col className="col-md-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="mb-4 fw-bolder">
                <span>Hello, I'm {""}</span>
                <br></br>
                <TypeAnimation
                  sequence={[
                    `${sequenceAnimation.first}`,
                    1000,
                    `${sequenceAnimation.second}`,
                    1000,
                    `${sequenceAnimation.third}`,
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>

              <p className="">
                "Technology is best when it brings people together." -Matt
                Mullenweg
              </p>
              <Button variant="secondary mt-2">
                <a href="/cv.pdf" download="cv">
                  Download CV
                </a>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
          </Col>
          <Col className="col-md-4">
            <div className="justify-content-end">
              <Image
                src="/images/ProfessionalPicture.jpg"
                alt="Myself"
                className="img-fluid mb-4"
                style={{ width: 300, height: 300 }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
