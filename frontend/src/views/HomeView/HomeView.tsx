import { useEffect } from "react";
import FooterView from "../../components/Footer/FooterView.tsx";
import HeaderView from "../../components/Header/HeaderView.tsx";
import SearchSection from "./SearchSection.tsx";
import { useDispatch } from "react-redux";
import { authGoogleUser } from "./authGoogleUser.ts";
import { CHANGE_TOKEN } from "../../utils/ActionTypes.ts";

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
					await authGoogleUser(accessToken, dispatch);
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
