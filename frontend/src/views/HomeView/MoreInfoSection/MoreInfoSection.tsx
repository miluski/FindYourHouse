import Container from "react-bootstrap/Container";
import LinkButton from "../../../components/CustomButtons/LinkButton/LinkButton.tsx";
import "./MoreInfoSection.css";
import AccordionSeeMore from "../../../components/AccordionSeeMore/AccordionSeeMore.tsx";

export default function MoreInfoSection() {
  return (
    <div style={{ padding: "80px 0px" }} className={"fs-7"}>
      <Container
        fluid={"md"}
        className={
          "d-flex justify-content-between flex-column flex-md-row  flex-wrap row-gap-5 "
        }
      >
        <div className={"d-flex flex-column accordionMoreInfo"}>
          <div>
            <div className={"fw-bold mb-2"}>Popularne rynki nieruchomości</div>
            <LinkButton>Nieruchomości The Villages</LinkButton>
          </div>
          <AccordionSeeMore className={"mt-3"}>
            <LinkButton>Lorem Ipsum</LinkButton>
            <LinkButton>Lorem Ipsum</LinkButton>
            <LinkButton>Lorem Ipsum</LinkButton>
            <LinkButton>Lorem Ipsum</LinkButton>
          </AccordionSeeMore>
        </div>
        <div
          className={
            "d-flex flex-column accordionMoreInfo align-items-lg-center"
          }
        >
          <div>
            <div className={"fw-bold mb-2"}>Popularne nowe konstrukcje</div>
            <LinkButton>Nowe domy w Warszawie</LinkButton>
            <AccordionSeeMore className={"mt-3"}>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
            </AccordionSeeMore>
          </div>
        </div>
        <div
          className={
            "d-flex flex-column accordionMoreInfo align-items-lg-center"
          }
        >
          <div className={"h-100 d-flex flex-column"}>
            <div className={"fw-bold mb-2"}>Zasoby nieruchomości</div>
            <LinkButton>Targi mieszkalne</LinkButton>
            <AccordionSeeMore className={"mt-3"}>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
            </AccordionSeeMore>
          </div>
        </div>
        <div
          className={"d-flex flex-column accordionMoreInfo align-items-lg-end"}
        >
          <div>
            <div className={"fw-bold mb-2"}>Domy sprzedawane przez miasto</div>
            <LinkButton>Kieleckie domy na sprzedaż</LinkButton>
            <AccordionSeeMore className={"mt-3"}>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
              <LinkButton>Lorem Ipsum</LinkButton>
            </AccordionSeeMore>
          </div>
        </div>
      </Container>
    </div>
  );
}
