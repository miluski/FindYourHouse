import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_EMAIL,
	CHANGE_NAME,
	CHANGE_PHONE_NUMBER,
	CHANGE_SURNAME,
} from "../../utils/ActionTypes";
import { UserState } from "../../utils/types/State";

export const EditingAccountFormView = () => {
	const dispatch = useDispatch();
	const phoneNumber = localStorage.getItem("phoneNumber") ?? "";
	const email = localStorage.getItem("email") ?? "";
	const name = localStorage.getItem("name") ?? "";
	let surname = localStorage.getItem("surname");
	surname = surname !== "null" ? surname : "";
	const user = useSelector((state: UserState) => state.userReducer);
	return (
		<Container className='border border-black rounded'>
			<Form.Group controlId='firstName' className='mt-4 '>
				<Form.Label>Imię:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={name}
					onChange={(e) =>
						dispatch({ type: CHANGE_NAME, newName: e.target.value })
					}
				/>
			</Form.Group>
			<Form.Group controlId='lastName'>
				<Form.Label>Nazwisko:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={surname ?? ""}
					onChange={(e) =>
						dispatch({ type: CHANGE_SURNAME, newSurname: e.target.value })
					}
				/>
			</Form.Group>
			<Form.Group controlId='phoneNumber'>
				<Form.Label>Numer telefonu:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={phoneNumber}
					onChange={(e) =>
						dispatch({
							type: CHANGE_PHONE_NUMBER,
							newPhoneNumber: e.target.value,
						})
					}
				/>
			</Form.Group>
			<Form.Group controlId='email'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					defaultValue={email !== null ? email : ""}
					onChange={(e) =>
						dispatch({ type: CHANGE_EMAIL, newEmail: e.target.value })
					}
				/>
			</Form.Group>
			<Container className='d-flex mt-4 mb-4 justify-content-center align-items-center'>
				<Button
					className='btn btn-warning'
					onClick={async () => {
						//todo: validation logic
						//todo: communicate with backend logic
					}}>
					Zatwierdź
				</Button>
			</Container>
		</Container>
	);
};
