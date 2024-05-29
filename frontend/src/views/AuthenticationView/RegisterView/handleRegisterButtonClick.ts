import { User } from "../../../utils/types/User";
import { registerUser } from "./registerUser";

export const handleRegisterButtonClick = async (user: User) => {
  await registerUser({ ...user });
};
