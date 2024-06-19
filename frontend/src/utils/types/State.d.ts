import { Reducer } from "redux";
import {
	OfferAction,
	AdminAction,
	CalculatorAction,
	UserAction,
} from "./Action";
import { offerReducer } from "../reducers/offerReducer";
import { Photo } from "./Photo";
import { Offer } from "./Offer";

export type UserState = {
	userReducer: Reducer<UserState, UserAction>;
	name: string;
	surname: string;
	phoneNumber: string;
	email: string;
	password: string;
	isDataValid: boolean;
};

export type CalculatorState = {
	calculatorReducer: Reducer<CalculatorState, CalculatorAction>;
	propertyPrice: number;
	ownContribution: number;
	loanPeriod: number;
	loanInterestRate: number;
	monthlyInstallment: number;
	loanAmount: number;
	interest: number;
};

export type AdminState = {
	adminReducer: Reducer<AdminState, AdminAction>;
	startDate: Date | undefined;
	selectedTitle: string;
	currentPage: number;
	messagesCount: number;
};

export type OfferState = {
	offerReducer?: Reducer<OfferState, OfferAction>;
	offerType: string;
	propertyType: string;
	title: string;
	price: number;
	rent: number;
	caution: number;
	area: number;
	roomCount: number;
	photos: Array<Photo>;
	city: string;
	houseNumber: number;
	street: string;
	apartmentNumber: number;
	pricePerQuadraMeter: number;
	description: string;
	exhibitorName?: string;
	exhibitorSurname?: string;
	exhibitorPhoneNumber?: string;
	exhibitorEmail?: string;
	isDataValid: boolean;
	canShow?: boolean;
	actualSelectedOffer: Offer;
};
