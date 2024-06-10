import { useNavigate } from "react-router-dom";
import AccordionNavButton from "../../CustomButtons/AccodrionNavButton/AccordionNavButton.tsx";

export default function PopularEstateAgenciesList() {
  const navigate = useNavigate();

  return (
    <div className={"d-flex flex-column"}>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Warszawa
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Wrocław
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Kraków
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Poznań
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Gdańsk
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Łódź
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Gdynia
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 "}
        onClick={() => navigate("#")}
      >
        Katowice
      </AccordionNavButton>
    </div>
  );
}
