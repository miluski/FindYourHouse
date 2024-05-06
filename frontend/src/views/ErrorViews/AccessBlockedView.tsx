import { Col, Container } from "react-bootstrap";

export default function AccessBlockedView() {
	return (
		<Container fluid>
			<Col fluid className='d-flex flex-column align-items-center justify-content-center vh-75'>
				<h1>Error 401</h1>
				<p>Access to page is blocked!</p>
			</Col>
		</Container>
	);
}
