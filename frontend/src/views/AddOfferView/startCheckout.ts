import { sendRefreshTokensRequest } from "../../utils/sendRefreshTokensRequest";
import { Offer } from "./Offer";
import { registerOfflineTransaction } from "./registerOfflineTransaction";

export async function startCheckout(
	offerObject: Offer
): Promise<void | number> {
	const token = localStorage.getItem("token");
	const response = await fetch("http://localhost:8080/api/payment/checkout", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	try {
		const link = await response.json();
		const endpoint = "http://localhost:8080/api/payment/check-gateway";
		const checkResponse = await fetch(endpoint, {
			method: "POST",
			headers: {
				"Content-Type": "text/plain",
                Authorization: `Bearer ${token}`,
			},
			body: link.checkoutUrl,
		});
		if (checkResponse.status === 200) window.location.href = link.checkoutUrl;
		else {
			const isRegistered = await registerOfflineTransaction({
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
			isRegistered === 403
				? (await sendRefreshTokensRequest(),
				  await registerOfflineTransaction({
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
				  }))
				: null;
		}
	} catch (error) {
		console.log(error);
		return response.status;
	}
}
