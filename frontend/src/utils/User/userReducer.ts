import { UserAction } from "./UserAction";
import {
	CHANGE_NAME,
	CHANGE_SURNAME,
	CHANGE_PHONE_NUMBER,
	CHANGE_EMAIL,
	CHANGE_PASSWORD,
	CHANGE_TOKEN,
	CHANGE_GOOGLE_TOKEN,
	CHANGE_IS_DATA_VALID,
} from "./UserActionTypes";

const initialState = {
	name: "",
	surname: "",
	phoneNumber: "",
	email: "",
	password: "",
	token: "",
	googleToken: "",
	isDataValid: true,
};

export function userReducer(state = initialState, action: UserAction) {
	switch (action.type) {
		case CHANGE_NAME:
			return {
				...state,
				name: action.newName,
			};
		case CHANGE_SURNAME:
			return {
				...state,
				surname: action.newSurname,
			};
		case CHANGE_PHONE_NUMBER:
			return {
				...state,
				phoneNumber: action.newPhoneNumber,
			};
		case CHANGE_EMAIL:
			return {
				...state,
				email: action.newEmail,
			};
		case CHANGE_PASSWORD:
			return {
				...state,
				password: action.newPassword,
			};
		case CHANGE_TOKEN:
			return {
				...state,
				token: action.newToken,
			};
		case CHANGE_GOOGLE_TOKEN:
			return {
				...state,
				googleToken: action.newGoogleToken,
			};
		case CHANGE_IS_DATA_VALID:
			return {
				...state,
				isDataValid: action.newIsDataValid,
			};
		default:
			return state;
	}
}
