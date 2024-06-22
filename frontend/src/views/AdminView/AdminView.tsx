import FooterView from "../../components/Footer/FooterView";
import StripeView from "./StripeView";
import ContentView from "./ContentView";
import NotAuthorizedView from "../ErrorViews/NotAuthorizedView";

export default function AdminView() {
	const role = localStorage.getItem("role") ?? "USER";
	return role === "ADMIN" ? (
		<>	
			<StripeView />
			<ContentView />
			<FooterView fixedBottom />
		</>
	) : (
		<NotAuthorizedView />
	);
}
