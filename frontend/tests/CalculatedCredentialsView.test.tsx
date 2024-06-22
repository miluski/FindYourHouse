import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CalculatedCredentialsView } from "../src/views/MortrageCalculatorView/CalculatedCredentialsView";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
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

describe("CalculatedCredentialsView", () => {
	test("renders the component", () => {
		render(
			<Provider store={mockStore}>
				<CalculatedCredentialsView />
			</Provider>
		);
		const calculatedViewElement = screen.getByTestId("calculatedView");
		expect(calculatedViewElement).toBeInTheDocument();
	});

	test("displays monthly installment correctly", () => {
		render(
			<Provider store={mockStore}>
				<CalculatedCredentialsView />
			</Provider>
		);
		const monthlyInstallmentElement = screen.getByText(/Obliczona rata:/i);
		expect(monthlyInstallmentElement).toBeInTheDocument();
		const monthlyInstallmentValue = screen.getByText(/1000 PLN/i);
		expect(monthlyInstallmentValue).toBeInTheDocument();
	});

	test("displays loan amount correctly", () => {
		render(
			<Provider store={mockStore}>
				<CalculatedCredentialsView />
			</Provider>
		);
		const loanAmountElement = screen.getByText(/Kwota kredytu:/i);
		expect(loanAmountElement).toBeInTheDocument();
		const loanAmountValue = screen.getByText(/50 000 PLN/i);
		expect(loanAmountValue).toBeInTheDocument();
	});

	test("displays interest correctly", () => {
		render(
			<Provider store={mockStore}>
				<CalculatedCredentialsView />
			</Provider>
		);
		const interestElement = screen.getByText(/Odsetki:/i);
		expect(interestElement).toBeInTheDocument();
		const interestValue = screen.getByText(/2000 PLN/i);
		expect(interestValue).toBeInTheDocument();
	});
});
