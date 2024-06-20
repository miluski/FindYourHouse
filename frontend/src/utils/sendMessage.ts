import { axiosInstance } from "./axiosInstance";
import { Message } from "./types/Message";


export async function sendMessage(message: Message): Promise<Boolean> {
    try {
        const response = await axiosInstance.post("/api/messages/create", message);
        return response.status === 200;
    } catch (error) {
        console.log(error);
        return false;
    }
}
