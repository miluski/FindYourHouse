import { Form } from "react-bootstrap";
import { CHANGE_PHONE_NUMBER } from "../../utils/User/UserActionTypes";
import { useDispatch } from "react-redux";
import "../../utils/utils.css";

export const PhoneNumberInput = () => {
  const dispatch = useDispatch();
  return (
    <Form.Group className="mb-3 ">
      <Form.Label className={"fw-bold mb-1"}>Numer telefonu</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Wprowadź numer telefonu"
        className={"bg-light py-2 border-secondary-subtle"}
        onChange={(e) =>
          dispatch({
            type: CHANGE_PHONE_NUMBER,
            newPhoneNumber: e.target.value,
          })
        }
      />
      <Form.Control.Feedback type="invalid">
        Wprowadź poprawny numer telefonu.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
