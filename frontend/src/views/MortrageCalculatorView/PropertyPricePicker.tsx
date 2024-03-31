import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import {
	CHANGE_CALCULATED_CREDENTIALS,
	CHANGE_PROPERTY_PRICE,
} from "./CalculatorActionTypes";
import "./styles/Picker.css";

export const PropertyPricePicker = () => {
	const dispatch = useDispatch();
	const { propertyPrice } = useSelector((state: CalculatorState) => state);
	return (
		<div className='p-3'>
			<Form.Label className='fw-bold fs-5 pickerLabel'>
				Cena nieruchomości
			</Form.Label>
			<div className='d-flex'>
				<div className='position-relative w-100'>
					<Form.Range
						className='pickerRange'
						min={100000}
						step={500}
						max={5000000}
						value={propertyPrice}
						onChange={(event) => {
							dispatch({
								type: CHANGE_PROPERTY_PRICE,
								newPropertyPrice: event.target.value,
							});
							dispatch({ type: CHANGE_CALCULATED_CREDENTIALS });
						}}
					/>
					<span className='position-absolute start-0 top-50 translate-middle-y my-4'>
						100 000 PLN
					</span>
					<span className='position-absolute end-40 top-50 translate-middle-y my-4'>
						5 000 000 PLN
					</span>
					<span className='fw-semibold fs-5 pickerCredentialText'>
						{Number(propertyPrice).toLocaleString("pl-PL")} PLN
					</span>
				</div>
			</div>
		</div>
	);
};
