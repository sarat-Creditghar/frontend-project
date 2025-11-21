import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/signin"  />;
    }

    return children;
};

export default ProtectedRoute;
