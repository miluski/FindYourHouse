export function handleGoogleLoginResponse(
	token: string
): void {
	token !== null
		? (alert("Zalogowano pomyślnie!"),
		  localStorage.setItem("token", token as string),
		  (window.location.href = "/"))
		: alert("Błąd logowania!");
}
