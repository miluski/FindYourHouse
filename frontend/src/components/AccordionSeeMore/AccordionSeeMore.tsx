import Accordion from "react-bootstrap/Accordion";
import AccordionButton from "react-bootstrap/AccordionButton";
import { ReactNode, useState } from "react";
import "./AccordionSeeMore.css";

export default function AccordionSeeMore({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [seeMore, setSeeMore] = useState(true);

  return (
    <Accordion>
      <Accordion.Item eventKey="0" className={"border-0"}>
        <Accordion.Body className={"px-0 d-flex gap-3 flex-column pb-0"}>
          {children}
        </Accordion.Body>
        <AccordionButton
          className={`p-0 fs-7 fw-semibold shadow-none bg-transparent text-decoration-underline text-black ${className}`}
          style={{ maxWidth: "fit-content" }}
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "Zobacz więcej" : "Zobacz mniej"}
        </AccordionButton>
      </Accordion.Item>
    </Accordion>
  );
}
