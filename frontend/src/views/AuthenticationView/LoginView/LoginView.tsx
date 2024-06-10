import { Form } from "react-bootstrap";
import CustomFormInput from "../../../components/CustomFormInput/CustomFormInput.tsx";
import { handleLoginButtonClick } from "./handleLoginButtonClick.ts";
import * as formik from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import LinkButton from "../../../components/CustomButtons/LinkButton/LinkButton.tsx";
import { googleUrlParams } from "../../../google.ts";
import { useState } from "react";
import { UserState } from "../../../utils/types/State";

export default function LoginView({ changeTab }: { changeTab: Function }) {
  const { Formik } = formik;
  const [isUserInvalid, setIsUserInvalid] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Pole jest wymagane")
      .email("Nieprawidłowy adres mailowy"),
    password: yup.string().required("Pole jest wymagane"),
  });
  return (
    <div>
      <div className="border-bottom border-secondary-subtle p-3 d-flex flex-column ">
        <Formik
          validationSchema={schema}
          onSubmit={async (values) =>
            await handleLoginButtonClick(values as UserState, setIsUserInvalid)
          }
          validateOnChange={false}
          validateOnBlur={true}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            errors,
            touched,
          }) => (
            <Form noValidate onSubmit={handleSubmit} autoComplete={"off"}>
              <CustomFormInput
                label="Email:"
                type="email"
                placeholder="Twój adres email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={(touched.email! && !!errors.email) || isUserInvalid}
                isValid={touched.email! && !errors.email && !isUserInvalid}
                errorMessage={errors.email!}
                id={"email"}
              />
              <CustomFormInput
                label="Hasło:"
                type="password"
                placeholder="Twoje hasło"
                name="password"
                id={"password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={
                  (touched.password! && !!errors.password) || isUserInvalid
                }
                isValid={
                  touched.password! && !errors.password && !isUserInvalid
                }
                errorMessage={errors.password!}
              />
              <Button
                type={"submit"}
                variant={"warning"}
                className="fw-bold my-2 py-2 w-100"
              >
                Zaloguj się
              </Button>
            </Form>
          )}
        </Formik>
        <LinkButton
          className={"my-2 align-self-center"}
          onClick={() => changeTab("forgotPassword")}
        >
          Nie pamiętasz hasła?
        </LinkButton>
        {isUserInvalid && (
          <p className="text-danger text-center my-2">
            Nieprawidłowy email lub hasło. Proszę spróbować jeszcze raz lub
            kliknąć "Nie pamiętasz hasła?".
          </p>
        )}
      </div>
      <div className={"p-3"}>
        <h6 className="fw-normal text-center  border-secondary-subtle">
          Lub zaloguj się za pomocą:
        </h6>
        <Button
          href="#"
          variant="outline-dark"
          className="align-self-center w-100 mt-3 "
          onClick={() => {
            window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${googleUrlParams.toString()}`;
          }}
        >
          <i className="bi bi-google  me-3 "></i>
          Kontynuuj z Google
        </Button>
      </div>
    </div>
  );
}
