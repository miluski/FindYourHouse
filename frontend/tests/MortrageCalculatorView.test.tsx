import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MortrageCalculatorView } from "../src/views/MortrageCalculatorView/MortrageCalculatorView";
import { legacy_createStore } from "redux";
import { CalculatorAction } from "../src/utils/types/Action";
import { Provider } from "react-redux";

const initialState = {
	calculatorReducer: {
		propertyPrice: 100000,
		ownContribution: 5,
		loanPeriod: 5,
		loanInterestRate: 5,
		monthlyInstallment: 1000,
		loanAmount: 50000,
		interest: 2000,
	},
};

const rootReducer = (state = initialState, _action: CalculatorAction) => state;

const mockStore = legacy_createStore(rootReducer);

describe("MortrageCalculatorView", () => {
	test("renders the component", () => {
		render(
			<Provider store={mockStore}>
				<MortrageCalculatorView />
			</Provider>
		);
	});
});
