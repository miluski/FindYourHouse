import { ChooseOfferTypeView } from "./ChooseOfferTypeView";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/HeaderView";
import { Container } from "react-bootstrap";
import ChooseApartmentType from "./ChooseApartmentType";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { AddPicturesView } from "./AddPicturesView";
import { AddLocationView } from "./AddLocationView";
import { AddTechnicalInformatin } from "./AddTechnincalInformation";
import { AddOfferTittleView } from "./AddOfferTittleView";

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
          <FooterView/> 
        </Container>
      ) : (
        actualSiteNumber === 2 && (
          <Container fluid className="overflow-auto mb-5">
            <HeaderView />
            <Container className="overflow-auto mb-5">
              <AddOfferTittleView />
              <AddTechnicalInformatin />
              <AddPicturesView />
              <AddLocationView />
              <Container
                fluid
                className="align-items-center d-flex flex-column mb-5"
              >
                <AddOfferActionButton />
            </Container>
            </Container>
          <FooterView/> 
          </Container>
          
          

        )
      )}
       
      </Container>
      
     
  );
};