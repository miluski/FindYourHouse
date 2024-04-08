import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_EMAIL } from "../utils/User/UserActionTypes";
import "../utils/utils.css";

export const EmailInput = () => {
  const dispatch = useDispatch();
  return (
    <Form.Group className="mb-3 mt-1">
      <Form.Label className={"fw-bold mb-1"}>Email</Form.Label>
      <Form.Control
        required
        type="email"
        placeholder="Wprowadź Adres Mailowy"
        className={"bg-light py-2 border-secondary-subtle"}
        onChange={(e) =>
          dispatch({ type: CHANGE_EMAIL, newEmail: e.target.value })
        }
      />
      <Form.Control.Feedback type="invalid">
        Wprowadź istniejący adres mailowy.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
