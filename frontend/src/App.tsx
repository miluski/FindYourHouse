import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import { MortrageCalculatorView } from "./views/MortrageCalculatorView/MortrageCalculatorView.tsx";
import { legacy_createStore } from "redux";
import { operationReducer } from "./utils/Operation/operationReducer.ts";
import { Provider } from "react-redux";
import ReportOfferView from "./views/ReportOfferView/ReportOfferView.tsx";
import ApprovedPaymentView from "./views/AddOfferView/ApprovedPaymentView.tsx";
import CancelledPaymentView from "./views/AddOfferView/CancelledPaymentView.tsx";

function App() {
	const operationStore = legacy_createStore(operationReducer);
	return (
		<Provider store={operationStore}>
			<Router>
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/calculator' element={<MortrageCalculatorView />} />
					<Route path='/report' element={<ReportOfferView />} />
					<Route
						path='/add-offer/approvedPayment'
						element={<ApprovedPaymentView />}
					/>
					<Route
						path='/add-offer/cancelledPayment'
						element={<CancelledPaymentView />}
					/>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
