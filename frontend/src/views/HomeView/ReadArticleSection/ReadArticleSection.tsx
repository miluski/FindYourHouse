import Container from "react-bootstrap/Container";
import "./ReadArticleSection.css";
import ArticleCard from "../../../components/ArticleCard/ArticleCard.tsx";
import article1ThumbNail from "../../../assets/articlesThumbNails/article1.jpg";
import article2ThumbNail from "../../../assets/articlesThumbNails/article2.jpg";
import article3ThumbNail from "../../../assets/articlesThumbNails/article3.jpg";
import article4ThumbNail from "../../../assets/articlesThumbNails/article4.jpg";

export default function ReadArticleSection() {
  return (
    <section>
      <div className={" readArticle position-relative"}>
        <Container style={{ height: "500px" }}>
          <div
            className={
              "text-white position-absolute z-1 w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center"
            }
          >
            <div
              className={
                "d-flex flex-column align-items-start align-items-md-center px-3"
              }
              style={{ maxWidth: "1080px" }}
            >
              <h2
                className={"fs-5 m-0"}
                style={{ textShadow: "rgb(0,0,0) 1px 1px 1px" }}
              >
                Trendy
              </h2>
              <h2 className={"articleDescription text-md-center fw-bold  fs-4"}>
                Te 10 Polskich Miast Mają Najwięcej Domów Poniżej 800K Złotych -
                Lecz Być Może Nie Na Długo
              </h2>
              <button
                type={"button"}
                className={"articleDescription__button fw-semibold "}
              >
                Przeczytaj Artykuł
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div style={{ padding: "80px 0px", background: "rgb(233, 231, 228)" }}>
        <Container fluid={"xl"}>
          <div className={"d-flex gap-3 overflow-x-auto py-2"}>
            <ArticleCard
              thumbNail={article1ThumbNail}
              link={"#"}
              badgeText={"Trendy"}
              text={
                "Dziękujemy Wam: 10 najlepszych rynków mieszkaniowych  dla żołnierzy i weteranów"
              }
            />
            <ArticleCard
              thumbNail={article2ThumbNail}
              link={"#"}
              badgeText={"Reality TV"}
              text={
                "Reakcja Chipa i Jo? Wewnątrz zamieszania wokół renowacji domu nad jeziorem Gaineses"
              }
            />
            <ArticleCard
              thumbNail={article3ThumbNail}
              link={"#"}
              badgeText={"Unikalne domy"}
              text={
                "Gra o domy: 5 zaskakująco niedrogich zamków w cenie poniżej 1 miliona złotych"
              }
            />
            <ArticleCard
              thumbNail={article4ThumbNail}
              link={"#"}
              badgeText={"Posiadłości celebrytów"}
              text={
                "NBA Cribs: pełne wsadów domy drużyny Dallas Mavericks 2024"
              }
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
