import { axiosInstance } from "../../utils/axiosInstance";

export async function refuseAcceptTransaction(transactionId: number): Promise<Boolean> {
    try {
        const response = await axiosInstance.delete(`/api/tickets/delete/${transactionId}`);
        return response.status === 200;
    } catch (error) {
        console.log(error);
        return false;
    }
}