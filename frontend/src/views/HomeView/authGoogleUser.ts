import { axiosInstance } from "../../utils/axiosInstance";
import { handleGoogleLoginResponse } from "./handleGoogleLoginResponse";
import { handleGoogleRegisterResponse } from "./handleGoogleRegisterResponse";

export async function authGoogleUser(accessToken: string): Promise<void> {
	const operation = localStorage.getItem("operation");
	const endpoint =
		operation === "login"
			? `/api/users/auth/google/login`
			: `/api/users/auth/google/register`;
	const response = await axiosInstance.post(endpoint, accessToken);
	operation === "login"
		? handleGoogleLoginResponse(response.data)
		: handleGoogleRegisterResponse(response.data);
}
