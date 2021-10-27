import { Navbar, Container } from "react-bootstrap";

import { RiTeamFill } from "react-icons/ri";

const TeamOverlay = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <RiTeamFill />
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TeamOverlay;
