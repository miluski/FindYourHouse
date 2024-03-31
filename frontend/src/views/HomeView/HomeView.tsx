import FooterView from "../../components/Footer/FooterView.tsx";
import Header from "../../components/Header/Header.tsx";
import SearchSection from "./SearchSection.tsx";

function HomeView() {
  return (
    <>
      <Header />
      <main>
        <SearchSection />
      </main>
      <FooterView />
    </>
  );
}

export default HomeView;
