import { UserState } from "../../../utils/types/State";
import { loginUser } from "./loginUser";

export const handleLoginButtonClick = async (
	user: UserState,
	setIsUserInvalid: Function
) => {
	const data = await loginUser(user.email, user.password, setIsUserInvalid);
	localStorage.setItem("email", user.email);
	data
		? (localStorage.setItem("token", data.accessToken.token),
		  localStorage.setItem("refreshToken", data.refreshToken.token),
		  localStorage.setItem("name", data.name),
		  localStorage.setItem("surname", data.surname),
		  localStorage.setItem("email", data.email),
		  localStorage.setItem("phoneNumber", data.phoneNumber),
		  localStorage.setItem("role", data.role),
		  (window.location.href = "/"))
		: null;
};
