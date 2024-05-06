import { User } from "../../../utils/User/User";
import { loginUser } from "./loginUser";

export const handleLoginButtonClick = async (
  user: User,
  setIsUserInvalid: Function,
) => {
  const retrievedToken = await loginUser(
    user.email,
    user.password,
    setIsUserInvalid,
  );
  retrievedToken
    ? (localStorage.setItem("token", retrievedToken.token as string),
      (window.location.href = "/"))
    : null;
};
