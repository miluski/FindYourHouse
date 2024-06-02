import { registerOfflineTransaction } from "./registerOfflineTransaction";

export async function handleRegisterOfflineTransaction() {
	const offerObject = JSON.parse(
		localStorage.getItem("offerCredentials") ?? ""
	);
	let name = localStorage.getItem("name");
	let surname = localStorage.getItem("surname");
	name !== "null" ? name : "";
	surname !== "null" ? surname : "";
	offerObject.canShow = false;
	await registerOfflineTransaction({
		status: "UNCOMPLETED",
		offer: offerObject,
		category: "Akceptacja Transakcji",
		clientName: name + " " + surname,
		date: new Date().toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		}),
		topic: "Akceptacja Transakcji",
	});
	localStorage.removeItem("offerCredentials");
}
