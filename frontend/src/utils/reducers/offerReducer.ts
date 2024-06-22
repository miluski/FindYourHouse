import {
	CHANGE_OFFER_TYPE,
	CHANGE_PROPERTY_TYPE,
	CHANGE_TITLE,
	CHANGE_PRICE,
	CHANGE_RENT,
	CHANGE_CAUTION,
	CHANGE_AREA,
	CHANGE_ROOM_COUNT,
	CHANGE_PHOTOS,
	CHANGE_CITY,
	CHANGE_HOUSE_NUMBER,
	CHANGE_STREET,
	CHANGE_APARTMENT_NUMBER,
	CHANGE_DESCRIPTION,
	CHANGE_EXHIBITOR_EMAIL,
	CHANGE_EXHIBITOR_NAME,
	CHANGE_EXHIBITOR_PHONE_NUMBER,
	CHANGE_EXHIBITOR_SURNAME,
	CHANGE_PRICE_PER_QUADRA_METER,
	CHANGE_ACTUAL_SELECTED_OFFER,
} from "../ActionTypes";
import { OfferAction } from "../types/Action";

const initialState = {
	offerType: "Wynajem",
	propertyType: "Dom",
	title: "",
	price: 100,
	rent: 50,
	caution: 50,
	area: 10,
	roomCount: 1,
	photos: [],
	city: "",
	houseNumber: 1,
	street: "",
	apartmentNumber: 1,
	pricePerQuadraMeter: 0,
	description: "",
	exhibitorName: "",
	exhibitorSurname: "",
	exhibitorPhoneNumber: "",
	exhibitorEmail: "",
	isDataValid: false,
	actualSelectedOffer: {
		offerType: "",
		propertyType: "",
		title: "",
		price: 0,
		rent: 0,
		caution: 0,
		area: 0,
		roomCount: 0,
		photos: [],
		city: "",
		houseNumber: 0,
		street: "",
		apartmentNumber: 0,
		pricePerQuadraMeter: 0,
		description: "",
		exhibitorName: "",
		exhibitorSurname: "",
		exhibitorPhoneNumber: "",
		exhibitorEmail: "",
		isDataValid: false,
		canShow: false,
	},
};

export function offerReducer(state = initialState, action: OfferAction) {
	switch (action.type) {
		case CHANGE_OFFER_TYPE:
			return {
				...state,
				offerType: action.newOfferType,
			};
		case CHANGE_PROPERTY_TYPE:
			return {
				...state,
				propertyType: action.newPropertyType,
			};
		case CHANGE_TITLE:
			return {
				...state,
				title: action.newTitle,
			};
		case CHANGE_PRICE:
			return {
				...state,
				price: action.newPrice,
			};
		case CHANGE_RENT:
			return {
				...state,
				rent: action.newRent,
			};
		case CHANGE_CAUTION:
			return {
				...state,
				caution: action.newCaution,
			};
		case CHANGE_AREA:
			return {
				...state,
				area: action.newArea,
			};
		case CHANGE_ROOM_COUNT:
			return {
				...state,
				roomCount: action.newRoomCount,
			};
		case CHANGE_PHOTOS:
			return {
				...state,
				photos: action.newPhotos,
			};
		case CHANGE_CITY:
			return {
				...state,
				city: action.newCity,
			};
		case CHANGE_HOUSE_NUMBER:
			return {
				...state,
				houseNumber: action.newHouseNumber,
			};
		case CHANGE_STREET:
			return {
				...state,
				street: action.newStreet,
			};
		case CHANGE_APARTMENT_NUMBER:
			return {
				...state,
				apartmentNumber: action.newApartmentNumber,
			};
		case CHANGE_PRICE_PER_QUADRA_METER:
			return {
				...state,
				pricePerQuadraMeter: action.newPricePerQuadraMeter,
			};
		case CHANGE_DESCRIPTION:
			return {
				...state,
				description: action.newDescription,
			};
		case CHANGE_EXHIBITOR_NAME:
			return {
				...state,
				exhibitorName: action.newExhibitorName,
			};
		case CHANGE_EXHIBITOR_SURNAME:
			return {
				...state,
				exhibitorSurname: action.newExhibitorSurname,
			};
		case CHANGE_EXHIBITOR_PHONE_NUMBER:
			return {
				...state,
				exhibitorPhoneNumber: action.newExhibitorPhoneNumber,
			};
		case CHANGE_EXHIBITOR_EMAIL:
			return {
				...state,
				exhibitorEmail: action.newExhibitorEmail,
			};
		case CHANGE_ACTUAL_SELECTED_OFFER:
			return {
				...state,
				actualSelectedOffer: action.newActualSelectedOffer,
			};
		default:
			return state;
	}
}
