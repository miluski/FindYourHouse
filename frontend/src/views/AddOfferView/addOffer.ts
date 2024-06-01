import { axiosInstance } from "../../utils/axiosInstance";
import { OfferState } from "../../utils/types/State";

export async function addOffer(offer: OfferState): Promise<void> {
	await axiosInstance.post("/api/offers/create", offer);
}
