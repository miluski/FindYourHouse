export type OperationState = {
	operationReducer: Reducer<OperationState, Action>;
	operation: string;
	token: string;
};

export type UserState = {
	userReducer: Reducer<UserState, Action>;
	name: string;
	surname: string;
	phoneNumber: string;
	email: string;
	password: string;
	isDataValid: boolean;
};

export type CalculatorState = {
	calculatorReducer: Reducer<CalculatorState, Action>;
	propertyPrice: number;
	ownContribution: number;
	loanPeriod: number;
	loanInterestRate: number;
	monthlyInstallment: number;
	loanAmount: number;
	interest: number;
};

export type AdminState = {
	adminReducer: Reducer<AdminState, Action>;
	startDate: Date | undefined;
	selectedTitle: string;
	currentPage: number;
	messagesCount: number;
};
