import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import {
	CHANGE_CALCULATED_CREDENTIALS,
	CHANGE_LOAN_INTEREST_RATE,
} from "./CalculatorActionTypes";
import "./styles/Picker.css";

export const LoanInterestRatePicker = () => {
	const dispatch = useDispatch();
	const { loanInterestRate } = useSelector((state: CalculatorState) => state);
	return (
		<div className='p-3'>
			<Form.Label className='fw-bold fs-5 pickerLabel'>
				Oprocentowanie kredytu
			</Form.Label>
			<div className='d-flex'>
				<div className='position-relative w-100 flex-grow-1'>
					<Form.Range
						className='pickerRange'
						min={5}
						step={5}
						max={40}
						value={loanInterestRate}
						onChange={(event) => {
							dispatch({
								type: CHANGE_LOAN_INTEREST_RATE,
								newLoanInterestRate: event.target.value,
							});
							dispatch({ type: CHANGE_CALCULATED_CREDENTIALS });
						}}
					/>
					<span className='position-absolute start-0 top-50 translate-middle-y my-4'>
						5 %
					</span>
					<span
						className='position-absolute top-50 translate-middle-y my-4'>
						40 %
					</span>
					<span className='fw-semibold fs-5 pickerCredentialText'>
						{loanInterestRate} %
					</span>
				</div>
			</div>
		</div>
	);
};
