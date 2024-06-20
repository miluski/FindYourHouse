export type Message = {
	id: number;
	topic: string;
	clientName: string;
	category: string;
	offer: { id: number };
	date: string;
};
