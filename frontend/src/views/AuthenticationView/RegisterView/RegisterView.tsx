import { Form } from "react-bootstrap";
import CustomFormInput from "../../../components/CustomFormInput/CustomFormInput.tsx";
import { handleRegisterButtonClick } from "./handleRegisterButtonClick.ts";
import * as formik from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import LinkButton from "../../../components/CustomButtons/LinkButton/LinkButton.tsx";
import { googleUrlParams } from "../../../google.ts";
import { useState } from "react";
import { getIsUserExists } from "./getIsUserExists.ts";
import { UserState } from "../../../utils/types/State";

export default function RegisterView() {
  const { Formik } = formik;
  const [userExists, setUserExists] = useState(false);

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Pole jest wymagane")
      .max(255, "Przekroczono dozwoloną liczbę znaków"),
    lastName: yup
      .string()
      .required("Pole jest wymagane")
      .max(255, "Przekroczono dozwoloną liczbę znaków"),
    email: yup
      .string()
      .required("Pole jest wymagane")
      .email("Nieprawidłowy adres mailowy")
      .max(255, "Przekroczono dozwoloną liczbę znaków"),
    password: yup
      .string()
      .required("Pole jest wymagane")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Hasło musi zawierać:\n" +
          "- Co najmniej 8 znaków\n" +
          "- Przynajmniej jedną dużą literę\n" +
          "- Przynajmniej jedną małą literę\n" +
          "- Przynajmniej jedną cyfrę\n" +
          "- Przynajmniej jeden znak specjalny",
      )
      .max(255, "Przekroczono dozwoloną liczbę znaków"),
    phoneNumber: yup
      .string()
      .required("Pole jest wymagane")
      .matches(/^[0-9]{9}$/, "Nieprawidłowy numer telefonu"),
  });
  return (
    <div>
      <div className="border-bottom border-secondary-subtle p-3 d-flex flex-column">
        <Formik
          validationSchema={schema}
          onSubmit={async (values) =>
            await handleRegisterButtonClick(values as unknown as UserState)
          }
          validateOnMount={true}
          validateOnChange={false}
          validateOnBlur={true}
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            errors,
            touched,
            dirty,
            isValid,
          }) => (
            <Form noValidate onSubmit={handleSubmit} autoComplete={"off"}>
              <CustomFormInput
                label="Imię:"
                type="text"
                placeholder="Wprowadź swoję imię"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.firstName! && !!errors.firstName}
                isValid={touched.firstName! && !errors.firstName}
                errorMessage={errors.firstName!}
              />
              <CustomFormInput
                label="Nazwisko:"
                type="text"
                placeholder="Wprowadź swoje nazwisko"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.lastName! && !!errors.lastName}
                isValid={touched.lastName! && !errors.lastName}
                errorMessage={errors.lastName!}
              />
              <CustomFormInput
                label="Email:"
                type="email"
                placeholder="Twój adres email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={async (e) => {
                  handleBlur(e);
                  setUserExists(await getIsUserExists(values.email));
                }}
                isInvalid={(touched.email! && !!errors.email) || userExists}
                isValid={touched.email! && !errors.email && !userExists}
                errorMessage={errors.email!}
              />
              <CustomFormInput
                label="Hasło:"
                type="password"
                placeholder="Twoje hasło"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.password! && !!errors.password}
                isValid={touched.password! && !errors.password}
                errorMessage={errors.password!}
              />
              <CustomFormInput
                label="Numer telefonu:"
                type="number"
                placeholder="Wprowadź numer telefonu"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.phoneNumber! && !!errors.phoneNumber}
                isValid={touched.phoneNumber! && !errors.phoneNumber}
                errorMessage={errors.phoneNumber!}
              />
              <Button
                disabled={!(isValid && dirty) || userExists}
                type={"submit"}
                variant={"warning"}
                className="fw-bold my-2 py-2 w-100"
              >
                Zarejestruj się
              </Button>
            </Form>
          )}
        </Formik>
        <p className={"my-2 align-self-center fs-7"}>
          Rejestrując się akceptujesz{" "}
          <LinkButton className={"fw-bold"}>warunki użytkowania </LinkButton>
        </p>
        {userExists && (
          <p className="text-danger text-center">
            Użytkownik o podanym adresie email już istnieje.
          </p>
        )}
      </div>
      <div className={"p-3"}>
        <h6 className="fw-normal text-center  border-secondary-subtle">
          Lub zarejestruj się za pomocą:
        </h6>
        <Button
          href="#"
          variant="outline-dark"
          className="align-self-center w-100 mt-3 "
          onClick={() => {
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${googleUrlParams.toString()}`;
          }}
        >
          <i className="bi bi-google text-lg-start me-3 "></i>
          Kontynuuj z Google
        </Button>
      </div>
    </div>
  );
}
