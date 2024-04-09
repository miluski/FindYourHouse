import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_PASSWORD } from "../utils/User/UserActionTypes";
import "../utils/utils.css";

export const PasswordInput = () => {
  const dispatch = useDispatch();
  return (
    <Form.Group className="mb-3" controlId="validationCustom02">
      <Form.Label className={"fw-bold mb-1"}>Hasło</Form.Label>
      <Form.Control
        required
        type="password"
        placeholder="Wprowadź hasło"
        className={"bg-light py-2 border-secondary-subtle"}
        onChange={(e) =>
          dispatch({ type: CHANGE_PASSWORD, newPassword: e.target.value })
        }
      />
      <Form.Control.Feedback type="invalid">
        Wprowadź poprawne hasło.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
