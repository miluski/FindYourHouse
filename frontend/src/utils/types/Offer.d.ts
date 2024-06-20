export type Offer = {
	offerType: string;
	propertyType: string;
	title: string;
	price: number;
	rent: number;
	caution: number;
	area: number;
	roomCount: number;
	photos: Array<Photo>;
	city: string;
	houseNumber: number;
	street: string;
	apartmentNumber: number;
	pricePerQuadraMeter: number;
	description: string;
	exhibitorName?: string;
	exhibitorSurname?: string;
	exhibitorPhoneNumber?: string;
	exhibitorEmail?: string;
	isDataValid: boolean;
	canShow?: boolean;
};