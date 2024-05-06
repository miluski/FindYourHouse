import { Payment } from "./Payment";

export async function finalizePayment(orderID: string): Promise<Payment> {
	const token = localStorage.getItem("token");
	const response = await fetch("http://localhost:8080/api/payment/complete", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ orderID: orderID }),
	});
	return await response.json();
}
