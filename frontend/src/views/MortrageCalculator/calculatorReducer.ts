import { Action } from "./Action";
import {
	CHANGE_PROPERTY_PRICE,
	CHANGE_OWN_CONTRIBUTION,
	CHANGE_LOAN_PERIOD,
	CHANGE_LOAN_INTEREST_RATE,
	CHANGE_CALCULATED_CREDENTIALS,
} from "./CalculatorActionTypes";

const initialState = {
	propertyPrice: 100000,
	ownContribution: 5,
	loanPeriod: 5,
	loanInterestRate: 5,
	monthlyInstallment: 0,
	loanAmount: 0,
	interest: 0,
};

export function calculatorReducer(state = initialState, action: Action) {
	let monthlyInstallment = Math.round(
		((state.propertyPrice -
			state.propertyPrice * (state.ownContribution / 100)) *
			(state.loanInterestRate / 100)) /
			12
	);
	switch (action.type) {
		case CHANGE_PROPERTY_PRICE:
			return {
				...state,
				propertyPrice: action.newPropertyPrice,
			};
		case CHANGE_OWN_CONTRIBUTION:
			return {
				...state,
				ownContribution: action.newOwnContribution,
			};
		case CHANGE_LOAN_PERIOD:
			return {
				...state,
				loanPeriod: action.newLoanPeriod,
			};
		case CHANGE_LOAN_INTEREST_RATE:
			return {
				...state,
				loanInterestRate: action.newLoanInterestRate,
			};
		case CHANGE_CALCULATED_CREDENTIALS:
			return {
				...state,
				monthlyInstallment: monthlyInstallment,
				loanAmount:
					Number(state.propertyPrice) +
					Number(monthlyInstallment) * 12 * Number(state.loanPeriod),
				interest: monthlyInstallment * 12 * state.loanPeriod,
			};
		default:
			return {
				...state,
				monthlyInstallment: monthlyInstallment,
				loanAmount:
					state.propertyPrice + monthlyInstallment * 12 * state.loanPeriod,
				interest: monthlyInstallment * 12 * state.loanPeriod,
			};
	}
}
