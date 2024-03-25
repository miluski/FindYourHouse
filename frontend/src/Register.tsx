import React, { useState } from "react";
import { User } from "./User";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <label>
        Imię:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Nazwisko:
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Numer telefonu:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Hasło:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button
        type="button"
        onClick={async () => {
          await registerUser({
            name: name,
            surname: surname,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
          });
        }}
      >
        Zarejestruj się
      </button>
    </div>
  );
};

async function registerUser(userObject: User) {
  try {
    const isUserExists = await getIsUserExists(userObject.email);
    if (isUserExists) {
      alert("Taki użytkownik już istnieje!");
    } else {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObject),
      });
      response.ok ? alert("Pomyślnie zarejestrowano!") : alert("Błąd!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function getIsUserExists(email: string) {
    try {
        const response = await fetch(`http://localhost:8080/users/email/${email}`);
        try {
            const data = await response.json();
            return data !== null;
        } catch (error) {
            console.log('Response could not be converted to JSON');
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
