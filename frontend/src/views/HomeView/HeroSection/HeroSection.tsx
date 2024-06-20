import "./HeroSection.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import NavButton from "../../../components/CustomButtons/NavButton/NavButton.tsx";
import SearchInput from "../../../components/SearchInput/SearchInput.tsx";

export default function HeroSection() {
  const [checkBoxValue, setCheckBoxValue] = useState("Sprzedaż");
  const [hoveredButton, setHoveredButton] = useState("");

  const handleMouseLeave = () => {
    setHoveredButton("");
  };

  const handleMouseEnter = (buttonName: string) => () => {
    setHoveredButton(buttonName);
  };

  const [showHeader, setShowHeader] = useState(false);

  const checkVisibility = () => {
    const element = document.getElementById("heroSearchInput");
    const rect = element!.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight,
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  };

  const handleScroll = () => {
    if (!checkVisibility()) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    const element = document.querySelector("#indexWrapper");

    element!.addEventListener("scroll", handleScroll);
    return () => {
      element!.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showHeader && (
        <header
          className={`position-sticky sticky-top  w-100 bg-white  fixedSearchInputContainerIn border-bottom border-dark border-opacity-25`}
        >
          <Container>
            <nav className="mb-2 d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center text-white fw-semibold">
              <NavButton
                onMouseEnter={handleMouseEnter("buyButton")}
                onMouseLeave={handleMouseLeave}
                currentPage={checkBoxValue === "Sprzedaż"}
                hovered={hoveredButton === "buyButton"}
                onClick={() => setCheckBoxValue("Sprzedaż")}
                borderWidth={"border-4"}
                fontSize={"fs-6"}
              >
                Kupuję
              </NavButton>
              <NavButton
                onMouseEnter={handleMouseEnter("rentButton")}
                onMouseLeave={handleMouseLeave}
                hovered={hoveredButton === "rentButton"}
                currentPage={checkBoxValue === "Wynajem"}
                onClick={() => setCheckBoxValue("Wynajem")}
                borderWidth={"border-4"}
                fontSize={"fs-6"}
              >
                Wynajmuję
              </NavButton>
              <NavButton
                onMouseEnter={handleMouseEnter("sellButton")}
                onMouseLeave={handleMouseLeave}
                hovered={hoveredButton === "sellButton"}
                currentPage={checkBoxValue === "sell"}
                onClick={() => setCheckBoxValue("sell")}
                borderWidth={"border-4"}
                fontSize={"fs-6"}
              >
                Sprzedaję
              </NavButton>
              <NavButton
                onMouseEnter={handleMouseEnter("justSoldButton")}
                onMouseLeave={handleMouseLeave}
                hovered={hoveredButton === "justSoldButton"}
                currentPage={checkBoxValue === "justSold"}
                onClick={() => setCheckBoxValue("justSold")}
                borderWidth={"d-none d-lg-block border-4"}
                fontSize={"fs-6"}
              >
                Właśnie sprzedane
              </NavButton>
            </nav>
            <nav className="py-2 mx-auto" style={{ maxWidth: "575px" }}>
              <form autoComplete="off">
                <SearchInput
                  offerType={checkBoxValue}
                  id={"stickySearchInput"}
                  outline
                />
              </form>
            </nav>
          </Container>
        </header>
      )}
      <section className="heroSection d-flex align-items-center justify-content-center ">
        <Container className={"mb-5"}>
          <h1 className="text-white text-center fw-bolder heroSection__title">
            Adresujemy marzenia
            <span className="d-block mt-3 text-white text-center fw-normal heroSection__subTitle">
              Znajdź swój dach
            </span>
          </h1>
          <nav className="mb-4 d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-center text-white fw-semibold">
            <NavButton
              borderColor={"border-white "}
              className={"text-white heroSection__navButton"}
              onMouseEnter={handleMouseEnter("buyButton")}
              onMouseLeave={handleMouseLeave}
              currentPage={checkBoxValue === "Sprzedaż"}
              hovered={hoveredButton === "buyButton"}
              onClick={() => setCheckBoxValue("Sprzedaż")}
              borderWidth={"border-4"}
              fontSize={"fs-6"}
            >
              Kupuję
            </NavButton>
            <NavButton
              onMouseEnter={handleMouseEnter("rentButton")}
              onMouseLeave={handleMouseLeave}
              hovered={hoveredButton === "rentButton"}
              borderColor={"border-white "}
              className={"text-white heroSection__navButton"}
              currentPage={checkBoxValue === "Wynajem"}
              onClick={() => setCheckBoxValue("Wynajem")}
              borderWidth={"border-4"}
              fontSize={"fs-6"}
            >
              Wynajmuję
            </NavButton>
            <NavButton
              onMouseEnter={handleMouseEnter("sellButton")}
              onMouseLeave={handleMouseLeave}
              hovered={hoveredButton === "sellButton"}
              borderColor={"border-white"}
              className={"text-white heroSection__navButton"}
              currentPage={checkBoxValue === "sell"}
              onClick={() => setCheckBoxValue("sell")}
              borderWidth={"border-4"}
              fontSize={"fs-6"}
            >
              Sprzedaję
            </NavButton>
            <NavButton
              onMouseEnter={handleMouseEnter("justSoldButton")}
              onMouseLeave={handleMouseLeave}
              hovered={hoveredButton === "justSoldButton"}
              borderColor={"border-white"}
              className={"d-none d-lg-block text-white heroSection__navButton"}
              currentPage={checkBoxValue === "justSold"}
              onClick={() => setCheckBoxValue("justSold")}
              borderWidth={"border-4"}
              fontSize={"fs-6"}
            >
              Właśnie sprzedane
            </NavButton>
          </nav>
          <div className="d-flex justify-content-center">
            <form autoComplete="off" className=" heroSection__formContainer">
              <input
                type={"checkbox"}
                value={checkBoxValue}
                id={"actionType"}
                aria-label={"actionType"}
                className={"visually-hidden"}
              />
              <SearchInput offerType={checkBoxValue} id={"heroSearchInput"} />
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
