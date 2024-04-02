import { useEffect } from "react";
import FooterView from "../../components/Footer/FooterView.tsx";
import Header from "../../components/Header/Header.tsx";
import SearchSection from "./SearchSection.tsx";
import { useDispatch } from "react-redux";
import { authGoogleUser } from "./authGoogleUser.ts";

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
			<Header />
			<main>
				<SearchSection />
			</main>
			<FooterView />
		</>
	);
}

