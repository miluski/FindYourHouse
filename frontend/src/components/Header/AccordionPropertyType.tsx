import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "./AccordionHeader.tsx";
import ListGroup from "react-bootstrap/ListGroup";
import AccordionLink from "./AccordionLink.tsx";

function AccordionPropertyType() {
  return (
    <Accordion.Item eventKey="0">
      <AccordionHeader buttonText={"Nieruchomości"} className={"ps-3"} />
      <Accordion.Body className="border-top p-0">
        <ListGroup variant="flush">
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Mieszkania"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Kawalerki"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Domy"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Działki"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Lokale użytkowe"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Biura"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Hale i magazyny"} linkURL={"#"} />
          </ListGroup.Item>
          <ListGroup.Item className="py-3">
            <AccordionLink linkText={"Garaże"} linkURL={"#"} />
          </ListGroup.Item>
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default AccordionPropertyType;
