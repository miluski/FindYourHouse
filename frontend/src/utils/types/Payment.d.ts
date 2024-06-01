import { Offer } from "./Offer";

export type Payment = {
	id?: string;
	category: string;
	client_name: string;
	date: string;
	topic: string;
	offerObject: Offer;
	status?: string;
};
