import { axiosInstance } from "../../utils/axiosInstance";
import { Payment } from "../../utils/types/Payment";

export async function finalizePayment(
	orderID: string
): Promise<Payment | number> {
	const response = await axiosInstance.post("/api/payment/complete", {orderID: orderID});
	return response.data ? response.data : response.status;
	const response = await axiosInstance.post("/api/payment/complete", {orderID: orderID});
	return response.data ? response.data : response.status;
}
