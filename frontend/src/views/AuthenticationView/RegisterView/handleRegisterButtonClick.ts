import { UserState } from "../../../utils/types/State";
import { registerUser } from "./registerUser";

export const handleRegisterButtonClick = async (user: UserState) => {
  await registerUser({ ...user });
};
