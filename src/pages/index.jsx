import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";


// import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import ProfileImage from "../images/boatPortrait.JPEG";

import Wrapper from "../components/Wrapper";
// import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <Wrapper>
      
      <Container>
        <Row>
          <Col size="md-3">
            <h3>About Me</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Image src={ ProfileImage } fluid />
          </Col>
          <Col size="md-10">
            <p>
              My name is Kerem and thank you for visiting my page. Please use
              the contacts link to email me or visit my linkedIn page. You can
              also see some more pictures of me if you click the portfolio link.
            </p>

            <p>
              I have been very blessed to have wonderful friends and family that
              have molded my personality over the years and continue to guide me
              everyday in my life. I am also fortunate enough to have traveled
              much in life due to vacations, my previous jobs and the jobs of my
              parents. I have been fortunate enough to witness the wonders of
              nature, be captivated by incredible historical structures and have
              been immersed in unique cultures in different parts of the world.
              I believe that all these experiences and influences combine to
              make me the person that I am today.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              For my personality, I will share the results of what I feel is the
              most accurate personality test that I have ever taken. Based on
              the results of that Insights Discovery test, I am a very dominant
              inspirer yellow personality. When I attended the training, I
              thought it described me accurately and here is what that means:
            </p>
            <ul>
              <li>
                Yellow people are the extravert feelers. they are more
                personally involved in the decisions they take and are good in
                motivating others. Their motto is: Let’s do it together, and on
                a good day they know how to motivate others with their
                enthusiasm. Yellow people experience stress when they are
                restricted in their flexibility, when there is no interaction,
                or the possibility to have fun. Yellow people respond to stress
                by being over-responsive, or by trying to push their though with
                many arguments. To get out of this situation, yellow people need
                to get space to move, save their face or you can simply distract
                them by changing the topic.
              </li>
              <li>
                The Inspirer (yellow) is the extravert feeler. These are the
                creative and convincing people who have people skills. They are
                not only good at sharing their own feelings, but also have a
                gift in reading what other people might need to be satisfied.
                Inspirers are the people who make sure everybody in the group
                feels comfortable, and they love interaction. Inspirers strive
                for approval and popularity, and they fear rejection and
                loneliness.
              </li>
              <li>
                To learn about insights discovery, please visit page{" "}
                <a href="https://www.mudamasters.com/en/personal-growth-personality/insights-discovery-part-1-4-colors#:~:text=Insights%20Discovery%20is%20a%20fantastic%20tool%20that%20can,by%20a%20color%3A%20red%2C%20yellow%2C%20green%20and%20blue.">
                  Insights Discovery.
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>It's very hard to pick only a handful of them but here are also some of my favorite quotes from amazing people:</p>
                      <ul>
                        <li>Mother Teresa: "If we have no peace, it is because we have forgotten that we belong to each other."</li>
                        <li>Albert Einstein: "It's not that I am smart.  It's just that I stay with the problems longer."</li>
                        <li>Abraham Lincoln: "When I do good, I feel good.  When I do bad, I feel bad.  That's my religion."</li>
                        <li>Ataturk: "One can reach the true delight and happiness in life only by working for the existence, honor and happiness of future generations."</li>
                        <li>MLK Jr: "Darkness cannot drive out darkness; only light can do that.  Hate cannot drive out hate, only love can do that."</li>
                      </ul>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default MainPage;
