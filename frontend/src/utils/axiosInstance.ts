import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

export const axiosInstance = axios.create({
	baseURL: "/server",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use(
	(axiosRequestConfig: InternalAxiosRequestConfig<any>) => {
		console.log(axiosRequestConfig.url);
		const token = localStorage.getItem("token");
		token
			? (axiosRequestConfig.headers.Authorization = `Bearer ${token}`)
			: null;
		return axiosRequestConfig;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(axiosResponse: AxiosResponse<any>) => {
		return axiosResponse;
	},
	async (error: AxiosError) => {
		const { config, response } = error as AxiosError<any>;
		if (response && response.status === 401) {
			const refreshToken = localStorage.getItem("refreshToken");
			const { data } = await axios.post(
				"/server/api/tokens/auth/refresh",
				refreshToken
			);
			if (data) {
				localStorage.setItem("token", data.accessToken.token);
				localStorage.setItem("refreshToken", data.refreshToken.token);
				return config !== undefined
					? new Promise((resolve: Function) => {
							config.headers["Authorization"] = data.accessToken.token;
							resolve(axiosInstance(config));
					  })
					: Promise.reject(error);
			} else return Promise.reject(error);
		} else return Promise.reject(error);
	}
);
