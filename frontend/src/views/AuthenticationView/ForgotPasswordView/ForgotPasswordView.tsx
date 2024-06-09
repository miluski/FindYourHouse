import { Form } from "react-bootstrap";
import CustomFormInput from "../../../components/CustomFormInput/CustomFormInput.tsx";
import * as formik from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import LinkButton from "../../../components/CustomButtons/LinkButton/LinkButton.tsx";

export default function ForgotPasswordView({
  changeTab,
}: {
  changeTab: Function;
}) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Pole jest wymagane")
      .email("Nieprawidłowy adres mailowy"),
  });
  return (
    <div>
      <div className=" p-3 d-flex flex-column ">
        <p className={" text-center"}>
          Wprowadź swój adres mailowy a my wyślemy link do zresetowania twojego
          hasła.
        </p>
        <Formik
          validationSchema={schema}
          onSubmit={() => console.log("xd")}
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
                isInvalid={touched.email! && !!errors.email}
                isValid={touched.email! && !errors.email}
                errorMessage={errors.email!}
              />
              <Button
                type={"submit"}
                variant={"warning"}
                className="fw-bold my-2 py-2 w-100"
              >
                Wyślij
              </Button>
            </Form>
          )}
        </Formik>
        <p className={"my-2 align-self-center"}>
          Pamiętasz hasło{" "}
          <LinkButton className={"fw-bold"} onClick={() => changeTab("login")}>
            Zaloguj się!
          </LinkButton>
        </p>
      </div>
    </div>
  );
}
