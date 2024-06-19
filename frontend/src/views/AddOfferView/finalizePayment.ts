import { axiosInstance } from "../../utils/axiosInstance";
import { Payment } from "../../utils/types/Payment";
import { UserData } from "../../utils/types/UserData";

export async function finalizePayment(
	orderID: string,
	user: UserData
): Promise<Payment | number> {
	const response = await axiosInstance.post("/api/payment/complete", {
		orderID: orderID,
		user: user,
		amount: 10
	});
	return response.data ? response.data : response.status;
}
