import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../utils/utils.css";

function LoginForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
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
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3 mt-1">
          <Form.Label className={"fw-bold mb-1"}>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Wprowadź Adres Mailowy"
            className={"bg-light py-2 border-secondary-subtle"}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź istniejący adres mailowy.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label className={"fw-bold mb-1"}>Hasło</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Wprowadź hasło"
            className={"bg-light py-2 border-secondary-subtle"}
          />
          <Form.Control.Feedback type="invalid">
            Wprowadź poprawne hasło.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant={"warning"} className="fw-bold mb-2 mt-2" type="submit">
          Zaloguj się
        </Button>
        <a
          className={
            "align-self-center text-black mt-1 mb-1 fw-normal text-decoration-underline  link-offset-2 link-offset-3-hover link-underline-warning link-underline-opacity-0 link-underline-opacity-75-hover"
          }
          href="#"
        >
          Nie pamiętasz hasła?
        </a>
      </Form>
      <div className="pb-4 pt-2 px-2 px-lg-4">
        <h6 className="fw-normal text-center pt-3 border-secondary-subtle">
          Lub zaloguj się za pomocą:
        </h6>
        <Button
          href="#"
          variant="outline-dark"
          className="align-self-center w-100 mt-3 "
        >
          <i className="bi bi-google text-lg-start me-2 "></i>
          Zaloguj się poprzez Google
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
