import { Offer } from "./Offer";

export type Payment = {
	id?: string;
	category: string;
	clientName: string;
	date: string;
	topic: string;
	offer: Offer;
	status?: string;
};
