import { Container, Form } from "react-bootstrap";
import { SeparateLine } from "./SeparateLine";

export const AddLocationView = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center fs-5 flex-column mb-3"
      >
        <text className="fs-5 "> Lokalizacja </text>
      </Container>
      <SeparateLine/>
      <Container className="align-items-center justify-content-between d-flex">
        <text aria-required> wprowadź miasto</text>
        <text aria-required> wprowadź ulicę</text>
        <text> Wprowadź numer domu/mieszkania </text>
      </Container>
      <Container className="justify-content-between d-flex mb-2 ">
        <Form.Control type="text" className="w-25 mt-2'" />
        <Form.Control type="text" className="w-25  mt-2'" />
        <Form.Control type="number" className="w-25  mt-2'" />
      </Container>
    </>
  );
};
