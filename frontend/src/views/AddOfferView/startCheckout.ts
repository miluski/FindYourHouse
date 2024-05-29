import { axiosInstance } from "../../utils/axiosInstance";
import { Offer } from "./Offer";
import { getPaymentGateLink } from "./getPaymentGateLink";
import { registerOfflineTransaction } from "./registerOfflineTransaction";

export async function startCheckout(
	offerObject: Offer
): Promise<void | number> {
	try {
		const paymentGateLink = await getPaymentGateLink();
		if (paymentGateLink !== null) {
			const response = await axiosInstance.post(
				"/api/payment/check-gateway",
				paymentGateLink,
				{ headers: { 'Content-Type': 'plain/text' } }
			);
			response.status === 200
				? (window.location.href = paymentGateLink)
				: await registerOfflineTransaction({
						status: "UNCOMPLETED",
						offerObject: offerObject,
						category: "Akceptacja Transakcji",
						client_name: localStorage.getItem("email") ?? "",
						date: new Date().toLocaleDateString("en-GB", {
							day: "2-digit",
							month: "2-digit",
							year: "numeric",
						}),
						topic: "Akceptacja Transakcji",
				  });
		}
	} catch (error) {
		console.log(error);
	}
}
