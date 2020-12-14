import React from 'react'
// import {
//     BrowserRouter as Router,
//     } from "react-router-dom";
import { Navbar,Nav,NavDropdown, Container, Row, Col} from 'react-bootstrap'

//import resume
// import WorkResume from "../images/keremKaraman_workResume";



class BootstrapNavbar extends React.Component{

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        {/* <Router> */}
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Kerem Karaman</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home Page</Nav.Link>
                                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                    <NavDropdown title="Kerem's Resume" id="basic-nav-dropdown">
                                        
                                        <NavDropdown.Item href= "https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:94567175-41a9-47cc-91d0-515280e59f9c">Kerem Karaman Resume</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://kkaraman.github.io/dailyPlanner/">Daily Planner</NavDropdown.Item>
                                        <NavDropdown.Item href="https://kkaraman.github.io/earnestNovas/">Vacation Destination</NavDropdown.Item>
                                        <NavDropdown.Item href="https://kkaraman.github.io/KKweatherDashboard/">Weather Dashboard</NavDropdown.Item>
                                        <NavDropdown.Item href="https://kkaraman.github.io/pwdGenerator/">Password Generator</NavDropdown.Item>
                                        <NavDropdown.Item href="https://kkeatdaburger.herokuapp.com/">Eat Da Burger</NavDropdown.Item>
                                        <NavDropdown.Item href="https://kkreactprofile.herokuapp.com/">My React Profile</NavDropdown.Item>
                                        
                                        
                                    </NavDropdown>
                                    </Nav>
                                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            {/* <Switch>
                                <Route exact path="/" component= { MainPage }>
                                    <MainPage />
                                </Route>
                                <Route path="/users" component = { UsersPage}>
                                    <UsersPage />
                                </Route>
                                <Route path="/user/:name" component ={ UserInfo }>
                                    <UserInfo />
                                </Route>
                            </Switch> */}
                        {/* </Router> */}
                    </Col>
                </Row>
            </Container>
        )  
    }
}

export default BootstrapNavbar;