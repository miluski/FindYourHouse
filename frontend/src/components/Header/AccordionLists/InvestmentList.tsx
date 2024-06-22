import { useNavigate } from "react-router-dom";
import AccordionNavButton from "../../CustomButtons/AccodrionNavButton/AccordionNavButton.tsx";

export default function InvestmentList() {
  const navigate = useNavigate();

  return (
    <div className={"d-flex flex-column"}>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Nowe mieszkania
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Nowe domy
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 "}
        onClick={() => navigate("#")}
      >
        Nowe lokale użytkowe
      </AccordionNavButton>
    </div>
  );
}
