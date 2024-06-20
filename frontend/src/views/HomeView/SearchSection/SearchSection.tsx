import Container from "react-bootstrap/Container";
import "./SearchSection.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchSection() {
  const navigate = useNavigate();
  const [propertyType, setPropertyType] = useState("Mieszkanie");
  const [offerType, setOfferType] = useState("Sprzedaż");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  const [fromArea, setFromArea] = useState(0);
  const [toArea, setToArea] = useState(0);
  return (
    <section>
      <Container
        fluid
        className="search-section-background d-flex flex-column justify-content-center"
      >
        <Container className="px-0 py-4 px-lg-3">
          <h1 className="d-none d-md-block text-white text-center fw-bolder">
            Adresujemy marzenia
            <span className="d-block mt-2 text-white text-center fw-normal fs-4">
              Znajdź swój, dach
            </span>
          </h1>
          <Container className="w-md-80 px-0">
            <span className="d-none d-lg-inline-block bg-white py-2 px-5 rounded-top-1">
              Szukaj
            </span>
            <Form className="container bg-white mb-md-5 p-3" action="">
              <Row className="m-0 row-gap-3 pb-lg-3">
                <Col xs={12} lg={10} className="container p-0 pe-lg-1">
                  <Row className="m-0">
                    <Col className="p-0 pe-1">
                      <Form.Select
                        className={
                          "rounded-0 shadow-none border border-dark-subtle"
                        }
                        aria-label="Wybierz typ nieruchomości"
                        name="Typ nieruchomosci"
                        onChange={(e) => {
                          setPropertyType(e.target.value);
                        }}
                      >
                        <option value="Mieszkanie">Mieszkanie</option>
                        <option value="Dom">Dom</option>
                        <option value="Garaż">Garaż</option>
                      </Form.Select>
                    </Col>
                    <Col className="p-0 ps-1">
                      <Form.Select
                        className="rounded-0 shadow-none border-dark-subtle"
                        aria-label="Default select example"
                        name="Typ oferty"
                        defaultValue="Sprzedaż"
                        onChange={(e) => {
                          setOfferType(e.target.value);
                        }}
                      >
                        <option value="Sprzedaż">Sprzedaż</option>
                        <option value="Wynajem">Wynajem</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12} lg={2} className="container p-0 ps-lg-1">
                  <Row className="m-0 row-gap-3">
                    <Col className="p-0 ps-lg-1">
                      <Button
                        variant="warning"
                        type="submit"
                        className="rounded-1 fw-bold w-100"
                        onClick={() => {
                          navigate(
                            `/flats?propertyType=${propertyType}&offerType=${offerType}&fromPrice=${fromPrice}&toPrice=${toPrice}&fromArea=${fromArea}&toArea=${toArea}&visibility=all`
                          );
                        }}
                      >
                        Wyszukaj
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="d-none d-lg-flex m-0 pt-3 border-top">
                <Col xs={6} className="px-0 pe-3 border-end">
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
                          onChange={(e) => {
                            setFromPrice(Number(e));
                          }}
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
                          onChange={(e) => {
                            setToPrice(Number(e));
                          }}
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
                          onChange={(e) => {
                            setFromArea(Number(e));
                          }}
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
                          onChange={(e) => {
                            setToArea(Number(e));
                          }}
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
