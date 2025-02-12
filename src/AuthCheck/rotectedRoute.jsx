import { Navigate } from "react-router-dom";
import {isAuthenticated} from "../Service/authService";

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
