import { axiosInstance } from "../../utils/axiosInstance";

export const uploadFile = async (file: File) => {
	const formData = new FormData();
	formData.append("file", file);
	const response = await axiosInstance.post("/api/offers/upload", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response.data.fileDownloadUri;
};
