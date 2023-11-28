import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../core/store/mainStore";
import { IUser } from "../../../shared/interfaces/user.interface";
import { setToken, setUser } from "../../../shared/slices/userSlice";
import { loginUser, registerUser } from "../services/auth.service";

export const useAuth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value ?? "",
      password: e.target.password.value ?? "",
      name: e.target.firstName?.value ?? "",
      surname: e.target.lastName?.value ?? "",
    };
    isRegistering
      ? await handleUserRegister(user)
      : await handleUserLogin(user);
  };

  const handleUserRegister = async (user: IUser) => {
    try {
      await registerUser(user).then(async () => {
        await handleUserLogin(user);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleUserLogin = async (user: IUser) => {
    try {
      await loginUser(user).then(({ data }) => {
        dispatch(setUser(data.user));
        dispatch(setToken(data.token));
        navigate("/");
      });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isRegistering,
    handleSubmit,
    setIsRegistering,
  };
};
