import { axiosInstance } from "../../utils/axiosInstance";

export async function handleAcceptTransaction(transactionId: number): Promise<boolean> {
    try {
        const response = await axiosInstance.post(`/api/tickets/accept/${transactionId}`);
        return response.status === 200;
    } catch (error) {
        console.log(error);
        return false;
    }
}