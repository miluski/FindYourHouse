import { Form } from "react-bootstrap";
import styles from "./CustomFormInput.module.css";
import { ChangeEventHandler, FocusEventHandler, useState } from "react";

export default function CustomFormInput({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  isInvalid,
  isValid,
  errorMessage,
  id,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  onBlur: FocusEventHandler;
  isInvalid: boolean;
  isValid: boolean;
  errorMessage: string;
  id: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Form.Group className="mb-4">
      <Form.Label htmlFor={id} className=" fw-bold ">
        {label}
      </Form.Label>
      <div className="d-flex align-items-center position-relative ">
        <Form.Control
          className={
            " py-2 bg-light  " +
            `${styles.formInput}` +
            (type === "password" ? ` ${styles.noIcon}` : "")
          }
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={isInvalid}
          isValid={isValid}
          id={id}
        />

        {type === "password" && (
          <button
            type="button"
            className="border-0 fs-5 position-absolute end-0 bg-transparent"
            onClick={togglePasswordVisibility}
          >
            <i
              className={
                "bi bi-eye-fill  opacity-50 mx-2 opacity-100-hover" +
                (showPassword ? " bi-eye-fill" : " bi-eye-slash-fill")
              }
            ></i>
          </button>
        )}
      </div>
      {isInvalid && (
        <p className={`mt-1 mb-0 ms-1 fs-7 fw-bold ${styles.errorMessage}`}>
          {errorMessage}
        </p>
      )}
    </Form.Group>
  );
}
