export type Payment = {
	id: string;
	payer: {
		payer_id: string;
		email_address: string;
	};
	status: string;
};
