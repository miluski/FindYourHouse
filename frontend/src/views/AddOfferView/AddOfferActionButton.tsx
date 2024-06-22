import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { OfferState } from "../../utils/types/State";
import { getIsDataValid } from "./getIsDataValid";
import { startCheckout } from "./startCheckout";
import { useNavigate } from "react-router-dom";
export const AddOfferActionButton = (props: {
	actualSiteNumber?: number;
	setActualSiteNumber?: Function;
	setIsLoading?: Function;
}) => {
	const navigate = useNavigate();
	const offer = useSelector(
		(state: OfferState) => state.offerReducer as unknown as OfferState
	);
	return (
		<div className='addOfferActionButton' data-testid="addOfferActionButton">
			<Button
				variant='warning'
				onClick={async () => {
					props.setIsLoading && props.setIsLoading(true);
					if (props.actualSiteNumber === 1) {
						offer.propertyType !== ""
							? props.setActualSiteNumber && props.setActualSiteNumber(2)
							: alert("Wybierz rodzaj nieruchomości!");
					} else {
						const isDataValid = getIsDataValid(offer);
						isDataValid
							? await startCheckout(navigate, offer)
							: alert(
									"Uzupełnij poprawnie dane ogłoszenia lub dodaj chociaż jedno zdjęcie!"
							  );
					}
					props.setIsLoading && props.setIsLoading(false);
				}}>
				Przejdź dalej
			</Button>{" "}
		</div>
	);
};
