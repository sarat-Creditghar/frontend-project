import { createContext,useState,useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        const storedUser = localStorage.getItem("auth_user");
        if (token) {
           
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsAuthenticated(true);
            setUser(storedUser ? JSON.parse(storedUser) : { name: "User" });
        }
        setLoading(false);
    }, []);

    const login = (authData) => {
        const { token, refreshToken, user } = authData;
        localStorage.setItem("auth_token", token);
        localStorage.setItem("refresh_token", refreshToken);
        localStorage.setItem("auth_user", JSON.stringify(user));

        setIsAuthenticated(true);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("auth_user");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};


