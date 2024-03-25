import React, { useState } from 'react';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <button type="button" onClick={async ()=>{
                    await loginUser(email, password);
                }}>Zaloguj się</button>
        </div>
    );
};

async function loginUser(email: string, password: string) {
    try {
      const response = await fetch("http://localhost:8080/users");
      const data = await response.json();
      let isUserExists = false;
      for (const user in data) {
        data[user].email === email && data[user].password === password
          ? (alert("Zalogowano pomyślnie"), (isUserExists = true))
          : null;
      }
      isUserExists ? null : alert("Niepoprawne dane logowania");
    } catch (error) {
      console.log(error);
    }
  }