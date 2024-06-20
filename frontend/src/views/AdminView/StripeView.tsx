import { Button, Col, Container } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function StripeView() {
	const navigate = useNavigate();
	const name = localStorage.getItem("name") ?? "";
	const surname = localStorage.getItem("surname") ?? "";
	return (
		<Container fluid className='d-flex flex-row mt-2'>
			<Col className='d-flex flex-row'>
				<PersonFill size={32} className='mr-2' />
				<text className='fs-4 fw-regular ff-inter'>
					{name} {surname}
				</text>
			</Col>
			<Button
				variant='warning'
				className='border border-black rounded-3 float-right h-25 align-self-center'
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
