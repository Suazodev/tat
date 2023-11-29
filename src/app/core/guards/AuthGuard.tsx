import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/mainStore";

export const AuthGuard = () => {
  const { token } = useAppSelector((state) => state.user);
    return token ? <Outlet /> : <Navigate replace to="/auth" />;
};
