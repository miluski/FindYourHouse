import { OfferState } from "../../utils/types/State";

export function getIsDataValid(offer: OfferState): boolean {
	const isTitleValid = offer.title.length > Number(4);
	const isPriceValid = Number(offer.price) > Number(99);
	const isRentValid = Number(offer.rent) > Number(49);
	const isCautionValid = Number(offer.caution) > Number(49);
	const isAreaValid = Number(offer.area) > Number(9);
	const isPhotosArrayValid = offer.photos.length > Number(0);
	const isCityValid = offer.city.length > Number(2);
	const isStreetValid = offer.street.length > Number(3);
	const isHouseNumberValid = Number(offer.houseNumber) > Number(0);
	const isDescriptionValid = offer.description.length > Number(49);
	const isApartmentNumberValid =
		Number(offer.apartmentNumber) >= 0 || offer.propertyType !== "Mieszkanie";
	return (
		isTitleValid &&
		isPriceValid &&
		isRentValid &&
		isCautionValid &&
		isAreaValid &&
		isPhotosArrayValid &&
		isCityValid &&
		isStreetValid &&
		isHouseNumberValid &&
		isDescriptionValid &&
		isApartmentNumberValid
	);
}
