import { useNavigate } from "react-router-dom";
import AccordionNavButton from "../../CustomButtons/AccodrionNavButton/AccordionNavButton.tsx";

export default function PropertyTypeList() {
  const navigate = useNavigate();

  return (
    <div className={"d-flex flex-column"}>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Mieszkania
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Kawalerki
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Domy
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Działki
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Lokale użytkowe
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Biura
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 border-bottom"}
        onClick={() => navigate("#")}
      >
        Hale i magazyny
      </AccordionNavButton>
      <AccordionNavButton
        titleClassName={"ps-3"}
        buttonClassName={"ps-3 "}
        onClick={() => navigate("#")}
      >
        Garaże
      </AccordionNavButton>
    </div>
  );
}
