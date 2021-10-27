import { Formik } from "formik";
import {
  Button,
  Container,
  Form,
  Row,
  Alert,
  Card,
  Spinner,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { SearchingSchema } from "../schemas/YupSchemas";

const SearchForm = ({
  setSearchDone,
  setIsSearching,
  isSearching,
  setSearchingResult,
  searchingParam,
}: any): JSX.Element => {
  const history = useHistory();
  return (
    <Container className="my-2">
      <Card className="p-4 my-4 mx-auto" style={{ maxWidth: "768px" }}>
        <Formik
          initialValues={{ search: searchingParam.name || "" }}
          onSubmit={(values) => {
            setIsSearching(true);
            setSearchDone(false);
            setSearchingResult("");
            history.replace(`/search/${values.search}`);
          }}
          validationSchema={SearchingSchema}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Row className="align-items-end justify-content-between">
                <Form.Label>Search a new hero</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Type some name..."
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.search}
                  name="search"
                ></Form.Control>

                <Button variant="primary" className="my-4" type="submit">
                  <>
                    {isSearching ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Loading...</span>
                      </>
                    ) : (
                      "Search"
                    )}
                  </>
                </Button>
                {props.errors.search && (
                  <Alert variant="danger" className="m-0 py-2">
                    {props.errors.search}
                  </Alert>
                )}
              </Row>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default SearchForm;
