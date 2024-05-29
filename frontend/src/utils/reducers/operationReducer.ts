import { Action } from "../types/Action";
import { CHANGE_OPERATION } from "../ActionTypes";

const initialState = {
	operation: "login"
};

export function operationReducer(state = initialState, action: Action) {
	switch (action.type) {
		case CHANGE_OPERATION: {
			return {
				...state,
				operation: action.newOperation,
			};
		}
		default:
			return state;
	}
}
