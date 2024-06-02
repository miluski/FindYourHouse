import { axiosInstance } from "../../../utils/axiosInstance";
import { UserState } from "../../../utils/types/State";

export async function registerUser(userObject: UserState) {
	try {
		const response = await axiosInstance.post("/api/users/auth/register", userObject);
		response.status === 200 ? (window.location.href = "/") : alert("Błąd!");
	} catch (error) {
		console.log(error);
	}
}
