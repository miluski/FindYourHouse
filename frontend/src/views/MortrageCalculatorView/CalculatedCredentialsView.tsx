import { useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import "./styles/CalculatedCredentialsViewStyles.css";
import { Building, CurrencyExchange, Wallet2 } from "react-bootstrap-icons";

export const CalculatedCredentialsView = () => {
	const { monthlyInstallment, loanAmount, interest } = useSelector(
		(state: CalculatorState) => state
	);
	return (
		<div className='border border-dark p-5 align-items-center justify-content-center shadow-lg rounded-3 flex-grow-1'>
			<div className='d-flex flex-column'>
				<text className='fw-regular fs-5 my-3 align-self-center mx-1'>Obliczona rata miesięczna: </text>
				<div className='d-flex flex-row align-self-center'>
					<Wallet2 className='mx-2 my-2' size={32} />
					<text className='monthlyInstallmentText mx-3'>
						{monthlyInstallment.toLocaleString("pl-PL")} PLN{" "}
					</text>
				</div>
			</div>
			<div className='d-flex flex-column'>
				<text className='fw-regular fs-5 my-3 align-self-center mx-1'>Kwota kredytu: </text>
				<div className='d-flex flex-row align-self-center'>
					<Building className='mx-2 my-2' size={32} />
					<text className='credentialsText mx-2'>
						{loanAmount.toLocaleString("pl-PL")} PLN{" "}
					</text>
				</div>
			</div>
			<div className='d-flex flex-column'>
				<text className='fw-regular fs-5 my-3 align-self-center mx-1'>Odsetki: </text>
				<div className='d-flex flex-row align-self-center'>
					<CurrencyExchange className='mx-2 my-2' size={32} />
					<text className='credentialsText mx-2'>
						{interest.toLocaleString("pl-PL")} PLN{" "}
					</text>
				</div>
			</div>
		</div>
	);
};
