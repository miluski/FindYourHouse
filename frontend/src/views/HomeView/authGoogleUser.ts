import { Dispatch } from "react";
import { UnknownAction } from "redux";
import { handleGoogleLoginResponse } from "./handleGoogleLoginResponse";
import { handleGoogleRegisterResponse } from "./handleGoogleRegisterResponse";

export async function authGoogleUser(
	accessToken: string,
	dispatch: Dispatch<UnknownAction>
): Promise<void> {
	const operation = localStorage.getItem("operation");
	const endpoint =
		operation === "login"
			? `http://localhost:8080/api/users/auth/google/login`
			: `http://localhost:8080/api/users/auth/google/register`;
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "text/plain",
		},
		body: accessToken,
	});
	const data = await response.json();
	operation === "login"
		? handleGoogleLoginResponse(data.token, dispatch)
		: handleGoogleRegisterResponse(data);
}