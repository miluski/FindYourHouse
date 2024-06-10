import NavButton from "../CustomButtons/NavButton/NavButton.tsx";
import Button from "react-bootstrap/Button";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.tsx";
import LinkButton from "../CustomButtons/LinkButton/LinkButton.tsx";
import "./Header.css";
import RoundedIcon from "../RoundedIcon/RoundedIcon.tsx";

export default function HeaderDesktop({
  handleShowModal,
}: {
  handleShowModal: Function;
}) {
  const token = localStorage.getItem("token");

  const [currentPageState, setCurrentPageState] = useState("homePage");
  const [hoveredButton, setHoveredButton] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    localStorage.setItem("currentPageHeader", page);
  };

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPageHeader");
    if (storedPage) {
      setCurrentPageState(storedPage);
    }
  }, []);

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setHoveredButton("");

    timeoutRef.current = setTimeout(() => {
      setDropdownVisible("");
    }, 200);
  };

  const handleMouseEnter = (buttonName: string, dropdownName: string) => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredButton(buttonName);

    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(dropdownName);
    }, 200);
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className={
          "w-100  d-none d-xl-flex align-items-center justify-content-between"
        }
      >
        <div className="h-100 d-flex justify-content-start align-items-center  ms-3 border-top border-2 border-transparent">
          <NavButton
            onClick={() => {
              setCurrentPage("homePage");
              navigate("/");
            }}
            onMouseEnter={handleMouseEnter("homeButton", "")}
            onMouseLeave={handleMouseLeave}
            currentPage={currentPageState === "homePage"}
            hovered={hoveredButton === "homeButton"}
          >
            Strona główna
          </NavButton>
          <NavButton
            onMouseEnter={handleMouseEnter("buyButton", "buyDropdown")}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setCurrentPage("buyPage");
              navigate("/flats");
            }}
            currentPage={currentPageState === "buyPage"}
            hovered={hoveredButton === "buyButton"}
          >
            Kupuję
          </NavButton>
          <NavButton
            onMouseEnter={handleMouseEnter("rentButton", "rentDropdown")}
            onMouseLeave={handleMouseLeave}
            onClick={() => setCurrentPage("rentPage")}
            currentPage={currentPageState === "rentPage"}
            hovered={hoveredButton === "rentButton"}
          >
            Wynajmuję
          </NavButton>
          <NavButton
            onMouseEnter={handleMouseEnter("sellButton", "sellDropdown")}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              setCurrentPage("sellPage");
              navigate("/add-offer");
            }}
            currentPage={currentPageState === "sellPage"}
            hovered={hoveredButton === "sellButton"}
          >
            Sprzedaję
          </NavButton>
          <NavButton
            onClick={() => {
              setCurrentPage("mortgagePage");
              navigate("/calculator");
            }}
            onMouseEnter={handleMouseEnter("mortgageButton", "")}
            onMouseLeave={handleMouseLeave}
            currentPage={currentPageState === "mortgagePage"}
            hovered={hoveredButton === "mortgageButton"}
          >
            Kredyty
          </NavButton>
        </div>
        {token !== "" && token !== null ? (
          <div className={"d-none d-xl-flex align-items-center"}>
            <RoundedIcon
              onClick={() => {
                setCurrentPage("accountPage");
                navigate("/user-panel");
              }}
              className={"cursor-pointer"}
              icon={"bi-person-fill"}
            />
            <div className={"border-top border-2 border-transparent"}>
              <NavButton
                onMouseEnter={handleMouseEnter("loginButton", "")}
                onMouseLeave={handleMouseLeave}
                hovered={hoveredButton === "loginButton"}
                currentPage={currentPageState === "accountPage"}
                onClick={() => {
                  setCurrentPage("accountPage");
                  navigate("/user-panel");
                }}
              >
                Moje Konto
              </NavButton>
            </div>
          </div>
        ) : (
          <div className={"d-none d-xl-flex align-items-center"}>
            <div className={"border-top border-2 border-transparent"}>
              <NavButton
                onMouseEnter={handleMouseEnter("loginButton", "")}
                onMouseLeave={handleMouseLeave}
                hovered={hoveredButton === "loginButton"}
                onClick={handleShowModal("login")}
              >
                Logowanie
              </NavButton>
            </div>
            <Button
              onClick={handleShowModal("register")}
              className={"fw-semibold rounded-pill"}
              variant="dark"
            >
              Rejestracja
            </Button>
          </div>
        )}
      </div>
      <HeaderDropdown
        handleMouseEnter={handleMouseEnter("buyButton", "buyDropdown")}
        handleMouseLeave={handleMouseLeave}
        visible={dropdownVisible === "buyDropdown"}
      >
        <div className={"d-flex border-2 border-end headerDropdownContentLeft"}>
          <HeaderDropdown.List
            className={"text-nowrap"}
            title={"Nieruchomości"}
          >
            <LinkButton onClick={() => navigate("#")}>Mieszkania</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Kawalerki</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Domy</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Działki</LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Lokale użytkowe
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>Biura</LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Hale i magazyny
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>Garaże</LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List
            className={"text-nowrap"}
            title={"Popularne Lokalizacje"}
          >
            <LinkButton onClick={() => navigate("#")}>Warszawa</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Wrocław</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Krakow</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Poznań</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Gdańsk</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Łódź</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Gdynia</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Katowice</LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List title={"Inwestycje"}>
            <LinkButton onClick={() => navigate("#")}>
              Nowe mieszkania
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>Nowe domy</LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Nowe lokale użytkowe
            </LinkButton>
          </HeaderDropdown.List>
        </div>
        <div className={"headerDropdownContentRight"}>
          <HeaderDropdown.List paddingLeft title={"Przewodnik Kupującego"}>
            <LinkButton onClick={() => navigate("#")}>
              Dane Analytics: aktualne ceny ofertowe mieszkań i domów, ceny
              najmu i zwrot z inwestycji w 40 największych miastach...
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Praktyczne rozwiązania, które pomogą Ci wybrać mieszkanie...
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Uzyskaj dostęp do swojego Statusu Kredytowego w BIK…
            </LinkButton>
            <LinkButton
              className={
                "fw-bold link-underline-dark link-underline-opacity-100"
              }
              onClick={() => navigate("#")}
            >
              Zobacz wszystkie <i className="bi bi-chevron-right "></i>
            </LinkButton>
          </HeaderDropdown.List>
        </div>
      </HeaderDropdown>
      <HeaderDropdown
        handleMouseEnter={handleMouseEnter("rentButton", "rentDropdown")}
        handleMouseLeave={handleMouseLeave}
        visible={dropdownVisible === "rentDropdown"}
      >
        <div className={"d-flex border-2 border-end headerDropdownContentLeft"}>
          <HeaderDropdown.List
            className={"text-nowrap"}
            title={"Nieruchomości"}
          >
            <LinkButton onClick={() => navigate("#")}>Mieszkania</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Kawalerki</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Domy</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Działki</LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Lokale użytkowe
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>Biura</LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Hale i magazyny
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>Garaże</LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List
            className={"text-nowrap"}
            title={"Popularne Lokalizacje"}
          >
            <LinkButton onClick={() => navigate("#")}>Warszawa</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Wrocław</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Krakow</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Poznań</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Gdańsk</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Łódź</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Gdynia</LinkButton>
            <LinkButton onClick={() => navigate("#")}>Katowice</LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List
            className={"text-nowrap"}
            title={"Biura Nieruchomości"}
          >
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Warszawie
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości we Wrocławiu
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Krakowie
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Poznaniu
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Gdańsku
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Łodzi
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Gdyni
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Biura nieruchomości w Katowicach
            </LinkButton>
          </HeaderDropdown.List>
        </div>
        <div className={"headerDropdownContentRight"}>
          <HeaderDropdown.List paddingLeft title={"Przewodnik Wynajmującego"}>
            <LinkButton onClick={() => navigate("#")}>
              Dane Analytics: aktualne ceny ofertowe mieszkań i domów, ceny
              najmu i zwrot z inwestycji w 40 największych miastach...
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Raport z rynku najmu – luty 2023...
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Ogłoszenie najmu lub sprzedaży nieruchomości – jak je napisać, by
              było skuteczne?
            </LinkButton>
            <LinkButton
              className={
                "fw-bold link-underline-dark link-underline-opacity-100"
              }
              onClick={() => navigate("#")}
            >
              Zobacz wszystkie <i className="bi bi-chevron-right "></i>
            </LinkButton>
          </HeaderDropdown.List>
        </div>
      </HeaderDropdown>
      <HeaderDropdown
        handleMouseEnter={handleMouseEnter("sellButton", "sellDropdown")}
        handleMouseLeave={handleMouseLeave}
        visible={dropdownVisible === "sellDropdown"}
      >
        <div className={"d-flex border-2 border-end headerDropdownContentLeft"}>
          <HeaderDropdown.List title={"Sprzedaż Nieruchomości"}>
            <LinkButton onClick={() => navigate("#")}>
              Przewodnik krok po kroku
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Sytuacja na rynku
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Sytuacja na rynku
            </LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List title={"Wycena Nieruchomości"}>
            <LinkButton onClick={() => navigate("#")}>
              Wyceń swoje mieszkanie
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Ile warte jest Twoje mieszkanie?
            </LinkButton>
          </HeaderDropdown.List>
          <HeaderDropdown.List title={"Chcesz Sprzedawać Nieruchomości?"}>
            <Button
              onClick={() => {
                setCurrentPage("sellPage");
                navigate("/add-offer");
              }}
              className={"fw-bold w-100 border-2"}
              variant={"outline-dark"}
            >
              Dodaj ogłoszenie
            </Button>
          </HeaderDropdown.List>
        </div>
        <div className={"headerDropdownContentRight"}>
          <HeaderDropdown.List paddingLeft title={"Przewodnik Sprzedawcy"}>
            <LinkButton onClick={() => navigate("#")}>
              Nie można sprzedać ani wynająć mieszkania bez świadectwa
              energetycznego
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Ogłoszenie o wynajmie lub sprzedaży nieruchomości – jak je
              napisać, aby było skuteczne?
            </LinkButton>
            <LinkButton onClick={() => navigate("#")}>
              Ogłoszenie o wynajmie lub sprzedaży nieruchomości – jak je
              napisać, aby było skuteczne?
            </LinkButton>
            <LinkButton
              className={
                "fw-bold link-underline-dark link-underline-opacity-100"
              }
              onClick={() => navigate("#")}
            >
              Zobacz wszystkie <i className="bi bi-chevron-right "></i>
            </LinkButton>
          </HeaderDropdown.List>
        </div>
      </HeaderDropdown>
    </>
  );
}
