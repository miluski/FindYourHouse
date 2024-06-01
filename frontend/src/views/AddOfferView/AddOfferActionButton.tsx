import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OfferState } from "../../utils/types/State";
import { getIsDataValid } from "./getIsDataValid";
import { startCheckout } from "./startCheckout";
export const AddOfferActionButton = (props: {
	actualSiteNumber?: number;
	setActualSiteNumber?: Function;
}) => {
	const offer = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<div className='addOfferActionButton'>
			<Button
				variant='warning'
				onClick={async () => {
					if (props.actualSiteNumber === 1) {
						offer.propertyType !== ""
							? props.setActualSiteNumber && props.setActualSiteNumber(2)
							: alert("Wybierz rodzaj nieruchomości!");
					} else {
						const isDataValid = getIsDataValid(offer);
						isDataValid
							? await startCheckout(offer)
							: alert(
									"Uzupełnij poprawnie dane ogłoszenia lub dodaj chociaż jedno zdjęcie!"
							  );
					}
				}}>
				Przejdź dalej
			</Button>{" "}
		</div>
	);
};
