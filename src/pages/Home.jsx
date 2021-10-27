import { Container, Row, Card, ListGroup } from "react-bootstrap";
import AuthRouteComponent from "../components/AuthRouteComponent";
import CustomNavbar from "../components/CustomNavbar";
import HomeStats from "../components/HomeStats";
import SuperHeroSmallCard from "../components/SuperHeroSmallCard";
import { useHeroesList } from "../hooks/useHeroesList";
import useTeamStats from "../hooks/useTeamStats";

const HEROES_SLOTS = [0, 1, 2, 3, 4, 5];

const Home = () => {
  const { heroesList } = useHeroesList();
  const { recalculateStats, recalculateAvgWeight, recalculateAvgHeight } =
    useTeamStats();

  return (
    <AuthRouteComponent>
      <CustomNavbar></CustomNavbar>

      <Container fluid>
        <Row>
          <h1 className="text-center my-5">Superheroes challenge - Alkemy</h1>
        </Row>
        <Row className="gap-2 p-4">
          <Card className="container-fluid">
            <Row>
              <Card.Header as="h2">Your team</Card.Header>
            </Row>
            <Row className="py-4 gap-2">
              {heroesList &&
                HEROES_SLOTS.map((indexHero, i) =>
                  heroesList[indexHero] === undefined ? (
                    <SuperHeroSmallCard key={i} variant="empty" />
                  ) : (
                    <SuperHeroSmallCard
                      key={heroesList[indexHero].name}
                      id={heroesList[indexHero].id}
                      alignment={heroesList[indexHero].biography.alignment}
                      name={heroesList[indexHero].name}
                      imageUrl={heroesList[indexHero].image.url}
                      variant="hero"
                    />
                  )
                )}
            </Row>
          </Card>
        </Row>
        <Row>
          <Container className="p-4">
            <Card>
              <Card.Header as="h3">Team stats</Card.Header>
              <Card.Title className="p-4">
                An average estimation between all your team's members
              </Card.Title>
              <ListGroup as="li" variant="flush">
                <ListGroup.Item className="px-4">
                  {`Average weight: ${
                    Math.round(recalculateAvgWeight()) || "0"
                  } kg.`}
                </ListGroup.Item>
                <ListGroup.Item className="px-4">
                  {`Average height: ${
                    Math.round(recalculateAvgHeight()) || "0"
                  } cm.`}
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <ListGroup variant="flush" as="li">
                  {recalculateStats().map((stat) => (
                    <HomeStats
                      key={stat.property}
                      stat={stat}
                      heroesList={heroesList}
                    />
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Container>
        </Row>
      </Container>
    </AuthRouteComponent>
  );
};

export default Home;
