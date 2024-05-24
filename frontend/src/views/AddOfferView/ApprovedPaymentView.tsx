import { useEffect, useRef, useState } from "react";
import { Container, Col, Image } from "react-bootstrap";
import { useLocation, useNavigation } from "react-router-dom";
import { finalizePayment } from "./finalizePayment";
import { registerOfflineTransaction } from "./registerOfflineTransaction";
import { sendRefreshTokensRequest } from "../../utils/sendRefreshTokensRequest";
import HeaderView from "../../components/Header/HeaderView";
import FooterView from "../../components/Footer/FooterView";

export default function ApprovedPaymentView() {
	const location = useLocation();
	//const navigate = useNavigation();
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
				const paymentObject = await finalizePayment(orderID);
				if (typeof paymentObject === "number") {
					paymentObject === 403
						? (await sendRefreshTokensRequest(), await finalizePayment(orderID))
						: paymentObject === 401 || 500
							? await registerOfflineTransaction({
								status: "UNCOMPLETED",
								offerObject: offerObject,
								category: "Akceptacja Transakcji",
								client_name: localStorage.getItem("email") ?? "",
								date: new Date().toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric",
								}),
								topic: "Akceptacja Transakcji",
							})
							: null;
				} else {
					setPaymentStatus(paymentObject.status || null);
					paymentStatus !== "COMPLETED" && paymentStatus !== "DENIED"
						? await registerOfflineTransaction({
							status: "UNCOMPLETED",
							offerObject: offerObject,
							category: "Akceptacja Transakcji",
							client_name: localStorage.getItem("email") ?? "",
							date: new Date().toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "2-digit",
								year: "numeric",
							}),
							topic: "Akceptacja Transakcji",
						})
						: paymentStatus === "DENIED" ? null : null;
				}
			})();
		}
	}, [location]);
	return (
		<>
			<HeaderView />
			<Container className="d-flex flex-column justify-content-center align-items-center mt-5 ">
				<Col className="text-center ">
					{paymentStatus === "COMPLETED" ? (
						<>

							<Image src='../../src/assets/accept.png' />
							<Container className="fs-1 d-flex flex-column justify-content-center align-items-center fw-bold" >
								<p className="mt-4 ">Transakcja została pomyślnie zrealizowana!</p>
							</Container>
						</>
					) : paymentStatus !== null ? (
						<a className="mt-4 ">
							Płatność została odrzucona i zarejestrowana jako płatność offline.
						</a>
					) : (
						<></>
					)}
				</Col>
			</Container>
			<FooterView fixedBottom/>
		</>
	);

}
