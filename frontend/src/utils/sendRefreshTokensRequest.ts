export async function sendRefreshTokensRequest() {
    const refreshToken = localStorage.getItem("refreshToken");
	const endpoint = "http://localhost:8080/api/tokens/auth/refresh";
	const response = await fetch(endpoint, {
		method: "POST",
		headers: {
			"Content-Type": "text/plain",
		},
		body: refreshToken,
	});
	const data = await response.json();
	if (data.accessToken && data.refreshToken) {
		localStorage.setItem("token", data.accessToken.token as string);
		localStorage.setItem(
			"refreshToken",
			data.refreshToken.token as string
		);
	}
}
