import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import {
	CHANGE_CALCULATED_CREDENTIALS,
	CHANGE_LOAN_PERIOD,
} from "./CalculatorActionTypes";
import "./styles/Picker.css";

export const LoanPeriodPicker = () => {
	const dispatch = useDispatch();
	const { loanPeriod } = useSelector((state: CalculatorState) => state);
	return (
		<div className='p-3'>
			<Form.Label className='fw-bold fs-5 pickerLabel'>
				Okres kredytowania
			</Form.Label>
			<div className='d-flex'>
				<div className='position-relative w-100'>
					<Form.Range
						className='pickerRange'
						min={5}
						step={5}
						max={35}
						value={loanPeriod}
						onChange={(event) => {
							dispatch({
								type: CHANGE_LOAN_PERIOD,
								newLoanPeriod: event.target.value,
							});
							dispatch({ type: CHANGE_CALCULATED_CREDENTIALS });
						}}
					/>
					<span className='position-absolute start-0 top-50 translate-middle-y my-4'>
						5 lat
					</span>
					<span className='position-absolute end-40 top-50 translate-middle-y my-4'>
						35 lat
					</span>
					<span className='fw-semibold fs-5 pickerCredentialText'>
						{loanPeriod} lat
					</span>
				</div>
			</div>
		</div>
	);
};
