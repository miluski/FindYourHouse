import { UserData } from "../../utils/types/UserData";

export function handleGoogleLoginResponse(data: UserData): void {
	data.accessToken !== null && data.refreshToken !== null
		? (alert("Zalogowano pomyślnie!"),
		  localStorage.setItem("token", data.accessToken?.token ?? ""),
		  localStorage.setItem("refreshToken", data.refreshToken?.token ?? ""),
		  localStorage.setItem("name", data.name),
		  localStorage.setItem("surname", data.surname),
		  localStorage.setItem("email", data.email),
		  localStorage.setItem("phoneNumber", data.phoneNumber),
		  localStorage.setItem("role", data.role ?? ""),
		  (window.location.href = "/"))
		: alert("Błąd logowania!");
}
