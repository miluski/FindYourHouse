import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import { MortrageCalculatorView } from "./views/MortrageCalculatorView/MortrageCalculatorView.tsx";
import { combineReducers, legacy_createStore } from "redux";
import { operationReducer } from "./utils/reducers/operationReducer.ts";
import { Provider } from "react-redux";
import ReportOfferView from "./views/ReportOfferView/ReportOfferView.tsx";
import { AddOfferView } from "./views/AddOfferView/AddOfferView.tsx";
import { userReducer } from "./utils/reducers/userReducer.ts";
import { calculatorReducer } from "./utils/reducers/calculatorReducer.ts";
import { adminReducer } from "./utils/reducers/adminReducer.ts";
import ApprovedPaymentView from "./views/AddOfferView/ApprovedPaymentView.tsx";
import CancelledPaymentView from "./views/AddOfferView/CancelledPaymentView.tsx";
import NotFoundView from "./views/ErrorViews/NotFoundView.tsx";
import { ProfileSettings } from "./views/ProfileSettings/ProfileSettings.tsx";
import { UserPanel } from "./views/UserPanelView/UserPanelView.tsx";
import FlatListView from "./views/FlatListView/FlatListView.tsx";
import AdminView from "./views/AdminView/AdminView.tsx";
import GuardView from "./views/ErrorViews/GuardView.tsx";

const browserRouter = createBrowserRouter([
	{
		path: "*",
		element: <NotFoundView />,
	},
	{
		path: "/",
		element: <HomeView />,
	},
	{
		path: "calculator",
		element: <MortrageCalculatorView />,
	},
	{
		path: "user-panel",
		element: (
			<GuardView>
				<UserPanel />
			</GuardView>
		),
	},
	{
		path: "messages",
		element: (
			<GuardView>
				<>
					<text>Not implemented yet</text>
				</>
			</GuardView>
		),
	},
	{
		path: "settings",
		element: (
			<GuardView>
				<ProfileSettings />
			</GuardView>
		),
	},
	{
		path: "admin-panel",
		element: (
			<GuardView>
				<AdminView />
			</GuardView>
		),
	},
	{
		path: "add-offer",
		element: (
			<GuardView>
				<AddOfferView />
			</GuardView>
		),
	},
	{
		path: "approved-payment",
		element: (
			<GuardView>
				<ApprovedPaymentView />
			</GuardView>
		),
	},
	{
		path: "cancelled-payment",
		element: (
			<GuardView>
				<CancelledPaymentView />
			</GuardView>
		),
	},
	{
		path: "report",
		element: (
			<GuardView>
				<ReportOfferView />
			</GuardView>
		),
	},
	{
		path: "flats",
		element: (
			<GuardView>
				<FlatListView />
			</GuardView>
		),
	},
]);

export default function App() {
	const appReducer = combineReducers({
		operationReducer,
		userReducer,
		calculatorReducer,
		adminReducer,
	});
	const store = legacy_createStore(appReducer);
	return (
		<Provider store={store}>
			<RouterProvider router={browserRouter} />
		</Provider>
	);
}
