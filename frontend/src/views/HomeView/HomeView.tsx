import { useEffect } from "react";
import HeaderView from "../../components/Header/HeaderView.tsx";
import SearchSection from "./SearchSection/SearchSection.tsx";
import { useDispatch } from "react-redux";
import { authGoogleUser } from "./authGoogleUser.ts";
import { CHANGE_TOKEN } from "../../utils/ActionTypes.ts";
import FooterView from "../../components/Footer/FooterView.tsx";

export default function HomeView() {
	const dispatch = useDispatch();
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
					window.location.pathname
				);
				(async () => {
					await authGoogleUser(accessToken);
					localStorage.setItem("operation", "login");
				})();
			}
		} else dispatch({ type: CHANGE_TOKEN, newToken: userToken });
	}, [window.location]);
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
