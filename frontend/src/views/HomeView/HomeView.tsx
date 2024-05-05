import { useEffect } from "react";
import HeaderView from "../../components/Header/HeaderView.tsx";
import SearchSection from "./SearchSection/SearchSection.tsx";
import { useDispatch } from "react-redux";
import { authGoogleUser } from "./authGoogleUser.ts";
import FooterView from "../../components/Footer/FooterView.tsx";

export default function HomeView() {
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");
    if (accessToken !== null) {
      window.history.replaceState({}, document.title, window.location.pathname);
      (async () => {
        await authGoogleUser(accessToken, dispatch);
        localStorage.setItem("operation", "login");
      })();
    }
  }, []);
  return (
    <>
      <HeaderView />
      <main>
        <SearchSection />
      </main>
      <FooterView />
    </>
  );
}
