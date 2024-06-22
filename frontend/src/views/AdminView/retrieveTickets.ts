import { axiosInstance } from "../../utils/axiosInstance";

export async function retrieveTickets() {
    try {
        const response = await axiosInstance.get("/api/tickets/");
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}