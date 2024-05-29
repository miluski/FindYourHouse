import { axiosInstance } from "../../../utils/axiosInstance";
import { Token } from "./Token";

export async function loginUser(
	email: string,
	password: string,
	setIsUserInvalid: Function
): Promise<Token | null> {
	try {
		const response = await axiosInstance.post("/api/users/auth/login", {
			email: email,
			password: password,
		});
		if (response.status === 200) {
			return response.data;
		} else setIsUserInvalid(true);
	} catch (error) {
		console.log(error);
	}
	return null;
}
