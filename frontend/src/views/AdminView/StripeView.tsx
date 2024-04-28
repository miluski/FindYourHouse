import { Button, Col, Container } from "react-bootstrap";
import { PersonFill } from "react-bootstrap-icons";

export default function StripeView() {
	return (
		<Container fluid className='d-flex flex-row mt-2'>
			<Col className='d-flex flex-row'>
				<PersonFill size={32} className='mr-2' />
				<text className='fs-4 fw-regular ff-inter'>Jan Kowalski</text>
			</Col>
			<Button
				variant='warning'
				className='border border-black rounded-3 float-right'>
				Wyloguj się
			</Button>
		</Container>
	);
}
