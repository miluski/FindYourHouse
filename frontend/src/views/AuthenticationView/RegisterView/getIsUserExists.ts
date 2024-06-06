import { axiosInstance } from "../../../utils/axiosInstance";

export async function getIsUserExists(email: string) {
  const response = await axiosInstance.get(
    `/server/api/users/email/${email}`,
  );
  return response.data;
}
