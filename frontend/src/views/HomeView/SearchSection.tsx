import Container from "react-bootstrap/Container";
import "./styles/SearchSection.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchSection() {
  return (
    <section>
      <Container fluid className={"search-section-background py-lg-5"}>
        <Container className={"px-0 py-4 px-lg-3 py-lg-5"}>
          <h1
            className={
              "d-none d-md-block text-white text-center my-5 fw-bolder"
            }
          >
            Adresujemy marzenia
            <span
              className={"d-block mt-2 text-white text-center fw-normal fs-4"}
            >
              Znajdź swój, dach
            </span>
          </h1>
          <Container className={"w-md-80 px-0"}>
            <span className="d-none d-lg-inline-block bg-white py-2 px-5 rounded-top-1">
              Szukaj
            </span>
            <Form className="container bg-white mb-md-5 p-3" action="">
              <Row className="m-0 row-gap-3 pb-lg-3">
                <Col xs={12} lg={4} className="container p-0 pe-lg-1">
                  <Row className="m-0">
                    <Col xs={6} className="p-0 pe-1">
                      <Form.Select
                        className={
                          "rounded-0 shadow-none border border-dark-subtle"
                        }
                        aria-label="Wybierz typ nieruchomości"
                        name="Typ nieruchomosci"
                      >
                        <option value="Kawalerki">Kawalerki</option>
                        <option value="Domy">Domy</option>
                        <option value="Pokoje">Pokoje</option>
                        <option value="Działki">Działki</option>
                        <option value="Lokale użytkowe">Lokale użytkowe</option>
                        <option value="Hale i magazyny">Hale i magazyny</option>
                        <option value="Garaże">Garaże</option>
                      </Form.Select>
                    </Col>
                    <div className="p-0 col-6 ps-1">
                      <Form.Select
                        className="rounded-0 shadow-none border-dark-subtle"
                        aria-label="Default select example"
                        name="Typ oferty"
                      >
                        <option value="Na sprzedaż" selected>
                          Na sprzedaż
                        </option>
                        <option value="Na wynajem">Na wynajem</option>
                      </Form.Select>
                    </div>
                  </Row>
                </Col>
                <Col xs={12} lg={8} className="container p-0 ps-lg-1">
                  <Row className="m-0 row-gap-3">
                    <Col xs={8} lg={5} className="p-0">
                      <Form.Select
                        className=" rounded-0 border-end-0 shadow-none border-dark-subtle"
                        aria-label="Popularne lokalizacje"
                      >
                        <option value="1">Wybierz Lokalizację</option>
                        <option value="2">Warszawa</option>
                        <option value="3">Gdańsk</option>
                        <option value="3">Poznań</option>
                        <option value="3">Kielce</option>
                      </Form.Select>
                    </Col>
                    <Col xs={4} lg={3} className="p-0 pe-lg-2">
                      <Form.Select
                        className="rounded-0 shadow-none border-dark-subtle"
                        aria-label="Obszar"
                      >
                        <option value="1" selected>
                          0 km
                        </option>
                        <option value="2">5 km</option>
                        <option value="2">10 km</option>
                        <option value="2">15 km</option>
                        <option value="2">25 km</option>
                        <option value="2">50 km</option>
                        <option value="2">75 km</option>
                      </Form.Select>
                    </Col>
                    <Col xs={12} lg={4} className="p-0 ps-lg-1">
                      <Button
                        variant="primary"
                        type="submit"
                        className="rounded-1 fw-bold w-100"
                      >
                        Wyszukaj
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="d-none d-lg-flex m-0 pt-3 border-top">
                <Col xs={6} className=" px-0 pe-3 border-end">
                  <Row className="m-0 position-relative">
                    <Col xs={6} className=" px-0 pe-2 z-1">
                      <div className="d-flex align-items-center border form-control rounded-0 border-dark-subtle">
                        <input
                          id="priceFrom"
                          className="form-control rounded-0 shadow-none border-0 p-0 no-spin-button"
                          placeholder="Cena od"
                          type="number"
                          inputMode="decimal"
                          autoComplete="off"
                        />
                        <label htmlFor="priceFrom">zł</label>
                      </div>
                    </Col>
                    <div className="px-0 d-flex align-self-center justify-content-center position-absolute">
                      <div>-</div>
                    </div>
                    <Col xs={6} className=" px-0 ps-2 z-1">
                      <div className="d-flex align-items-center border form-control rounded-0 border-dark-subtle">
                        <input
                          id="priceTo"
                          className="form-control rounded-0 shadow-none border-0 p-0 no-spin-button"
                          placeholder="Cena do"
                          type="number"
                          inputMode="decimal"
                          autoComplete="off"
                        />
                        <label htmlFor="priceTo">zł</label>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs={6} className=" px-0 ps-3">
                  <Row className="m-0 position-relative">
                    <Col xs={6} className="col-6 px-0 pe-2 z-1">
                      <div className="d-flex align-items-center border form-control rounded-0 border-dark-subtle">
                        <input
                          id="surfaceFrom"
                          className="form-control rounded-0 shadow-none border-0 p-0 no-spin-button"
                          placeholder="Powierzchnia od"
                          type="number"
                          inputMode="decimal"
                          autoComplete="off"
                        />
                        <label htmlFor="surfaceFrom">m²</label>
                      </div>
                    </Col>
                    <div className="px-0 d-flex align-self-center justify-content-center position-absolute">
                      <div>-</div>
                    </div>
                    <Col xs={6} className=" px-0 ps-2 z-1">
                      <div className="d-flex align-items-center border form-control rounded-0 border-dark-subtle">
                        <input
                          id="surfaceTo"
                          className="form-control rounded-0 shadow-none border-0 p-0 no-spin-button"
                          placeholder="Powierzchnia do"
                          type="number"
                          inputMode="decimal"
                          autoComplete="off"
                        />
                        <label htmlFor="surfaceTo">m²</label>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
      </Container>
    </section>
  );
}

export default SearchSection;
