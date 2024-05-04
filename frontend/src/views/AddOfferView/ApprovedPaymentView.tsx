import { useEffect, useRef, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { finalizePayment } from "./finalizePayment";
import { registerOfflineTransaction } from "./registerOfflineTransaction";

export default function ApprovedPaymentView() {
	const location = useLocation();
	const lastOrderIDRef = useRef<string | null>(null);
	const [paymentStatus, setPaymentStatus] = useState<String | null>(null);
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const orderID = params.get("token");
		if (orderID && orderID !== lastOrderIDRef.current) {
			(async () => {
				lastOrderIDRef.current = orderID;
				const paymentObject = await finalizePayment(orderID);
				setPaymentStatus(paymentObject.status);
				paymentStatus !== "COMPLETED"
					? await registerOfflineTransaction(paymentObject)
					: null;
			})();
		}
	}, [location]);
	return (
		<Container>
			<Col>
				{paymentStatus === "COMPLETED" ? (
					<>
						<Image src='https://media.istockphoto.com/id/1305827140/pl/wektor/ikona-znacznika-zaznaczenia-ikona-znacznika-tik.jpg?s=1024x1024&w=is&k=20&c=gyZjWvJoeLeSqe5MriSP9U8UhbAR_-xu70dUcgrId5w=' />
						<text>Transakcja została pomyślnie zrealizowana!</text>
					</>
				) : paymentStatus !== null ? (
					<text>
						Płatność została odrzucona i zarejestrowana jako płatność offline.
					</text>
				) : (
					<></>
				)}
			</Col>
		</Container>
	);
}
