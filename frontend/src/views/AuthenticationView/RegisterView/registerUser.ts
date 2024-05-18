import { User } from "../../../utils/User/User";

export async function registerUser(userObject: User) {
  try {
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
    response.ok ? (window.location.href = "/") : alert("Błąd!");
  } catch (error) {
    console.log(error);
  }
}
