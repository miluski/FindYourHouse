import "./LocalInfoSection.css";
import Button from "react-bootstrap/Button";
import SearchInput from "../../../components/SearchInput/SearchInput.tsx";

export default function LocalInfoSection() {
  return (
    <section
      className={
        "d-none d-md-block border-bottom border-black border-opacity-50"
      }
    >
      <div className={"d-flex"}>
        <div className={"w-50 moreInfoHeroContainer moreInfoHero1"}></div>
        <div className={"w-50 d-flex flex-column justify-content-center"}>
          <div className={"px-4 px-lg-5"}>
            <h3 className={"fw-bold fs-2 m-0"}>
              Potrzebujesz kredytu na dom? Uzyskaj wstępną akceptację
            </h3>
            <p className={"mt-2 mb-4 fs-5"}>
              Znajdź pożyczkodawcę, który może zaoferować konkurencyjne
              oprocentowanie kredytu hipotecznego i pomóc Ci w uzyskaniu
              wstępnego zatwierdzenia.
            </p>
            <Button
              type={"button"}
              className={"rounded-5 px-4 py-2 fw-semibold"}
              variant={"dark"}
            >
              Uzyskaj wstępne zatwierdzenie
            </Button>
          </div>
        </div>
      </div>
      <div className={"d-flex"}>
        <div className={"w-50 d-flex flex-column justify-content-center"}>
          <div className={"px-4 px-lg-5"}>
            <h3 className={"fw-bold fs-2 m-0"}>Zdobądź Lokalne Informacje</h3>
            <p className={"mt-2 mb-4 fs-5"}>
              Czy ma posesje przyjazne zwierzętom? Jak tam szkoły? Uzyskaj ważne
              informacje lokalne na temat obszaru, który Cię najbardziej
              interesuje.
            </p>
            <div className={"w-75"}>
              <SearchInput outline id={"moreInfoInput"} />
            </div>
          </div>
        </div>
        <div className={"w-50 moreInfoHeroContainer moreInfoHero2"}></div>
      </div>
    </section>
  );
}
