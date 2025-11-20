import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            {/* token validation api call */ }
            setIsAuthenticated(true);
            setUser({ name: "User" });
        }
        setLoading(false);
    }, []);

    const login = (token, userData) => {
        localStorage.setItem("auth_token", token);
        setIsAuthenticated(true);
        setUser(userData || { name: "User" });
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
