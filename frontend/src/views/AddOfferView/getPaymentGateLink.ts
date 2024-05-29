import { axiosInstance } from "../../utils/axiosInstance";

export async function getPaymentGateLink(): Promise<string | null> {
	try {
		const response = await axiosInstance.get("/api/payment/checkout");
		return response.data.checkoutUrl;
	} catch (error) {
		console.log(error);
		return null;
	}
}
