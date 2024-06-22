import { axiosInstance } from "../../../utils/axiosInstance";
import { UserData } from "../../../utils/types/UserData";

export async function loginUser(
	email: string,
	password: string,
	setIsUserInvalid: Function
): Promise<UserData | null> {
	try {
		const response = await axiosInstance.post("/api/users/auth/login", {
			email: email,
			password: password,
		});
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		setIsUserInvalid(true);
		console.log(error);
	}
	return null;
}
