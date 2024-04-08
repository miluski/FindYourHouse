import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../utils/utils.css";
import { User } from "../../User";

function RegisterForm() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {}, [validated]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    event.preventDefault();

    try {
      const isUserExists = await getIsUserExists(email);
      if (isUserExists) {
        setUserExists(true);
      } else {
        await registerUser(
          {
            firstName: name,
            lastName: surname,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
          },
          setUserExists,
        );
        setValidated(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }

    setValidated(true);
  };

  return (
    <>
      <Form
        className={
          "d-flex flex-column border-bottom border-secondary-subtle p-2 p-lg-4 pb-lg-3"
        }
        noValidate
        onSubmit={async (event) => {
          handleSubmit(event);
        }}
        validated={validated}
      >
        <Form.Group className="mb-3 mt-1">
          <Form.Label className={"fw-bold mb-1"}>Imię</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Wprowadź swoje imię"
            className={"bg-light py-2 border-secondary-subtle"}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź swoje imię.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label className={"fw-bold mb-1"}>Nazwisko</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Wprowadź swoje nazwisko"
            className={"bg-light py-2 border-secondary-subtle"}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź swoje nazwisko.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label className={"fw-bold mb-1"}>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Wprowadź adres mailowy"
            className={"bg-light py-2 border-secondary-subtle"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź istniejący adres mailowy.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="validationCustom02">
          <Form.Label className={"fw-bold mb-1"}>Hasło</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Wprowadź hasło"
            className={"bg-light py-2 border-secondary-subtle"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź poprawne hasło.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 ">
          <Form.Label className={"fw-bold mb-1"}>Numer telefonu</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Wprowadź numer telefonu"
            className={"bg-light py-2 border-secondary-subtle"}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź poprawny numer telefonu.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="warning" className="fw-bold mb-2 mt-2" type="submit">
          Zarejestruj się
        </Button>
        {userExists && (
          <p className="text-danger text-center">
            Użytkownik o podanym adresie email już istnieje.
          </p>
        )}
        <p className="mt-3 mb-2 mb-0 align-self-center fs-7 ">
          Rejestrując się akceptujesz{" "}
          <a
            className="text-black link-offset-3 text-decoration-underline link-underline-warning link-underline-opacity-0 link-underline-opacity-100-hover fw-bold"
            href=""
          >
            warunki użytkowania
          </a>
        </p>
      </Form>
      <div className="pb-4 pt-2 px-2 px-lg-4">
        <h6 className="fw-normal text-center pt-3 border-secondary-subtle">
          Lub zarejestruj się za pomocą:
        </h6>
        <Button
          href="#"
          variant="outline-dark"
          className="align-self-center w-100 mt-3 "
        >
          <i className="bi bi-google text-lg-start me-2 "></i>
          Zarejestruj się poprzez Google
        </Button>
      </div>
    </>
  );
}

async function registerUser(userObject: User, setUserExists) {
  try {
    const isUserExists = await getIsUserExists(userObject.email);
    if (isUserExists) {
      setUserExists(true);
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
      console.log("Response could not be converted to JSON");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default RegisterForm;
