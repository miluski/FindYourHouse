import { axiosInstance } from "../../utils/axiosInstance";

export async function deleteUserAccount(): Promise<Boolean> {
    try {
        const userEmail = localStorage.getItem("email") ?? "";
        const response = await axiosInstance.delete(`/api/users/delete/${userEmail}`);
        return response.status === 200;
    } catch(error) {
        console.log(error);
        return false;
    }
}