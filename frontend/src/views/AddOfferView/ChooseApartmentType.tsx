import { Col, Row } from "react-bootstrap";
import {
  BuildingFill,
  HouseDoorFill,
} from "react-bootstrap-icons";
import { PiGarageBold } from "react-icons/pi";

const apartmentTypeTiles = ["Dom", "Mieszkanie", "Garaż"];

export default function ChooseApartmentType() {
  return (
    <Row className="d-flex justify-content-between">
      {apartmentTypeTiles.map((value: string, index: number) => (
        <Col className="border border-black shadow-md m-4 p-4" key={index}>
          {value}
          {value === "Dom" ? (
            <HouseDoorFill size={32} />
          ) : value === "Mieszkanie" ? (
            <BuildingFill size={32} />
          ) : value === "Garaż" ? (
            <PiGarageBold size={32} />
          ) : (
            <></>
          )}
        </Col>
      ))}
    </Row>
  );
}
