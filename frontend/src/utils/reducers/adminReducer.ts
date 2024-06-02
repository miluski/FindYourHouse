import { AdminAction } from "../types/Action";
import { CHANGE_CURRENT_PAGE, CHANGE_MESSAGES_COUNT, CHANGE_SELECTED_TITLE, CHANGE_START_DATE } from "../ActionTypes";

const initialState = {
	startDate: undefined,
	selectedTitle: "KOLEJKA",
	currentPage: 1,
	messagesCount: undefined
};

export function adminReducer(state = initialState, action: AdminAction) {
	switch (action.type) {
		case CHANGE_START_DATE:
			return {
				...state,
				startDate: action.newStartDate,
			};
		case CHANGE_SELECTED_TITLE:
			return {
				...state,
				selectedTitle: action.newSelectedTitle,
			};
		case CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.newCurrentPage,
			};
		case CHANGE_MESSAGES_COUNT: 
			return {
				...state,
				messagesCount: action.newMessagesCount,
			};
		default:
			return state;
	}
}
