import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import { MortrageCalculatorView } from "./views/MortrageCalculatorView/MortrageCalculatorView.tsx";
import { combineReducers, legacy_createStore } from "redux";
import { operationReducer } from "./utils/reducers/operationReducer.ts";
import { Provider } from "react-redux";
import ReportOfferView from "./views/ReportOfferView/ReportOfferView.tsx";
import AdminView from "./views/AdminView/AdminView.tsx";
import { userReducer } from "./utils/reducers/userReducer.ts";
import { calculatorReducer } from "./utils/reducers/calculatorReducer.ts";
import { adminReducer } from "./utils/reducers/adminReducer.ts";

function App() {
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
					<Route path='/admin' element={<AdminView />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
