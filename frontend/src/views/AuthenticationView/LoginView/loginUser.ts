import { Token } from "./Token";

export async function loginUser(
  email: string,
  password: string,
  setIsUserInvalid: Function,
): Promise<Token | null> {
  try {
    const response = await fetch("http://localhost:8080/api/users/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      return await response.json();
    } else setIsUserInvalid(true);
  } catch (error) {
    console.log(error);
  }
  return null;
}
