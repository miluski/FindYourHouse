import { useEffect } from "react";
import { Col, Container, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CancelledPaymentView() {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate("/");
		}, 2000);
		return () => clearTimeout(timeoutId);
	}, []);
	return (
		<Container>
			<Col>
				<Image src='https://img.freepik.com/premium-wektory/usun-ikone-bez-znaku-zamknij-wektor-symbolu-anuluj-zle-i-odrzuc-ilustracje_790965-579.jpg?w=826' />
				<text>Transakcja została anulowana!</text>
			</Col>
		</Container>
	);
}
