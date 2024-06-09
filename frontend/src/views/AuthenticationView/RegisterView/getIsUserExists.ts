import { axiosInstance } from "../../../utils/axiosInstance";

export async function getIsUserExists(email: string) {
  const response = await axiosInstance.get(
    `/api/users/email/${email}`,
  );
  return response.data;
}
