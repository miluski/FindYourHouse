import { Col, Container } from "react-bootstrap";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";

export default function NotFoundView() {
	return (
		<>
			<HeaderView />
			<Container fluid>
				<Col
					fluid
					className='d-flex flex-column align-items-center justify-content-center vh-75'>
					<h1>404</h1>
					<p>Strony nie znaleziono</p>
				</Col>
			</Container>
			<FooterView fixedBottom />
		</>
	);
}
