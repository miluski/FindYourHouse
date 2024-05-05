import { User } from "../../../utils/User/User";
import { registerUser } from "./registerUser";

export const handleRegisterButtonClick = async (user: User) => {
  await registerUser({ ...user });
};
