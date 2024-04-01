import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import { MortrageCalculatorView } from "./views/MortrageCalculatorView/MortrageCalculatorView.tsx";
import { legacy_createStore } from "redux";
import { operationReducer } from "./utils/Operation/operationReducer.ts";
import { Provider } from "react-redux";

function App() {
	const operationStore = legacy_createStore(operationReducer);
	return (
		<Provider store={operationStore}>
			<Router>
				<Routes>
					<Route path='/' element={<HomeView />} />
					<Route path='/calculator' element={<MortrageCalculatorView />} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
