import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/HeaderView";
import { calculatorReducer } from "./calculatorReducer";
import { CredentialsPickerView } from "./CredentialsPickerView";
import { CalculatedCredentialsView } from "./CalculatedCredentialsView";

export const MortrageCalculatorView = () => {
	const calculatorStore = legacy_createStore(calculatorReducer);
	localStorage.removeItem("token");
	return (
		<Provider store={calculatorStore}>
			<div className='d-flex flex-column min-vh-100 justify-content-center'>
				<HeaderView />
				<div className='d-flex flex-row border border-dark rounded-3 p-5 shadow-lg mt-3 mb-3 overflow-auto mx-5'>
					<CredentialsPickerView />
					<CalculatedCredentialsView />
				</div>
				<FooterView />
			</div>
		</Provider>
	);
};
