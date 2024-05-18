import { Col, Container, Row } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";

export const AddPicturesView = () => {
  const addPictureView: string[] = [];

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center fs-5 flex-column mb-3"
      >
        <text className="fs-5 "> Zdjęcia </text>
      </Container>
      <Container>
        <Row>
          {addPictureView.map((value: string, index: number) => (
            <Col className="border border-black shadow-md m-4 p-4" key={index}>
              {value}
              {value === "Picture" && <Camera size={32} />}
            </Col>
          ))}
        </Row>
        <Row className="d-flex justify-content-between">
          <Col xs={6} md={4}>
            <Camera size={32} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
