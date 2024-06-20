import { ChooseOfferTypeView } from "./ChooseOfferTypeView";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/Header";
import { Col, Container, Spinner } from "react-bootstrap";
import ChooseApartmentType from "./ChooseApartmentType";
import { useEffect, useState } from "react";
import { AddPicturesView } from "./AddPicturesView";
import { AddLocationView } from "./AddLocationView";
import { AddTechnicalInformation } from "./AddTechnicalInformation";
import { AddOfferTitleView } from "./AddOfferTittleView";
import { useDispatch, useSelector } from "react-redux";
import { OfferState } from "../../utils/types/State";
import AddDescriptionView from "./AddDescriptionView";
import { AddOfferActionButton } from "./AddOfferActionButton";
import {
  CHANGE_EXHIBITOR_EMAIL,
  CHANGE_EXHIBITOR_NAME,
  CHANGE_EXHIBITOR_SURNAME,
  CHANGE_EXHIBITOR_PHONE_NUMBER,
} from "../../utils/ActionTypes";

export const AddOfferView = () => {
  const dispatch = useDispatch();
  const { offerType, propertyType } = useSelector(
    (state: OfferState) => state.offerReducer as unknown as OfferState,
  );
  const finalPropertyType =
    propertyType === "Mieszkanie"
      ? "mieszkania"
      : propertyType === "Dom"
        ? "domu"
        : "garażu";
  const [actualSiteNumber, setActualSiteNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    dispatch({
      type: CHANGE_EXHIBITOR_EMAIL,
      newExhibitorEmail: localStorage.getItem("email") ?? "",
    });
    dispatch({
      type: CHANGE_EXHIBITOR_NAME,
      newExhibitorName: localStorage.getItem("name") ?? "",
    });
    dispatch({
      type: CHANGE_EXHIBITOR_SURNAME,
      newExhibitorSurname: localStorage.getItem("surname") ?? "",
    });
    dispatch({
      type: CHANGE_EXHIBITOR_PHONE_NUMBER,
      newExhibitorPhoneNumber: localStorage.getItem("phoneNumber") ?? "",
    });
  }, []);
  return (
    <>
      <HeaderView />
      {actualSiteNumber === 1 ? (
        <Container fluid className="d-flex align-items-center flex-column">
          <text className="fw-bold fs-6">Wybierz typ oferty </text>
          <ChooseOfferTypeView />
          <text className="fw-bold fs-6">Wybierz rodzaj nieruchomości</text>
          <ChooseApartmentType />
          <AddOfferActionButton
            actualSiteNumber={actualSiteNumber}
            setActualSiteNumber={setActualSiteNumber}
            
          />
        </Container>
      ) : (
        actualSiteNumber === 2 && (
          <Container fluid className="overflow-auto mb-5 position-relative">
            {isLoading && (
              <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-light opacity-75">
                <Spinner animation="border" role="status" variant="primary" />
              </div>
            )}
            <Col
              fluid
              className="d-flex align-items-center flex-row justify-content-center"
            >
              <text className="fw-bold mx-1">Rodzaj operacji:</text>
              <text>
                {offerType} {finalPropertyType}
              </text>
            </Col>
            <AddOfferTitleView />
            <AddTechnicalInformation />
            <AddPicturesView />
            <AddLocationView />
            <AddDescriptionView />
            <Container
              fluid
              className="align-items-center d-flex flex-column mb-5"
            >
              <AddOfferActionButton setIsLoading={setIsLoading} />
            </Container>
          </Container>
        )
      )}
      {actualSiteNumber === 1 ? <FooterView fixedBottom /> : <FooterView />}
    </>
  );
};
