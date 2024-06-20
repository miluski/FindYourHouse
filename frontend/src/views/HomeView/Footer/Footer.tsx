import Container from "react-bootstrap/Container";
import RoundedIcon from "../../../components/RoundedIcon/RoundedIcon.tsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      className={"w-100"}
      style={{
        backgroundColor: "rgb(26, 24, 22)",
        padding: "56px 0px",
      }}
    >
      <Container fluid={"md"} className={"d-flex flex-column gap-5"}>
        <div
          className={
            "d-flex gap-3 justify-content-center justify-content-md-start"
          }
        >
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-facebook socialIconSize"}
              iconColor={"text-dark"}
            />
          </button>
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-twitter-x socialIconSize"}
              iconColor={"text-dark "}
            />
          </button>
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-linkedin socialIconSize"}
              iconColor={"text-dark "}
            />
          </button>
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-instagram socialIconSize"}
              iconColor={"text-dark "}
            />
          </button>
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-pinterest socialIconSize"}
              iconColor={"text-dark "}
            />
          </button>
          <button
            className={
              "p-0 rounded-circle border-0 bg-transparent hover-opacity-75"
            }
          >
            <RoundedIcon
              className={"bg-white p-3 p-lg-4"}
              icon={"bi-youtube socialIconSize"}
              iconColor={"text-dark "}
            />
          </button>
        </div>
        <div>
          <div className={" d-flex flex-wrap  row-gap-4 "}>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              O nas
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Kariera
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Dostępność
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Wsparcie
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Pokój wywiadów
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Wybór reklam
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Zareklamuj się z nami
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Wsparcie agencji
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Prywatność
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Blog technologiczny
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Blog dla agentów
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              FAQ
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent  fw-semibold personalDataLink w-100 text-start"
              }
            >
              Nie udostępniaj Moich Danych Osobowych
            </button>
          </div>
        </div>
        <div>
          <h5 className={"fw-bold mb-4 text-white"}>Produkty</h5>
          <div className={"d-flex flex-wrap text-white fw-semibold row-gap-4 "}>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Wskazówki & Reklamowanie
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              ListHub
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Międzynarodowe Posesje
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Anvil
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              UpNest
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Kalkulator Kredytów
            </button>
          </div>
        </div>
        <div>
          <h5 className={"fw-bold mb-4 text-white"}>Magazyny Korporacyjne</h5>
          <div
            className={
              "list-unstyled d-flex flex-wrap text-white fw-semibold row-gap-4 "
            }
          >
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Barrons
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Financial News
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Harper Collins
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Mansion Global
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              MarketWatch
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              New York Post
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              REA Group
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Storyful
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Wall Street Journal
            </button>
            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Makaan.com
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              Housing.com
            </button>

            <button
              className={
                "p-0 border-0 bg-transparent text-white fw-semibold footerLink text-start"
              }
            >
              News PL
            </button>
          </div>
        </div>
        <p className={"fs-8 text-white opacity-50 m-0"}>
          &copy; Karol Przygoda, Filip Skibiński, Jakub Szczur, Maksymilian
          Sowula
        </p>
      </Container>
    </footer>
  );
}
