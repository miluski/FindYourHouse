import { User } from "../../utils/User/User";
import { getIsUserExists } from "./getIsUserExists";

export async function registerUser(userObject: User) {
	try {
		const isUserExists = await getIsUserExists(userObject.email);
		if (isUserExists) {
			alert("Taki użytkownik już istnieje!");
		} else {
			const response = await fetch(
				"http://localhost:8080/api/users/auth/register",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userObject),
				}
			);
			response.ok ? alert("Pomyślnie zarejestrowano!") : alert("Błąd!");
		}
	} catch (error) {
		console.log(error);
	}
}
