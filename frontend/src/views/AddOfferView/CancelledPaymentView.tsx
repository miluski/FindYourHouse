import { useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FooterView from "../../components/Footer/FooterView";
import HeaderView from "../../components/Header/HeaderView";

export default function CancelledPaymentView() {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate("/");
		}, 10000);
		return () => clearTimeout(timeoutId);
	}, []);
	return (
		<>
			<HeaderView />
			<Container className="d-flex flex-column justify-content-center align-items-center mt-5 ">
				<Col className="text-center ">
					<Image src='../../src/assets/delete.png' />

				</Col>
				<Container className="fs-1 d-flex flex-column justify-content-center align-items-center fw-bold">
					<p className="mt-4 ">Transakcja została odrzucona!</p>
				</Container>
			</Container>
			<FooterView fixedBottom />
		</>
	);
}
