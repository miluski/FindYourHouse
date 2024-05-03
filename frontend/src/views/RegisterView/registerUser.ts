import { User } from "../../utils/types/User";
import { getIsUserExists } from "./getIsUserExists";

export async function registerUser(userObject: User, setUserExists: Function) {
  try {
    const isUserExists = await getIsUserExists(userObject.email);
    if (isUserExists) {
      setUserExists(true);
    } else {
      const response = await fetch(
        "http://localhost:8080/api/users/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObject),
        },
      );
      response.ok
        ? (alert("Pomyślnie zarejestrowano!"), (window.location.href = "/"))
        : alert("Błąd!");
    }
  } catch (error) {
    console.log(error);
  }
}
