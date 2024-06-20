import { axiosInstance } from "../../utils/axiosInstance";
import { UserState } from "../../utils/types/State";

export async function editUser(user: UserState): Promise<Boolean> {
	try {
		const objectToSend = {
			firstName: user.name,
			lastName: user.surname,
			phoneNumber: user.phoneNumber,
			email: user.email,
		};
		const response = await axiosInstance.patch("/api/users/edit", objectToSend);
		return response.status === 200;
	} catch (error) {
		console.log(error);
		return false;
	}
}
