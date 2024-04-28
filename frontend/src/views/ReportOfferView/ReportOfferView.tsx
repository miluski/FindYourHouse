import React, { useState } from "react";
import "./styles/ReportOfferViewStyles.css";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container } from "react-bootstrap";

function ReportOfferView() {
	const [email, setEmail] = useState("");
	const [reason, setReason] = useState("");
	const [emailError, setEmailError] = useState("");
	const [reasonError, setReasonError] = useState("");

	const handleEmailChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setEmail(e.target.value);
		setEmailError("");
	};

	const handleReasonChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setReason(e.target.value);
		setReasonError("");
	};

	const handleSubmit = () => {
		if (!validateEmail(email)) {
			setEmailError("Podaj poprawny adres email");
			return;
		}

		if (!validateReportReason(reason)) {
			setReasonError("Podaj powód zgłoszenia");
			return;
		}

		const reportObject = {
			email: email,
			reportReason: reason,
			offerId: "id-oferty",
		};

		sendReport(reportObject);
	};

	const validateEmail = (email: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return (
			typeof email === "string" &&
			email.length > 0 &&
			regex.test(email.toLowerCase())
		);
	};

	const validateReportReason = (reportReason: string | any[]) => {
		return typeof reportReason === "string" && reportReason.length > 0;
	};

	const sendReport = (reportObject: {
		email: any;
		reportReason: any;
		offerId: any;
	}) => {
		const { email, reportReason, offerId } = reportObject;
		fetch(`offers/${offerId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				reportReason: reportReason,
			}),
		})
			.then((response) => {
				if (response.ok) {
					console.log("Raport został pomyślnie wysłany");
				} else {
					console.error("Błąd podczas wysyłania raportu");
				}
			})
			.catch((error) => {
				console.error("Błąd podczas wysyłania raportu:", error);
			});
	};

	return (
		<>
			<HeaderView />
			<div className='mainReportView m-5'>
				<div>
					<h5>Znalazłeś fałszywą ofertę?</h5>
				</div>
				<div>
					Zgłoś ją tutaj. Wprowadź poniżej swój adres email, oraz podaj powód
					naruszenia zasad.
				</div>
				<div className='emailInputDiv'>
					<div>Email:</div>
					<div>
						<input
							className='emailBox'
							type='text'
							placeholder={"example@gmail.com"}
							value={email}
							onChange={handleEmailChange}
						/>
						{emailError && <div className='errorMessage'>{emailError}</div>}
					</div>
				</div>
				<Container className='d-flex flex-column justify-content-center align-items-center'>
					<text>Powód zgłoszenia:</text>
					<Col>
						<textarea
							className='p-md-5 p-xs-3'
							placeholder={"Opisz swój powód tutaj"}
							value={reason}
							onChange={handleReasonChange}></textarea>
						{reasonError && <div className='errorMessage'>{reasonError}</div>}
					</Col>
					<Button
						variant='danger'
						className='px-5 m-2 py-1 rounded border border-black shadow-md'
						onClick={handleSubmit}>
						Zgłoś
					</Button>
				</Container>
			</div>
			<FooterView />
		</>
	);
}

export default ReportOfferView;
