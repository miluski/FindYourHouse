import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { CredentialsPickerView } from "../src/views/MortrageCalculatorView/CredentialsPickerView";
import { legacy_createStore } from "redux";
import { CalculatorAction } from "../src/utils/types/Action";

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

describe("CredentialsPickerView", () => {
	test("renders the component", () => {
		render(
			<Provider store={mockStore}>
				<CredentialsPickerView />
			</Provider>
		);

		const propertyPricePicker = screen.getByText("Cena nieruchomości");
		expect(propertyPricePicker).toBeInTheDocument();

		const ownContributionPicker = screen.getByText("Wkład własny");
		expect(ownContributionPicker).toBeInTheDocument();

		const loanPeriodPicker = screen.getByText("Okres kredytowania");
		expect(loanPeriodPicker).toBeInTheDocument();

		const loanInterestRatePicker = screen.getByText(
			"Oprocentowanie kredytu"
		);
		expect(loanInterestRatePicker).toBeInTheDocument();
	});

});
