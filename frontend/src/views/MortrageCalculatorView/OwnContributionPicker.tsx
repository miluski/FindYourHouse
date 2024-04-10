import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import {
	CHANGE_CALCULATED_CREDENTIALS,
	CHANGE_OWN_CONTRIBUTION,
} from "./CalculatorActionTypes";
import "./styles/Picker.css";

export const OwnContributionPicker = () => {
	const dispatch = useDispatch();
	const { ownContribution } = useSelector((state: CalculatorState) => state);
	return (
		<div className='p-3'>
			<Form.Label className='fw-bold fs-5 pickerLabel'>Wkład własny</Form.Label>
			<div className='d-flex'>
				<div className='position-relative w-100'>
					<Form.Range
						className='pickerRange'
						min={5}
						step={5}
						max={90}
						value={ownContribution}
						onChange={(event) => {
							dispatch({
								type: CHANGE_OWN_CONTRIBUTION,
								newOwnContribution: event.target.value,
							});
							dispatch({ type: CHANGE_CALCULATED_CREDENTIALS });
						}}
					/>
					<span className='position-absolute start-0 top-50 translate-middle-y my-4'>
						5 %
					</span>
					<span className='position-absolute end-40 top-50 translate-middle-y my-4'>
						90 %
					</span>
					<span className='fw-semibold fs-5 pickerCredentialText'>
						{ownContribution} %
					</span>
				</div>
			</div>
		</div>
	);
};
