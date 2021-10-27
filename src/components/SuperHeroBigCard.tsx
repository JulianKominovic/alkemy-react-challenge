import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
  Col,
} from "react-bootstrap";

import { FaBookOpen } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { useState } from "react";
import HomeStats from "./HomeStats";
import getBestStatOfHero from "../utils/getBestStatOfHero";
import { useHistory } from "react-router";
import AddOrRemoveButton from "./AddOrRemoveButton";
const SuperHeroBigCard = (hero: any) => {
  const history = useHistory();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <Card
      style={{
        minWidth: "16rem",
        width: "18rem",
        position: "relative",
      }}
      className={`m-2 border-1 rounded ${
        hero.biography.alignment !== "good"
          ? "text-light bg-dark border border-danger"
          : "border border-primary"
      }`}
    >
      <Card.Img
        variant="top"
        src={hero.image.url}
        className=""
        style={{
          height: "380px",
        }}
        height="380px"
      />
      <Card.Body>
        <Card.Title>{hero.name}</Card.Title>
        <Card.Text className="mb-1">{hero.biography["full-name"]}</Card.Text>
        <Badge bg={hero.biography.alignment !== "good" ? "danger" : "primary"}>
          {hero.biography.alignment.toUpperCase()}
        </Badge>
      </Card.Body>
      <ListGroup className={`list-group-flush`}>
        <ListGroupItem
          className={
            hero.biography.alignment !== "good" ? "text-light bg-dark" : ""
          }
        >
          <FaBookOpen></FaBookOpen>
          <span className="mx-2">{hero.biography.publisher}</span>
        </ListGroupItem>
        <ListGroupItem
          className={
            hero.biography.alignment !== "good" ? "text-light bg-dark" : ""
          }
        >
          <ImPower></ImPower>
          <span className="mx-2">{getBestStatOfHero(hero)}</span>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Col className="mb-2">
          <AddOrRemoveButton hero={hero}></AddOrRemoveButton>
        </Col>
        <Col>
          {showDetails && (
            <Card
              className="px-2 py-4"
              style={{
                width: "18rem",
                height: "101%",
                minWidth: "16rem",
                position: "absolute",
                left: "-1px",
                top: "-1px",
              }}
            >
              <Card.Title className="text-dark text-center">Stats</Card.Title>
              <Card.Body className="bg-opacity-50 bg-body">
                <ListGroup variant="flush">
                  {Object.entries(hero.powerstats).map((stat: any) => (
                    <HomeStats
                      key={hero.name + stat[0]}
                      heroesList={[hero]}
                      stat={{
                        property: stat[0],
                        value: stat[1],
                      }}
                    />
                  ))}

                  <Button
                    className="my-4"
                    variant="outline-primary"
                    onClick={() => {
                      history.replace(`/details/${hero.id}`);
                    }}
                  >
                    More...
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowDetails((prev) => !prev);
                    }}
                  >
                    Close
                  </Button>
                </ListGroup>
              </Card.Body>
            </Card>
          )}
          <Button
            variant="outline-primary"
            onClick={() => {
              setShowDetails((prev) => !prev);
            }}
          >
            Details
          </Button>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default SuperHeroBigCard;
