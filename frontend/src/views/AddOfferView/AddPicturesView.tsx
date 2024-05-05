import { Col, Container, Row } from "react-bootstrap";
import { Camera } from "react-bootstrap-icons";

export const AddPicturesView = () => {
  const addPictureView: string[] = [];

  return (
    <Container>
    <Row>
        {addPictureView.map((value: string, index: number) => (
            <Col className="border border-black shadow-md m-4 p-4" key={index}>
                {value}
                {value === "Picture" && (
                    <Camera size={32} />
                )}
            </Col>
        ))}
    </Row>
      <Row className="d-flex justify-content-between">
        <Col xs={6} md={4}>
          <Camera size={32}/>
        </Col>
      </Row>
    </Container>
  );
};
