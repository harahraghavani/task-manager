import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token === null ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
