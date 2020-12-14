import React from 'react'
// import {
//     BrowserRouter as Router,
//     } from "react-router-dom";
  import { Navbar,Nav,NavDropdown, Container, Row, Col} from 'react-bootstrap'


class BootstrapNavbar extends React.Component{

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        {/* <Router> */}
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Kerem Karaman</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home Page</Nav.Link>
                                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                                    {/* <Nav.Link href="/404">Portfolio</Nav.Link> */}
                                    <NavDropdown title="Project portfolio" id="basic-nav-dropdown">
                                        
                                        <NavDropdown.Item href="../images/keremKaraman_workResume.pdf">Kerem Karaman Resume</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="https://github.com/KKaraman/KKemployeeTracker">My Employee Tracker Project</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        
                                        
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