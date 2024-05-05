import { CHANGE_IS_DATA_VALID } from "../../utils/ActionTypes";
import { User } from "../../utils/types/User";
import { registerUser } from "./registerUser";
import { Dispatch, UnknownAction } from "redux";

export const handleRegisterButtonClick = async (
  dispatch: Dispatch<UnknownAction>,
  user: User,
  setUserExists: Function,
) => {
  await registerUser({ ...user }, setUserExists);
  dispatch({ type: CHANGE_IS_DATA_VALID, newIsDataValid: false });
};
