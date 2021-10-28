import { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Alert,
  ListGroup,
  Badge,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import AddOrRemoveButton from "../components/AddOrRemoveButton";
import AuthRouteComponent from "../components/AuthRouteComponent";
import CustomNavbar from "../components/CustomNavbar";
import HeroFeatureList from "../components/HeroFeatureList";
import HomeStats from "../components/HomeStats";
import { getHeroDetails } from "../services/apiCalls";

const Details = (): JSX.Element => {
  const params: any = useParams();
  const [hero, setHero] = useState<any>({});
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    setStatus("loading");
    getHeroDetails(parseInt(params.id))
      .then((res: any) => {
        if (res.data.response === "success") {
          setHero(res.data);
          setStatus("ok");
        } else {
          setStatus(res.data.error);
        }
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <AuthRouteComponent>
      <CustomNavbar></CustomNavbar>

      <Container
        className="px-4 pb-5 align-items-center"
        style={{ maxWidth: "1024px" }}
      >
        {status === "ok" ? (
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="my-4">
                <Card.Img
                  src={hero.image.url}
                  alt={`${hero.name} image`}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>{hero.name}</Card.Title>
                  <Card.Subtitle>{hero.biography["full-name"]}</Card.Subtitle>
                  <ListGroup variant="flush">
                    <HeroFeatureList {...hero.appearance} />
                  </ListGroup>
                  <AddOrRemoveButton hero={hero}></AddOrRemoveButton>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Row style={{ placeContent: "center" }}>
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Body>
                    <Card.Title>Work</Card.Title>
                    <ListGroup variant="flush">
                      <HeroFeatureList {...hero.work} />
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Row>
              <Row style={{ placeContent: "center" }}>
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Body>
                    <Card.Title>Powerstats</Card.Title>
                    <ListGroup variant="flush">
                      {Object.entries(hero.powerstats).map((stat: any) => (
                        <HomeStats
                          key={stat[0]}
                          stat={{
                            property: stat[0],
                            value: stat[1],
                          }}
                          heroesList={[hero]}
                        />
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Row>
            </Col>
            <Col>
              <Row>
                <Card style={{ width: "18rem" }} className="my-4">
                  <Card.Body>
                    <Card.Title>Biography</Card.Title>

                    <ListGroup variant="flush">
                      <HeroFeatureList {...hero.biography} />
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Row>
              <Row>
                <Badge
                  style={{ width: "18rem" }}
                  className="py-3"
                  bg={
                    hero.biography.alignment !== "good" ? "danger" : "primary"
                  }
                >
                  {hero.biography.alignment.toUpperCase()}
                </Badge>
              </Row>
            </Col>
          </Row>
        ) : status === "loading" ? (
          <Row className="my-5 justify-content-center">
            <Spinner
              className="m-5 p-5"
              style={{ textAlign: "center" }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Row>
        ) : (
          <Alert className="my-5" variant="danger">
            {status}
          </Alert>
        )}
      </Container>
    </AuthRouteComponent>
  );
};

export default Details;
