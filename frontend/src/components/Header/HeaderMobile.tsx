import Accordion from "react-bootstrap/Accordion";
import AccordionNav from "../AccordionNav/AccordionNav.tsx";
import PropertyTypeList from "./AccordionLists/PropertyTypeList.tsx";
import PopularCitiesList from "./AccordionLists/PopularCitiesList.tsx";
import InvestmentList from "./AccordionLists/InvestmentList.tsx";
import PopularEstateAgenciesList from "./AccordionLists/PopularEstateAgenciesList.tsx";
import Button from "react-bootstrap/Button";
import AccordionButton from "react-bootstrap/AccordionButton";
import { AccordionBody } from "react-bootstrap";
import HelpAndContactList from "./AccordionLists/HelpAndContactList.tsx";
import { useNavigate } from "react-router-dom";
import AccordionNavButton from "../CustomButtons/AccodrionNavButton/AccordionNavButton.tsx";
import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";

export default function ({ handleShowModal }: { handleShowModal: Function }) {
  const navigate = useNavigate();

  return (
    <>
      <Accordion>
        <AccordionNav eventKey={"0"} border title={"Kupuję"}>
          <Accordion>
            <AccordionNav
              eventKey={"0"}
              border
              className={"ps-3"}
              title={"Nieruchomości"}
            >
              <PropertyTypeList />
            </AccordionNav>
            <AccordionNav
              border
              eventKey={"1"}
              className={"ps-3"}
              title={"Popularne Lokalizacje"}
            >
              <PopularCitiesList />
            </AccordionNav>
            <AccordionNav
              border
              eventKey={"2"}
              className={"ps-3"}
              title={"Inwestycje"}
            >
              <InvestmentList />
            </AccordionNav>
            <AccordionNavButton
              onClick={() => navigate("#")}
              buttonClassName={"ps-3"}
            >
              Przewodnik Kupującego
            </AccordionNavButton>
          </Accordion>
        </AccordionNav>
        <AccordionNav eventKey={"1"} border title={"Wynajmuję"}>
          <Accordion>
            <AccordionNav
              eventKey={"0"}
              border
              className={"ps-3"}
              title={"Nieruchomości"}
            >
              <PropertyTypeList />
            </AccordionNav>
            <AccordionNav
              border
              eventKey={"1"}
              className={"ps-3"}
              title={"Popularne Lokalizacje"}
            >
              <PopularCitiesList />
            </AccordionNav>
            <AccordionNav
              border
              eventKey={"2"}
              className={"ps-3"}
              title={"Popularne Biura Nieruchomości"}
            >
              <PopularEstateAgenciesList />
            </AccordionNav>
            <AccordionNavButton
              onClick={() => navigate("#")}
              buttonClassName={"ms-3"}
            >
              Przewodnik Wynajmującego
            </AccordionNavButton>
          </Accordion>
        </AccordionNav>
        <AccordionNav eventKey={"2"} border title={"Sprzedaje"}>
          <Accordion>
            <AccordionNav
              eventKey={"0"}
              border
              className={"ps-3"}
              title={"Sprzedaż Nieruchomości"}
            >
              <AccordionNavButton
                onClick={() => navigate("#")}
                buttonClassName={"ps-3 border-bottom"}
                titleClassName={"ps-3"}
              >
                Przewodnik krok po kroku
              </AccordionNavButton>
              <AccordionNavButton
                onClick={() => navigate("#")}
                buttonClassName={"ps-3 border-bottom"}
                titleClassName={"ps-3"}
              >
                Sytuacja na rynku
              </AccordionNavButton>
              <AccordionNavButton
                onClick={() => navigate("#")}
                buttonClassName={"ps-3"}
                titleClassName={"ps-3"}
              >
                Zainspiruj się
              </AccordionNavButton>
            </AccordionNav>
            <AccordionNav
              border
              eventKey={"1"}
              className={"ps-3"}
              title={"Wycena Nieruchomości"}
            >
              <AccordionNavButton
                onClick={() => navigate("#")}
                buttonClassName={"ps-3 border-bottom"}
                titleClassName={"ps-3"}
              >
                Wyceń swoje mieszkanie
              </AccordionNavButton>
              <AccordionNavButton
                onClick={() => navigate("#")}
                buttonClassName={"ps-3 "}
                titleClassName={"ps-3"}
              >
                Ile warte jest Twoje mieszkanie
              </AccordionNavButton>
            </AccordionNav>
            <AccordionNavButton
              onClick={() => navigate("#")}
              buttonClassName={"ps-3 "}
            >
              Przewodnik sprzedawcy
            </AccordionNavButton>
          </Accordion>
        </AccordionNav>
      </Accordion>
      <AccordionNavButton
        onClick={() => {
          navigate("/calculator");
        }}
        buttonClassName={"border-bottom"}
      >
        Kredyty
      </AccordionNavButton>
      <AccordionNavButton
        onClick={handleShowModal("login")}
        buttonClassName={"border-bottom"}
      >
        <RoundedIcon icon={"bi-person-fill"} />
        Moje Konto
      </AccordionNavButton>
      <Accordion>
        <Accordion.Item className={"border-0 rounded-0"} eventKey={"0"}>
          <AccordionButton
            className={
              "px-0 border-0 shadow-none bg-white py-3 d-flex gap-3 align-items-center"
            }
          >
            <RoundedIcon icon={"bi-telephone-fill"} />
            Pomoc i Kontakt
          </AccordionButton>
          <AccordionBody className="border border-black rounded-3 ">
            <HelpAndContactList />
          </AccordionBody>
        </Accordion.Item>
      </Accordion>
      <Button
        variant="outline-dark"
        className="mt-3 align-self-center fw-bold px-3 py-2 w-100 border-2"
        onClick={() => navigate("/add-offer")}
      >
        Dodaj Ogłoszenie
      </Button>
    </>
  );
}
