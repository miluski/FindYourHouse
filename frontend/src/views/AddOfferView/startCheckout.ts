import { axiosInstance } from "../../utils/axiosInstance";
import { OfferState } from "../../utils/types/State";
import { getPaymentGateLink } from "./getPaymentGateLink";
import { registerOfflineTransaction } from "./registerOfflineTransaction";

export async function startCheckout(offerObject: OfferState): Promise<void> {
	try {
		const paymentGateLink = await getPaymentGateLink();
		offerObject.pricePerQuadraMeter = Math.round(Number(offerObject.price) / Number(offerObject.area));
		localStorage.setItem("offerCredentials", JSON.stringify(offerObject));
		if (paymentGateLink !== null) {
			const response = await axiosInstance.post(
				"/api/payment/check-gateway",
				paymentGateLink,
				{ headers: { "Content-Type": "plain/text" } }
			);
			let name = localStorage.getItem("name");
			let surname = localStorage.getItem("surname");
			name = name ? name : "";
			surname = surname ? surname : "";
			response.status === 200
				? (window.location.href = paymentGateLink)
				: (localStorage.removeItem("offerCredentials"),
				  await registerOfflineTransaction({
						status: "UNCOMPLETED",
						offerObject: offerObject,
						category: "Akceptacja Transakcji",
						client_name: name + " " + surname,
						date: new Date().toLocaleDateString("en-GB", {
							day: "2-digit",
							month: "2-digit",
							year: "numeric",
						}),
						topic: "Akceptacja Transakcji",
				  }));
		}
	} catch (error) {
		console.log(error);
	}
}
