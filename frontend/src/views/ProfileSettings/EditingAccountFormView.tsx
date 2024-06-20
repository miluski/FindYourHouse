import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
	CHANGE_EMAIL,
	CHANGE_NAME,
	CHANGE_PHONE_NUMBER,
	CHANGE_SURNAME,
} from "../../utils/ActionTypes";
import { UserState } from "../../utils/types/State";
import { validateData } from "./validateData";
import { editUser } from "./editUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const EditingAccountFormView = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const phoneNumber = localStorage.getItem("phoneNumber") ?? "";
	const email = localStorage.getItem("email") ?? "";
	const name = localStorage.getItem("name") ?? "";
	let surname = localStorage.getItem("surname");
	surname = surname !== "null" ? surname : "";
	const user = useSelector(
		(state: UserState) => state.userReducer as unknown as UserState
	);
	useEffect(() => {
		dispatch({ type: CHANGE_EMAIL, newEmail: email });
		dispatch({ type: CHANGE_PHONE_NUMBER, newPhoneNumber: phoneNumber });
		dispatch({ type: CHANGE_NAME, newName: name });
		dispatch({ type: CHANGE_SURNAME, newSurname: surname });
	}, []);
	return (
		<Container className='border border-black rounded'>
			<Form.Group controlId='firstName' className='mt-4 '>
				<Form.Label>Imię:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={name}
					onChange={(e) => {
						dispatch({ type: CHANGE_NAME, newName: e.target.value });
						localStorage.setItem("name", e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group controlId='lastName'>
				<Form.Label>Nazwisko:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={surname ?? ""}
					onChange={(e) => {
						dispatch({ type: CHANGE_SURNAME, newSurname: e.target.value });
						localStorage.setItem("surname", e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group controlId='phoneNumber'>
				<Form.Label>Numer telefonu:</Form.Label>
				<Form.Control
					type='text'
					defaultValue={phoneNumber}
					onChange={(e) => {
						dispatch({
							type: CHANGE_PHONE_NUMBER,
							newPhoneNumber: e.target.value,
						});
						localStorage.setItem("phoneNumber", e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group controlId='email'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					defaultValue={email !== null ? email : ""}
					onChange={(e) => {
						dispatch({ type: CHANGE_EMAIL, newEmail: e.target.value });
						localStorage.setItem("email", e.target.value);
					}}
				/>
			</Form.Group>
			<Container className='d-flex mt-4 mb-4 justify-content-center align-items-center'>
				<Button
					className='btn btn-warning'
					onClick={async () => {
						const isDataValid = validateData(user);
						const isUserProperlyEdited = isDataValid
							? await editUser(user)
							: false;
						if (isUserProperlyEdited) {
							dispatch({ type: CHANGE_EMAIL, newEmail: email });
							dispatch({
								type: CHANGE_PHONE_NUMBER,
								newPhoneNumber: phoneNumber,
							});
							dispatch({ type: CHANGE_NAME, newName: name });
							dispatch({ type: CHANGE_SURNAME, newSurname: surname });
							navigate("/user-panel");
							alert("Pomyślnie zedytowano dane!");
						} else {
							alert(
								"Wystąpił błąd przy edycji danych! Spróbuj ponownie później!"
							);
						}
					}}>
					Zatwierdź
				</Button>
			</Container>
		</Container>
	);
};
