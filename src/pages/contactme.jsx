import { Jumbotron, Container, Row, Col, Card, Button } from "react-bootstrap";

const ContactInfo = () => {
  return (
    <Container fluid>
      <Jumbotron>
        <h2 className="text-center">
          Please use the links to contact me and see my work history.
        </h2>
        <br></br>
        <p></p>
        <Row>
          <Col>
            <Card style={{ width: "18rem", height: "300px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title className="text-center">Email Me</Card.Title>
                <Card.Text>
                  The easiest way to contact me is via email. <br></br>
                  <br></br>Please click the button below to email me.
                </Card.Text>
                <Card.Body className="text-center">
                  <Button href="mailto:keremukaraman@gmail.com">
                    Email Kerem
                  </Button>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "300px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title className="text-center">
                  Find me on LinkedIn
                </Card.Title>
                <Card.Text>
                  You can see my previous work experiences on LinkedIn.{" "}
                  <br></br>
                  <br></br>Please click the button to go to my LinkedIn profile.
                </Card.Text>
                <Card.Body className="text-center">
                  <Button href="https://www.linkedin.com/in/kerem-karaman-8798a173/">
                    Find Kerem on Linkedin
                  </Button>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem", height: "300px" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title className="text-center">
                  Find me on Github
                </Card.Title>
                <Card.Text>
                  You can find all my coding projects on my GIthub account.
                  <br></br>
                  <br></br>Please click the button to view my Github repos.
                </Card.Text>
                <Card.Body className="text-center">
                  <Button href="https://github.com/KKaraman">
                    Visit Kerem's Github
                  </Button>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default ContactInfo;
