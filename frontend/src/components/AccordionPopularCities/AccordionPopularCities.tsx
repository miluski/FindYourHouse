import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "../AccordionHeader/AccordionHeader.tsx";
import ListGroup from "react-bootstrap/ListGroup";
import AccordionLink from "../AccordionLink/AccordionLink.tsx";

function AccordionPopularCities() {
  return (
    <Accordion.Item eventKey="1">
      <AccordionHeader
        buttonText={"Popularne lokalizacje"}
        className={"ps-3"}
      />
      <Accordion.Body className="border-top p-0">
        <ListGroup variant="flush">
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Warszawa"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Wrocław"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Kraków"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Poznań"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Gdańsk"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Łódź"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Gdynia"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Katowice"} linkURL={"#"} />
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AccordionPopularCities;
