import { useState, useEffect } from "react";
import { Container, Col, Row, Spinner, Alert } from "react-bootstrap";
import { useParams } from "react-router";
import AuthRouteComponent from "../components/AuthRouteComponent";
import CustomNavbar from "../components/CustomNavbar";
import SearchForm from "../components/SearchForm";
import SuperHeroBigCard from "../components/SuperHeroBigCard";
import { SearchingSchema } from "../schemas/YupSchemas";
import { searchHero } from "../services/apiCalls";

const Search = () => {
  const params: any = useParams();
  const [heroes, setHeroes] = useState([]);
  const [searchDone, setSearchDone] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchingResult, setSearchingResult] = useState<string>("");

  useEffect(() => {
    if (params.name !== undefined) {
      SearchingSchema.validate({ search: params.name })
        .then((res) => search())
        .catch((err) => setSearchingResult(err.errors[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  function search() {
    setIsSearching(true);
    setSearchDone(false);
    setSearchingResult("");
    searchHero(params["name"])
      .then((res: any) => {
        setHeroes(res.data.results);
        setSearchDone(true);
        setIsSearching(false);

        res.data.results === undefined
          ? setSearchingResult("An error has ocurred. Try again.")
          : setSearchingResult("ok");
      })
      .catch((err) => setSearchingResult("error:" + err));
  }

  return (
    <AuthRouteComponent>
      <CustomNavbar />
      <SearchForm
        searchingParam={params}
        setSearchDone={setSearchDone}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setSearchingResult={setSearchingResult}
      />
      <Container className="pb-5 pt-2" style={{ maxWidth: "1024px" }}>
        <Row>
          <>
            {searchDone &&
              searchingResult === "ok" &&
              heroes.map((hero, i) => (
                <Col className="d-flex justify-content-center" key={i}>
                  <SuperHeroBigCard {...hero} />
                </Col>
              ))}
            {isSearching && (
              <Col className="text-center my-5">
                <Spinner animation="grow" />
              </Col>
            )}
            {searchingResult !== "ok" && searchingResult.length !== 0 && (
              <Alert variant="danger">{searchingResult}</Alert>
            )}
          </>
        </Row>
      </Container>
    </AuthRouteComponent>
  );
};

export default Search;
