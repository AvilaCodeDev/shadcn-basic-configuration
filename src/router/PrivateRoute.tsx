
import { useGlobalContext } from "@/context/GlobalContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

    const { isLogged } = useGlobalContext();

    return (
         isLogged ? <Outlet /> : <Navigate to="/" replace />
    )
}