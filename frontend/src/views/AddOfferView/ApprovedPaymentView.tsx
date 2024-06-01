import { useEffect, useRef, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { finalizePayment } from "./finalizePayment";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";
import { registerOfflineTransaction } from "./registerOfflineTransaction";
import { Payment } from "../../utils/types/Payment";
import { addOffer } from "./addOffer";

export default function ApprovedPaymentView() {
	const location = useLocation();
	const navigate = useNavigate();
	const lastOrderIDRef = useRef<string | null>(null);
	const [paymentStatus, setPaymentStatus] = useState<String | null>(null);
	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const orderID = params.get("token");
		setTimeout(() => {
			navigate("/flats");
		}, 3000);
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
					localStorage.removeItem("offerCredentials");
					navigate("/cancelled-payment");
				} else if (
					!(paymentObject instanceof Number) &&
					paymentObject &&
					paymentObject.status === null
				) {
					const offerObject = JSON.parse(
						localStorage.getItem("offerCredentials") ?? ""
					);
					let name = localStorage.getItem("name");
					let surname = localStorage.getItem("surname");
					name !== "null" ? name : "";
					surname !== "null" ? surname : "";
					await registerOfflineTransaction({
						status: "UNCOMPLETED",
						offerObject: offerObject,
						category: "Akceptacja Transakcji",
						client_name: name + " " + surname,
						date: new Date().toLocaleDateString("en-GB", {
							day: "2-digit",
							month: "2-digit",
							year: "numeric",
						}),
						topic: "Akceptacja Transakcji",
					});
					localStorage.removeItem("offerCredentials");
				} else {
					const offerObject = JSON.parse(
						localStorage.getItem("offerCredentials") ?? ""
					);
					await addOffer(offerObject);
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
