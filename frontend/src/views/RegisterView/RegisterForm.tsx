import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { handleRegisterButtonClick } from "./handleRegisterButtonClick";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../utils/User/UserState";
import { CHANGE_IS_DATA_VALID } from "../../utils/User/UserActionTypes";
import { NameInput } from "./NameInput";
import { SurnameInput } from "./SurnameInput";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { RegisterWithGoogleButton } from "./RegisterWithGoogleButton";
import { UsageTerms } from "./UsageTerms";
import "./styles/RegisterForm.css";

export const RegisterForm = () => {
	const dispatch = useDispatch();
	const user = useSelector((state: UserState) => state);
	return (
		<>
			<Form
				className={
					"d-flex flex-column border-bottom border-secondary-subtle p-2 p-lg-4 pb-lg-3"
				}
				noValidate
				onSubmit={async (event) => {
					const form = event.currentTarget;
					form.checkValidity() === false
						? (event.stopPropagation(),
						  dispatch({ type: CHANGE_IS_DATA_VALID, newIsDataValid: false }))
						: await handleRegisterButtonClick(dispatch, user);
					event.preventDefault();
				}}
				validated={user.isDataValid}>
				<NameInput />
				<SurnameInput />
				<EmailInput />
				<PasswordInput />
				<PhoneNumberInput />
				<Button className='fw-bold mb-2 mt-2' type='submit'>
					Zarejestruj się
				</Button>
				<UsageTerms />
			</Form>
			<RegisterWithGoogleButton />
		</>
	);
}
