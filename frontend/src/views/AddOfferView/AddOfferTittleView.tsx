import { Container, Form } from "react-bootstrap";
import { SeparateLine } from "./SeparateLine";

export const AddOfferTittleView = () => {
  return (
    <Container fluid>
      <SeparateLine />
      <Container
        fluid
        className="d-flex align-items-center fs-5 flex-column mt-6 mb-1"
      >
        <text>Wprowadź tytuł ogłoszenia</text>
      </Container>
      <Container fluid className="w-25 mb-5 mt-3">
        <Form.Control
          type="text"
          placeholder="np Super mieszkanie "
          aria-label="np "
        />
      </Container>
    </Container>
  );
};
