import "./App.css";
import HeaderView from "./HeaderView";
import { User } from "./User";

function App() {
	return (
		<>
			<HeaderView></HeaderView>

			{(async () => {
        await registerUser({name: "test", surname: "test", email: "test", password: "test", phoneNumber: "test"})
				await loginUser("test", "test");
			})()}
		</>
	);
}

async function registerUser(userObject: User) {
  try {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });
    console.log(response.ok);
  } catch (error) {
    console.log(error);
  }
}

async function loginUser(email: string, password: string) {
	try {
		const response = await fetch("http://localhost:8080/users");
		const data = await response.json();
		for (const user in data) {
			data[user].email === email && data[user].password === password
				? console.log("Zalogowano pomyślnie")
				: null;
		}
		console.log(await response.json());
	} catch (error) {
		console.log(error);
	}
}

export default App;
