import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_SURNAME } from "../../utils/User/UserActionTypes";

export const SurnameInput = () => {
  const dispatch = useDispatch();
  return (
    <Form.Group className="mb-3 ">
      <Form.Label className={"fw-bold mb-1"}>Nazwisko</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Wprowadź swoje nazwisko"
        className={"bg-light py-2 border-secondary-subtle"}
        onChange={(e) =>
          dispatch({ type: CHANGE_SURNAME, newSurname: e.target.value })
        }
      />
      <Form.Control.Feedback type="invalid">
        Wprowadź swoje nazwisko.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
