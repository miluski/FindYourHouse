import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { EmailInput } from "../../components/EmailInput";
import { PasswordInput } from "../../components/PasswordInput";
import { handleRegisterButtonClick } from "./handleRegisterButtonClick";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../utils/User/UserState";
import { CHANGE_IS_DATA_VALID } from "../../utils/User/UserActionTypes";
import { NameInput } from "./NameInput";
import { SurnameInput } from "./SurnameInput";
import { PhoneNumberInput } from "./PhoneNumberInput";
import { RegisterWithGoogleButton } from "./RegisterWithGoogleButton";
import { UsageTerms } from "./UsageTerms";
import "./styles/RegisterForm.css";
import React, { useState } from "react";

export default function RegisterForm() {
  const [userExists, setUserExists] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state);
  return (
    <>
      <Form
        className={
          "d-flex flex-column border-bottom border-secondary-subtle p-2 p-lg-4 pb-lg-3"
        }
        noValidate
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          form.checkValidity() === false
            ? (event.stopPropagation(),
              dispatch({ type: CHANGE_IS_DATA_VALID, newIsDataValid: true }))
            : await handleRegisterButtonClick(dispatch, user, setUserExists);
        }}
        validated={user.isDataValid}
      >
        <NameInput />
        <SurnameInput />
        <EmailInput />
        <PasswordInput />
        <PhoneNumberInput />
        <Button variant={"warning"} className="fw-bold mb-2 mt-2" type="submit">
          Zarejestruj się
        </Button>
        {userExists && (
          <p className="text-danger text-center">
            Użytkownik o podanym adresie email już istnieje.
          </p>
        )}
        <UsageTerms />
      </Form>
      <RegisterWithGoogleButton />
    </>
  );
}
