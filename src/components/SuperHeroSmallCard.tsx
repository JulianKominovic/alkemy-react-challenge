import { Col, Row, Badge, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDelete, MdInfo } from "react-icons/md";
import { useHeroesList } from "../hooks/useHeroesList";
interface CardProps {
  name?: string;
  alignment?: string;
  imageUrl?: string;
  variant: "empty" | "hero";
  id: number;
}

const SuperHeroSmallCard = ({
  name = "",
  alignment = "",
  imageUrl = "",
  variant,
  id,
}: CardProps): JSX.Element => {
  const { removeHeroById } = useHeroesList();
  return (
    <>
      {variant === "empty" ? (
        <Col>
          <Link
            to="/search"
            style={{
              textDecoration: "none",
            }}
            className="text-secondary"
          >
            <Card
              className="border border-2 rounded-3 h-100"
              style={{
                cursor: "pointer",
                minWidth: "120px",
              }}
            >
              <Card.Img
                style={{ height: "200px", objectFit: "cover", opacity: 0.1 }}
                variant="top"
                src="https://static.wixstatic.com/media/56086a_53b3a2b310894b929f88e63cb06c5106~mv2.png/v1/fill/w_240,h_240,al_c,q_85,usm_0.66_1.00_0.01/free-png-plus-sign-plus-icon-512.webp"
                alt={"empty"}
              />
              <Card.Body
                className="text-center d-flex flex-column justify-content-between"
                style={{
                  height: "110px",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              >
                <Card.Title className="overflow-hidden">Add hero</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ) : (
        <Col
          style={{
            minWidth: "180px",
            position: "relative",
          }}
        >
          <Card
            className="border border-2 rounded-3 h-100"
            bg={alignment !== "good" ? "dark" : "light"}
            text={alignment !== "good" ? "light" : "dark"}
            border={alignment !== "good" ? "danger" : "primary"}
          >
            <Card.Img
              style={{ height: "200px", objectFit: "cover" }}
              variant="top"
              src={imageUrl}
              alt={name + " image"}
            />
            <Card.Body
              className="d-flex flex-column justify-content-between"
              style={{
                height: "180px",
                objectFit: "cover",
                objectPosition: "top",
              }}
            >
              <Card.Title
                className="overflow-hidden"
                style={{
                  height: "60px",
                }}
              >
                {name}
              </Card.Title>

              <Badge bg={alignment !== "good" ? "danger" : "primary"}>
                {alignment.toUpperCase()}
              </Badge>

              <Row className="mt-2">
                <Col>
                  <Link to={`/details/${id}`}>
                    <Button variant="outline-info" className="w-100">
                      <MdInfo style={{ fontSize: "20px" }} />
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <Button
                    variant="outline-danger"
                    className="w-100"
                    onClick={() => {
                      removeHeroById(id);
                    }}
                  >
                    <MdDelete style={{ fontSize: "20px" }} />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      )}
    </>
  );
};

export default SuperHeroSmallCard;
