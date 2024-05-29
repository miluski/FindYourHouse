import { axiosInstance } from "../../utils/axiosInstance";
import { Payment } from "./Payment";

export async function finalizePayment(
	orderID: string
): Promise<Payment | number> {
	const response = await axiosInstance.post("/api/payment/complete", {orderID: orderID});
	return response.data ? response.data : response.status;
}
