import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import HomeView from "./views/HomeView/HomeView.tsx";
import { MortrageCalculatorView } from "./views/MortrageCalculatorView/MortrageCalculatorView.tsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomeView/>} />
				<Route path='/calculator' element={<MortrageCalculatorView />} />
			</Routes>
		</Router>
	);
}

export default App;
