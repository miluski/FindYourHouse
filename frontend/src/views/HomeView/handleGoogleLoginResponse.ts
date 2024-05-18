export function handleGoogleLoginResponse(data: any): void {
	data.accessToken !== null && data.refreshToken !== null
		? (alert("Zalogowano pomyślnie!"),
		  localStorage.setItem("token", data.accessToken.token as string),
		  localStorage.setItem(
				"refreshToken",
				data.refreshToken.token as string
		  ),
		  (window.location.href = "/"))
		: alert("Błąd logowania!");
}
