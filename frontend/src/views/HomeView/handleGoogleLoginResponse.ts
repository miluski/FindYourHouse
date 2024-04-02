import { Dispatch } from "react";
import { UnknownAction } from "redux";
import { CHANGE_TOKEN } from "../../utils/Operation/OperationActionTypes";

export function handleGoogleLoginResponse(
	token: string,
	dispatch: Dispatch<UnknownAction>
): void {
	token !== null
		? (dispatch({ type: CHANGE_TOKEN, newToken: token }),
		  alert("Pomyślnie zalogowano!"))
		: alert("Błąd logowania!");
}