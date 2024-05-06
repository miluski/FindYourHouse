import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_NAME } from "../../utils/ActionTypes";

export const NameInput = () => {
  const dispatch = useDispatch();
  return (
    <Form.Group className="mb-3 mt-1">
      <Form.Label className={"fw-bold mb-1"}>Imię</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Wprowadź swoje imię"
        className={"bg-light py-2 border-secondary-subtle"}
        onChange={(e) =>
          dispatch({ type: CHANGE_NAME, newName: e.target.value })
        }
      />
      <Form.Control.Feedback type="invalid">
        Wprowadź swoje imię.
      </Form.Control.Feedback>
    </Form.Group>
  );
};
