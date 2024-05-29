import { Payment } from "./Payment";

export async function finalizePayment(
	orderID: string
): Promise<Payment | number> {
	const token = localStorage.getItem("token");
	const response = await fetch("http://localhost:8080/api/payment/complete", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ orderID: orderID }),
	});
	try {
		return await response.json();
	} catch (error) {
		console.log(error);
		return response.status;
	}
}
