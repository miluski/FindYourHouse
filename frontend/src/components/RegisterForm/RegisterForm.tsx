import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../utils/utils.css";
import { User } from "../../User";

function RegisterForm() {
	const [validated, setValidated] = useState(false);
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {}, [validated]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		const form = event.currentTarget;
		if (!form.checkValidity()) {
			event.stopPropagation();
		} else {
			(async () => {
				await registerUser({
					firstName: name,
					lastName: surname,
					phoneNumber: phoneNumber,
					email: email,
					password: password,
				});
				setValidated(false);
			})();
		}
		event.preventDefault();
	};

	return (
		<>
			<Form
				className={
					"d-flex flex-column border-bottom border-secondary-subtle p-2 p-lg-4 pb-lg-3"
				}
				noValidate
				onSubmit={async (event) => {
					handleSubmit(event);
				}}
				validated={validated}>
				<Form.Group className='mb-3 mt-1'>
					<Form.Label className={"fw-bold mb-1"}>Imię</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Wprowadź swoje imię'
						className={"bg-light py-2 border-secondary-subtle"}
						onChange={(e) => setName(e.target.value)}
					/>
					<Form.Control.Feedback type='invalid'>
						Wprowadź swoje imię.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3 '>
					<Form.Label className={"fw-bold mb-1"}>Nazwisko</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Wprowadź swoje nazwisko'
						className={"bg-light py-2 border-secondary-subtle"}
						onChange={(e) => setSurname(e.target.value)}
					/>
					<Form.Control.Feedback type='invalid'>
						Wprowadź swoje nazwisko.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3 '>
					<Form.Label className={"fw-bold mb-1"}>Email</Form.Label>
					<Form.Control
						required
						type='email'
						placeholder='Wprowadź adres mailowy'
						className={"bg-light py-2 border-secondary-subtle"}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Form.Control.Feedback type='invalid'>
						Wprowadź istniejący adres mailowy.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3 ' controlId='validationCustom02'>
					<Form.Label className={"fw-bold mb-1"}>Hasło</Form.Label>
					<Form.Control
						required
						type='password'
						placeholder='Wprowadź hasło'
						className={"bg-light py-2 border-secondary-subtle"}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Form.Control.Feedback type='invalid'>
						Wprowadź poprawne hasło.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group className='mb-3 '>
					<Form.Label className={"fw-bold mb-1"}>Numer telefonu</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Wprowadź numer telefonu'
						className={"bg-light py-2 border-secondary-subtle"}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
					<Form.Control.Feedback type='invalid'>
						Wprowadź poprawny numer telefonu.
					</Form.Control.Feedback>
				</Form.Group>
				<Button className='fw-bold mb-2 mt-2' type='submit'>
					Zarejestruj się
				</Button>
				<p className='mt-3 mb-2 mb-0 align-self-center fs-7 '>
					Rejestrując się akceptujesz{" "}
					<a
						className='text-primary link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover fw-normal'
						href=''>
						warunki użytkowania
					</a>
				</p>
			</Form>
			<div className='pb-4 pt-2 px-2 px-lg-4'>
				<h6 className='fw-normal text-center pt-3 border-secondary-subtle'>
					Lub zarejestruj się za pomocą:
				</h6>
				<Button
					href='#'
					variant='outline-dark'
					className='align-self-center w-100 mt-3 '>
					<i className='bi bi-google text-lg-start me-2 '></i>
					Zarejestruj się poprzez Google
				</Button>
			</div>
		</>
	);
}

async function registerUser(userObject: User) {
	try {
		const isUserExists = await getIsUserExists(userObject.email);
		if (isUserExists) {
			alert("Taki użytkownik już istnieje!");
		} else {
			const response = await fetch(
				"http://localhost:8080/api/users/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userObject),
				}
			);
			response.ok ? alert("Pomyślnie zarejestrowano!") : alert("Błąd!");
		}
	} catch (error) {
		console.log(error);
	}
}

async function getIsUserExists(email: string) {
	const response = await fetch(
		`http://localhost:8080/api/users/email/${email}`
	);
	return await response.json();
}

export default RegisterForm;
