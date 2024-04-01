import { OperationAction } from "./OperationAction";
import { CHANGE_TOKEN, CHANGE_OPERATION } from "./OperationActionTypes";

const initialState = {
	operation: "login",
	token: "",
};

export function operationReducer(
	state = initialState,
	action: OperationAction
) {
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
