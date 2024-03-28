import { LoanPeriodPicker } from "./LoanPeriodPicker";
import { PropertyPricePicker } from "./PropertyPricePicker";
import { OwnContributionPicker } from "./OwnContributionPicker";
import { LoanInterestRatePicker } from "./LoanInterestRatePicker";

export const CredentialsPickerView = () => {
	return (
		<div className='flex-grow-1 align-self-center'>
			<PropertyPricePicker />
			<OwnContributionPicker />
			<LoanPeriodPicker />
			<LoanInterestRatePicker />
		</div>
	);
};
