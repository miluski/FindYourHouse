export type UserAction = {
	type: string;
	newName: string;
	newSurname: string;
	newPhoneNumber: string;
	newEmail: string;
	newPassword: string;
	newIsDataValid: boolean;
};

export type CalculatorAction = {
	type: string;
	newSelectedValue: number;
};

export type AdminAction = {
	type: string;
	newStartDate: Date;
	newSelectedTitle: string;
	newCurrentPage: number;
	newMessagesCount: number;
};

export type OfferAction = {
	type: string;
	newOfferType: string;
	newPropertyType: string;
	newTitle: string;
	newPrice: number;
	newRent: number;
	newCaution: number;
	newArea: number;
	newRoomCount: number;
	newPhotos: Array<string>;
	newCity: string;
	newHouseNumber: number;
	newStreet: string;
	newApartmentNumber: number;
	newPricePerQuadraMeter: number;
	newDescription: string;
	newExhibitorName: string;
	newExhibitorSurname: string;
	newExhibitorPhoneNumber: string;
	newExhibitorEmail: string;
};
