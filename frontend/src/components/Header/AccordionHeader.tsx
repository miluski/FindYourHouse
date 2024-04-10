import AccordionButton from "react-bootstrap/AccordionButton";

function AccordionHeader({
  buttonText,
  className = "",
  classNameIcon = "",
}: {
  buttonText: string;
  className?: string;
  classNameIcon?: string;
}) {
  return (
    <h2 className="accordion-header">
      <AccordionButton
        className={`shadow-none text-black px-0 bg-white fw-normal ${className}`}
      >
        <i className={`${classNameIcon}`}></i> {buttonText}
      </AccordionButton>
    </h2>
  );
}

export default AccordionHeader;
