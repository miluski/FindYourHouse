import { useEffect } from "react";
import SearchSection from "./SearchSection/SearchSection.tsx";
import { authGoogleUser } from "./authGoogleUser.ts";
import Header from "../../components/Header/Header.tsx";
import HeroSection from "./HeroSection/HeroSection.tsx";

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
  }, [window.location]);
  return (
    <div className={"min-vw-100 min-vh-100 overflow-auto"}>
      <div style={{ minWidth: "280px" }}>
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
