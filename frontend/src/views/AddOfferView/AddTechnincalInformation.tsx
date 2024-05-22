import { Container, Form } from "react-bootstrap";
import { ChooseRoomQuantity } from "./ChooseRoomsQuantity";
import { SeparateLine } from "./SeparateLine";

export const AddTechnicalInformatin = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center fs-5 flex-column mb-3"
      >
        <text className="fs-5 "> Informacje techniczne </text>
      </Container>
      <SeparateLine />
      <Container className="align-items-center justify-content-center d-flex  ">
        <Container className="d-flex flex-column align-items-center">
          <text> Wprowadź cenę w zł * </text>
          <Form.Control type="number" className="w-26 mb-5 mt-2" />
        </Container>
        <Container className="d-flex flex-column align-items-center">
          <text aria-required> wprowadź czynsz w zł</text>
          <Form.Control type="number" className="w-26 mb-5 mt-2 " />
        </Container>
        <Container className="d-flex flex-column align-items-center">
          <text aria-required> wprowadź kaucję</text>
          <Form.Control type="number" className="w-26 mb-5 mt-2 " />
        </Container>
      </Container>
      <Container
        fluid
        className="align-items-start justify-content-center d-flex "
      >
        <Container fluid className=" flex-column align-items-start">
          <text aria-required> wprowadź powierzchnię w m2</text>
          <Form.Control type="number" className="w-25 mb-5 mt-2'" />
        </Container>

        <Container className=" flex-column align-items-center w-25">
          <text> wybierz ilość pokoi</text>
          <ChooseRoomQuantity />
        </Container>
        </Container>
      
    </>
  );
};
