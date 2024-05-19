import { User } from "../../../utils/types/User";
import { loginUser } from "./loginUser";

export const handleLoginButtonClick = async (
	user: User,
	setIsUserInvalid: Function
) => {
	const retrievedToken = await loginUser(
		user.email,
		user.password,
		setIsUserInvalid
	);
	localStorage.setItem("email", user.email);
	retrievedToken
		? (localStorage.setItem(
				"token",
				retrievedToken.accessToken.token as string
		  ),
		  localStorage.setItem(
				"refreshToken",
				retrievedToken.refreshToken.token as string
		  ),
		  (window.location.href = "/"))
		: null;
};
