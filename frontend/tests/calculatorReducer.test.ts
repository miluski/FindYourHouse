import {
	CHANGE_PROPERTY_PRICE,
	CHANGE_OWN_CONTRIBUTION,
	CHANGE_LOAN_PERIOD,
	CHANGE_LOAN_INTEREST_RATE,
	CHANGE_CALCULATED_CREDENTIALS,
} from "../src/utils/ActionTypes";
import { calculatorReducer } from "../src/utils/reducers/calculatorReducer";
import { CalculatorAction } from "../src/utils/types/Action";

describe("calculatorReducer", () => {
	const initialState = {
		propertyPrice: 100000,
		ownContribution: 5,
		loanPeriod: 5,
		loanInterestRate: 5,
		monthlyInstallment: 0,
		loanAmount: 0,
		interest: 0,
	};

	it("should handle CHANGE_PROPERTY_PRICE action", () => {
		const action: CalculatorAction = {
			type: CHANGE_PROPERTY_PRICE,
			newSelectedValue: 200000,
		};

		const newState = calculatorReducer(initialState, action);

		expect(newState.propertyPrice).toBe(200000);
	});

	it("should handle CHANGE_OWN_CONTRIBUTION action", () => {
		const action: CalculatorAction = {
			type: CHANGE_OWN_CONTRIBUTION,
			newSelectedValue: 10,
		};

		const newState = calculatorReducer(initialState, action);

		expect(newState.ownContribution).toBe(10);
	});

	it("should handle CHANGE_LOAN_PERIOD action", () => {
		const action: CalculatorAction = {
			type: CHANGE_LOAN_PERIOD,
			newSelectedValue: 10,
		};

		const newState = calculatorReducer(initialState, action);

		expect(newState.loanPeriod).toBe(10);
	});

	it("should handle CHANGE_LOAN_INTEREST_RATE action", () => {
		const action: CalculatorAction = {
			type: CHANGE_LOAN_INTEREST_RATE,
			newSelectedValue: 10,
		};

		const newState = calculatorReducer(initialState, action);

		expect(newState.loanInterestRate).toBe(10);
	});

	it("should handle CHANGE_CALCULATED_CREDENTIALS action", () => {
		const action: CalculatorAction = {
			type: CHANGE_CALCULATED_CREDENTIALS,
			newSelectedValue: 1,
		};

		const newState = calculatorReducer(initialState, action);

		expect(newState.monthlyInstallment).toBe(
			Math.round(
				((initialState.propertyPrice -
					initialState.propertyPrice * (initialState.ownContribution / 100)) *
					(initialState.loanInterestRate / 100)) /
					12
			)
		);
		expect(newState.loanAmount).toBe(
			Number(initialState.propertyPrice) +
				Number(
					Math.round(
						((initialState.propertyPrice -
							initialState.propertyPrice *
								(initialState.ownContribution / 100)) *
							(initialState.loanInterestRate / 100)) /
							12
					)
				) *
					12 *
					Number(initialState.loanPeriod)
		);
		expect(newState.interest).toBe(
			Math.round(
				((initialState.propertyPrice -
					initialState.propertyPrice * (initialState.ownContribution / 100)) *
					(initialState.loanInterestRate / 100)) /
					12
			) *
				12 *
				initialState.loanPeriod
		);
	});

	it("should handle unknown action types", () => {
		const action: CalculatorAction = {
			type: "UNKNOWN_ACTION",
			newSelectedValue: 0,
		};

		const newState = calculatorReducer(initialState, action);
		expect(newState.monthlyInstallment).toBe(
			Math.round(
				((initialState.propertyPrice -
					initialState.propertyPrice * (initialState.ownContribution / 100)) *
					(initialState.loanInterestRate / 100)) /
					12
			)
		);
		expect(newState.loanAmount).toBe(
			Number(initialState.propertyPrice) +
				Number(
					Math.round(
						((initialState.propertyPrice -
							initialState.propertyPrice *
								(initialState.ownContribution / 100)) *
							(initialState.loanInterestRate / 100)) /
							12
					)
				) *
					12 *
					Number(initialState.loanPeriod)
		);
		expect(newState.interest).toBe(
			Math.round(
				((initialState.propertyPrice -
					initialState.propertyPrice * (initialState.ownContribution / 100)) *
					(initialState.loanInterestRate / 100)) /
					12
			) *
				12 *
				initialState.loanPeriod
		);
	});
});
