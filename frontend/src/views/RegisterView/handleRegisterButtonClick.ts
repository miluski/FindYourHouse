import { User } from "../../utils/User/User";
import { CHANGE_IS_DATA_VALID } from "../../utils/User/UserActionTypes";
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
