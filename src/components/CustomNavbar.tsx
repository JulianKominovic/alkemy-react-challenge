import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logOutLS } from "../services/localStorage";

const CustomNavbar = (): JSX.Element => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          Challenge Alkemy
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/search" className="nav-link">
              Choose a new hero
            </Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link
              href="https://github.com/JulianKominovic"
              rel="noopener norefferrer"
              target="_blank"
            >
              <FaGithub style={{ fontSize: "1.4rem" }} />
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.linkedin.com/in/jkominovic/"
              rel="noopener norefferrer"
              target="_blank"
            >
              <FaLinkedin style={{ fontSize: "1.4rem" }} />
            </Nav.Link>

            <Button
              onClick={() => {
                logOutLS();
              }}
              variant="outline-secondary"
              className="font-lg"
            >
              Log out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
