import React from "react";
import { Navbar, Container, Nav, FormControl } from "react-bootstrap";

const NavBar = ({ handleSearch }) => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container fluid className="container">
                <Navbar.Brand href="#">Home Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="https://github.com/quasar3c273">
                            My GitHub
                        </Nav.Link>
                    </Nav>
                    <FormControl
                        style={{ maxWidth: "700px" }}
                        onChange={handleSearch}
                        id="search-user"
                        type="search"
                        placeholder="Введите имя пользователя"
                        className="me-2"
                        aria-label="Search"
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
