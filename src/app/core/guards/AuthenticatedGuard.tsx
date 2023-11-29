import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/mainStore";

export const AuthenticatedGuard = () => {
  const { token } = useAppSelector((state) => state.user);
    return token ? <Navigate replace to="/" /> : <Outlet />;
};
