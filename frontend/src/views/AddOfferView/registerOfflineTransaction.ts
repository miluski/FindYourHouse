import { axiosInstance } from "../../utils/axiosInstance";
import { Payment } from "./Payment";

export async function registerOfflineTransaction(
    payment: Payment
): Promise<number> {
    const response = await axiosInstance.post("/api/messages/admin/create", payment);
    return response.status;
}