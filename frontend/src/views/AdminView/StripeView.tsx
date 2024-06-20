import { Button, Col, Container } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/FindMyHouse_Logo.svg";

export default function StripeView() {
	const navigate = useNavigate();
	const name = localStorage.getItem("name") ?? "";
	const surname = localStorage.getItem("surname") ?? "";
	return (
		<Container
			fluid='true'
			className='d-flex flex-row mt-2'
			data-testid='stripeView'>
			<Col className='d-flex flex-row'>
				<img
					src={Logo}
					alt='Find My House Logo'
					width={120}
					className='mx-5 cursor-pointer'
					onClick={() => (window.location.href = "/")}
				/>
			</Col>
			<Col className='d-flex flex-row my-2'>
				{" "}
				<PersonFill size={32} className='mr-2' />
				<text className='fs-4 fw-regular ff-inter'>
					{name} {surname}
				</text>
			</Col>
			<Button
				variant='warning'
				className='border border-black rounded-3 float-right h-25 align-self-center mx-5'
				onClick={() => {
					localStorage.removeItem("token");
					localStorage.removeItem("refreshToken");
					localStorage.removeItem("name");
					localStorage.removeItem("surname");
					localStorage.removeItem("email");
					localStorage.removeItem("phoneNumber");
					navigate("/");
				}}>
				Wyloguj się
			</Button>
		</Container>
	);
}
