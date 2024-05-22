import { Col, Container, Row } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";
import { SeparateLine } from "./SeparateLine";
import "./Index.css";

export const AddPicturesView = () => {
  const addPictureView: string[] = [];
  const handleClick = (value: string) => {
    console.log(`Clicked on ${value}`);
  };

  const cameraArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center fs-5 flex-row mb-3 "
      >
        <text className="fs-5 "> Zdjęcia </text>
      </Container>
      <SeparateLine />
      <Container>
        <Row>
          {addPictureView.map((value: string, index: number) => (
            <Col className="border border-black shadow-md m-4 p-4 " key={index}>
              {value}
            </Col>
          ))}
        </Row>
        <Row className="d-flex justify-content-between cursor-pointer  ">
          {cameraArray.map((cameraIndex: number) => (
            <Col className="mb-3 mt-3 border border-black d-flex justify-content-center align-items-between button m-2 "
              key={cameraIndex}
            >
              <Camera size={32} onClick={() => handleClick(cameraIndex)}></Camera>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
