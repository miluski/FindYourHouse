import { Col, Container } from "react-bootstrap";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";

export default function NotFoundView() {
	return (
		<Container fluid>
			<HeaderView />
			<Col fluid className='d-flex flex-column align-items-center justify-content-center vh-75'>
				<h1>Error 404</h1>
				<p>Page not found!</p>
			</Col>
			<FooterView />
		</Container>
	);
}
