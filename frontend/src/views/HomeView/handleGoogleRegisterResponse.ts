export function handleGoogleRegisterResponse(response: boolean): void {
	response === true ? alert("Pomyślnie zarejestrowano!") : alert("Błąd!");
}