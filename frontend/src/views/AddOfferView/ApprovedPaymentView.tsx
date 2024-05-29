import { useEffect, useRef, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { finalizePayment } from "./finalizePayment";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";
import { Payment } from "./Payment";
import { registerOfflineTransaction } from "./registerOfflineTransaction";

export default function ApprovedPaymentView() {
	const location = useLocation();
	const navigate = useNavigate();
	const offerObject = {
		offerType: "",
		propertyType: "",
		title: "",
		price: 0,
		rent: 0,
		caution: 0,
		area: 0,
		roomCount: 0,
		photos: [],
		city: "",
		houseNumber: 0,
		street: "",
		apartmentNumber: 0,
	};
	const lastOrderIDRef = useRef<string | null>(null);
	const [paymentStatus, setPaymentStatus] = useState<String | null>(null);
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const orderID = params.get("token");
		if (orderID && orderID !== lastOrderIDRef.current) {
			(async () => {
				lastOrderIDRef.current = orderID;
				const paymentObject: Number | Payment = await finalizePayment(orderID);
				!(paymentObject instanceof Number) && paymentObject
					? setPaymentStatus(paymentObject.status || null)
					: null;
				if (
					!(paymentObject instanceof Number) &&
					paymentObject &&
					paymentObject.status === "DENIED"
				) {
					navigate("/cancelled-payment");
				} else if (
					!(paymentObject instanceof Number) &&
					paymentObject &&
					paymentObject.status === null
				) {
					registerOfflineTransaction(paymentObject);
				}
			})();
		}
	}, [location]);
	return (
		<>
			<HeaderView />
			<Container className='d-flex flex-column justify-content-center align-items-center mt-5 '>
				<Col className='text-center '>
					{paymentStatus === "COMPLETED" ? (
						<>
							<Image src='../../src/assets/accept.png' />
							<Container className='fs-1 d-flex flex-column justify-content-center align-items-center fw-bold'>
								<p className='mt-4 '>
									Transakcja została pomyślnie zrealizowana!
								</p>
							</Container>
						</>
					) : paymentStatus === null ? (
						<a className='mt-4 '>
							Płatność została odrzucona i zarejestrowana jako płatność offline.
						</a>
					) : (
						<></>
					)}
				</Col>
			</Container>
			<FooterView fixedBottom />
		</>
	);
}
