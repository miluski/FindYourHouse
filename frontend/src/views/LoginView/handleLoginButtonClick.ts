import { User } from "../../utils/User/User";
import {
	CHANGE_IS_DATA_VALID,
	CHANGE_TOKEN,
} from "../../utils/User/UserActionTypes";
import { loginUser } from "./loginUser";
import { Dispatch, UnknownAction } from "redux";

export const handleLoginButtonClick = async (
	dispatch: Dispatch<UnknownAction>,
	user: User
) => {
	const retrievedToken = await loginUser(user.email, user.password);
	retrievedToken
		? dispatch({ type: CHANGE_TOKEN, newToken: retrievedToken.token })
		: null;
	dispatch({ type: CHANGE_IS_DATA_VALID, newIsDataValid: false });
};
