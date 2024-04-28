import { Picker } from "../../components/Picker/Picker";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CalculatorState } from "./CalculatorState";
import {
	CHANGE_PROPERTY_PRICE,
	CHANGE_OWN_CONTRIBUTION,
	CHANGE_LOAN_PERIOD,
	CHANGE_LOAN_INTEREST_RATE,
} from "./CalculatorActionTypes";

export const CredentialsPickerView = () => {
	const { propertyPrice, ownContribution, loanPeriod, loanInterestRate } =
		useSelector((state: CalculatorState) => state);
	return (
		<Container fluid className='my-5 p-5'>
			<Picker
				formLabel={"Cena nieruchomości"}
				minRange={100000}
				stepRange={500}
				maxRange={5000000}
				value={`${Number(propertyPrice).toLocaleString("pl-PL")} PLN`}
				dispatchType={CHANGE_PROPERTY_PRICE}
				selectedValue={propertyPrice}
				minValue={"100 000 PLN"}
				maxValue={"5 000 000 PLN"}
			/>
			<Picker
				formLabel={"Wkład własny"}
				minRange={5}
				stepRange={5}
				maxRange={90}
				value={`${ownContribution} %`}
				dispatchType={CHANGE_OWN_CONTRIBUTION}
				selectedValue={ownContribution}
				minValue={"5 %"}
				maxValue={"90 %"}
			/>
			<Picker
				formLabel={"Okres kredytowania"}
				minRange={5}
				stepRange={5}
				maxRange={35}
				value={`${loanPeriod} lat`}
				dispatchType={CHANGE_LOAN_PERIOD}
				selectedValue={loanPeriod}
				minValue={"5 lat"}
				maxValue={"35 lat"}
			/>
			<Picker
				formLabel={"Oprocentowanie kredytu"}
				minRange={5}
				stepRange={5}
				maxRange={40}
				value={`${loanInterestRate} %`}
				dispatchType={CHANGE_LOAN_INTEREST_RATE}
				selectedValue={loanInterestRate}
				minValue={"5 %"}
				maxValue={"40 %"}
			/>
		</Container>
	);
};
