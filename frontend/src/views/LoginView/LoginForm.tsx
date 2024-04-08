import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { NotRememberPasswordButton } from "./NotRememberPasswordButton";
import { LoginWithGoogleButton } from "./LoginWithGoogleButton";
import { handleLoginButtonClick } from "./handleLoginButtonClick";
import { UserState } from "../../utils/User/UserState";
import { CHANGE_IS_DATA_VALID } from "../../utils/User/UserActionTypes";
import "./styles/LoginForm.css";

export default function LoginForm() {
	const dispatch = useDispatch();
	const { isDataValid, email, password } = useSelector(
		(state: UserState) => state
	);
	return (
		<>
			<Form
				className={
					"d-flex flex-column border-bottom border-secondary-subtle p-2 p-lg-4 pb-lg-3"
				}
				noValidate
				validated={isDataValid}
				onSubmit={async (event) => {
					event.preventDefault();
					event.currentTarget.checkValidity() === false
						? (event.stopPropagation(),
						  dispatch({ type: CHANGE_IS_DATA_VALID, newIsDataValid: false }))
						: await handleLoginButtonClick({
								email: email,
								password: password,
						  });
				}}>
				<EmailInput />
				<PasswordInput />
				<Button className='fw-bold mb-2 mt-2' type='submit'>
					Zaloguj się
				</Button>
				<NotRememberPasswordButton />
			</Form>
			<LoginWithGoogleButton />
		</>
	);
}
