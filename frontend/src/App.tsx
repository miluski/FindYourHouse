import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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
			<Router>
				<Routes>
					<Route errorElement='' path='/' element={<HomeView />} />
					<Route path='/calculator' element={<MortrageCalculatorView />} />
          			<Route path='/report' element={<ReportOfferView />} />
		      		<Route path='/add-offer' element={<AddOfferView/>} />
					<Route path='/report' element={<ReportOfferView />} />
					<Route
						path='/add-offer/approvedPayment'
						element={<ApprovedPaymentView />}
					/>
					<Route
						path='/add-offer/cancelledPayment'
						element={<CancelledPaymentView />}
					/>
					<Route path='*' element={<NotFoundView />} />
				</Routes>
			</Router>
		</Provider>
	);
}
