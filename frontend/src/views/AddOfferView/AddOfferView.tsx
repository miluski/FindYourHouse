import { ChooseOfferTypeView } from "./ChooseOfferTypeView";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/HeaderView";
import { Container, Form } from "react-bootstrap";
import ChooseApartmentType from "./ChooseApartmentType";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ChooseRoomQuantity } from "./ChooseRoomsQuantity";
import { AddPicturesView } from "./AddPicturesView";


export const AddOfferView = () => {
  const [actualSiteNumber, setActualSiteNumber] = useState(1);

  const AddOfferActionButton = () => {
    return (
      <div className="addOfferActionButton">
        <Button variant="warning" onClick={() => setActualSiteNumber(2)}>
          Przejdź dalej
        </Button>{" "}
      </div>
    );
  };

  return (
    <Container>
      {actualSiteNumber === 1 ? (
        <Container fluid>
          <HeaderView />
          <Container className="d-flex align-items-center flex-column">
            <text className="fw-bold fs-6">Wybierz typ oferty </text>
            <ChooseOfferTypeView />
            <text className="fw-bold fs-6">Wybierz rodzaj nieruchomości</text>
            <ChooseApartmentType />
            <AddOfferActionButton />
          </Container>
          <FooterView />
        </Container>
      ) : (
        actualSiteNumber === 2 && (
          <Container fluid >
            <HeaderView/>
            <Container fluid className="d-flex align-items-center fs-5 flex-column mt-6 mb-1">
            <text>
              Wprowadź tytuł ogłoszenia
            </text>
            </Container> 
            <Container fluid className="w-25 mb-5 mt-3">
            <Form.Control
              type="text"
              placeholder="np Super mieszkanie "
              aria-label="np "
            />
            </Container>
            <Container fluid className="d-flex align-items-center fs-5 flex-column mb-3">
            <text className="fs-5 " > Informacje techniczne </text>
            </Container >
            <Container className="align-items-center justify-content-between d-flex">
            <text > Wprowadź cenę w zł * </text>
            <text aria-required> wprowadź czynsz w zł</text>
            <text aria-required> wprowadź kaucję</text>

            </Container>
            <Container className="justify-content-between d-flex">
            <Form.Control type="number" className="w-25 mb-5 mt-2'"/>
            <Form.Control type="number" className="w-25 mb-5 mt-2'"/>
            <Form.Control type="number" className="w-25 mb-5 mt-2'"/>
            </Container>
            <Container fluid className="d-inline-flex justify-content-between"> 
            <text aria-required> wprowadź powierzchnię w m2</text>
            <text> wybierz ilość pokoi</text>
            </Container>
            <Container fluid className="d-inline-flex justify-content-between">
            <Form.Control type="number" className="w-25 mb-5 mt-2'"/>
            <ChooseRoomQuantity/>
            </Container>
            <Container fluid className="d-flex align-items-center fs-5 flex-column mb-3">
            <text className="fs-5 " > Zdjęcia </text>
            </Container>
           <AddPicturesView/>
            <Container fluid className="d-flex align-items-center fs-5 flex-column mb-3">
            <text className="fs-5 " > Lokalizacja </text>
            </Container >
            <Container className="align-items-center justify-content-between d-flex">
            <text aria-required> wprowadź miasto</text>
            <text aria-required> wprowadź ulicę</text>
            <text > Wprowadź numer domu/mieszkania </text>
            </Container>
            <Container className="justify-content-between d-flex mb-2 ">
            <Form.Control type="text" className="w-25 mt-2'"/>
            <Form.Control type="text" className="w-25  mt-2'"/>
            <Form.Control type="number" className="w-25  mt-2'"/>
            </Container>
            <Container fluid className="align-items-center d-flex flex-column">
            <AddOfferActionButton />
            </Container>
            <FooterView />
          </Container>
        )
      )}
    </Container>
  );
};
