import { NavigateFunction } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { OfferState } from "../../utils/types/State";
import { getPaymentGateLink } from "./getPaymentGateLink";

export async function startCheckout(
	navigate: NavigateFunction,
	offerObject: OfferState
): Promise<void> {
	const paymentGateLink = await getPaymentGateLink();
	offerObject.pricePerQuadraMeter = Math.round(
		Number(offerObject.price) / Number(offerObject.area)
	);
	localStorage.setItem("offerCredentials", JSON.stringify(offerObject));
	if (paymentGateLink !== null) {
		try {
			const response = await axiosInstance.post(
				"/api/payment/check-gateway",
				paymentGateLink,
				{ headers: { "Content-Type": "plain/text" } }
			);
			response.status === 200 ? (window.location.href = paymentGateLink) : null;
		} catch (error) {
			localStorage.setItem("operation", "checkoutFailed");
			navigate("/payment");
		}
	}
}
