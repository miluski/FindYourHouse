import { Action } from "../types/Action";
import { CHANGE_OPERATION, CHANGE_TOKEN } from "../ActionTypes";

const initialState = {
	operation: "login",
	token: "",
};

export function operationReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_OPERATION: {
			return {
				...state,
				operation: action.newOperation,
			};
		}
		case CHANGE_TOKEN: {
			return {
				...state,
				token: action.newToken,
			};
		}
		default:
			return state;
	}
}
