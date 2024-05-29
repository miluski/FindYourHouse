import { axiosInstance } from "../../../utils/axiosInstance";
import { User } from "../../../utils/types/User";

export async function registerUser(userObject: User) {
	try {
		const response = await axiosInstance.post("/api/users/auth/register", userObject);
		response.status === 200 ? (window.location.href = "/") : alert("Błąd!");
	} catch (error) {
		console.log(error);
	}
}
