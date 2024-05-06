import { Payment } from "./Payment";

export async function registerOfflineTransaction(payment: Payment) {
	const token = localStorage.getItem("token");
	const endpoint = "http://localhost:8080/api/messages/admin/create";
	await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(payment),
	});
}
