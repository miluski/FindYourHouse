import { ReactNode } from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionButton from "react-bootstrap/AccordionButton";

interface AccordionNavProps {
  title: string;
  children: ReactNode;
  className?: string;
  border?: boolean;
  eventKey: string;
}

const AccordionNav: React.FC<AccordionNavProps> = ({
  title,
  children,
  className,
  border,
  eventKey,
}) => {
  return (
    <Accordion.Item
      className={`border-0 rounded-0 ${border ? "border-bottom" : ""}`}
      eventKey={eventKey}
    >
      <h2 className="accordion-header">
        <AccordionButton
          className={` shadow-none text-black px-0 bg-white fw-normal ${className} `}
        >
          {title}
        </AccordionButton>
      </h2>
      <Accordion.Body className={`p-0 border-top`}>{children}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionNav;
