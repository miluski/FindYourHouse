import { useEffect } from "react";
import { authGoogleUser } from "./authGoogleUser.ts";
import Header from "../../components/Header/Header.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";
import "./HomeView.css";
import FlatListSection from "./FlatListSection/FlatListSection.tsx";
import ReadArticleSection from "./ReadArticleSection/ReadArticleSection.tsx";
import LocalInfoSection from "./LocalInfoSection/LocalInfoSection.tsx";
import MoreInfoSection from "./MoreInfoSection/MoreInfoSection.tsx";
import Footer from "./Footer/Footer.tsx";

export default function HomeView() {
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken === null) {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get("access_token");
      if (accessToken !== null) {
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        );
        (async () => {
          await authGoogleUser(accessToken);
          localStorage.setItem("operation", "login");
        })();
      }
    }
  }, []);

  return (
    <div className="vh-100 vw-100 overflow-x-auto" id={"indexWrapper"}>
      <div style={{ minWidth: "280px" }}>
        <Header />
        <HeroSection />
        <main>
          <FlatListSection />
          <ReadArticleSection />
          <LocalInfoSection />
          <MoreInfoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
