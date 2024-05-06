import { User } from "../../utils/types/User";
import { loginUser } from "./loginUser";

export const handleLoginButtonClick = async (user: User) => {
	const retrievedToken = await loginUser(user.email, user.password);
	retrievedToken
		? (localStorage.setItem("token", retrievedToken.token as string),
		  (window.location.href = "/"))
		: null;
};
