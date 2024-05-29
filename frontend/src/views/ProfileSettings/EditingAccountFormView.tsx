import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

export const EditingAccountFormView = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		fetchUserCredentials();
	}, []);

	const fetchUserCredentials = () => {};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (validateFormData()) {
			sendEditedData();
		}
	};

	const validateFormData = (): boolean => {
		return true;
	};

	const sendEditedData = () => {};

	return (
		<Container
			onSubmit={handleFormSubmit}
			className='border border-black rounded mb-3'>
			<Form.Group controlId='firstName' className='mt-4 '>
				<Form.Label>Imię:</Form.Label>
				<Form.Control
					type='text'
					placeholder={firstName}
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId='lastName'>
				<Form.Label>Nazwisko:</Form.Label>
				<Form.Control
					type='text'
					placeholder={lastName}
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId='phoneNumber'>
				<Form.Label>Numer telefonu:</Form.Label>
				<Form.Control
					type='text'
					placeholder={phoneNumber}
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
			</Form.Group>
			<Form.Group controlId='email'>
				<Form.Label>Email:</Form.Label>
				<Form.Control
					type='email'
					placeholder={email}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>
			<Container className='d-flex mt-4 mb-4 justify-content-center align-items-center'>
				<Button className='btn btn-warning '>Zatwierdź</Button>
			</Container>
		</Container>
	);
};
