import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useTheme } from "./features/theme/hooks/useTheme";


import SigninPage from "./features/auth/signin/SigninPage";
import SignupPage from "./features/auth/signup/SignupPage";
import Dashboard from "./features/dashboard/Dashboard";

import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./features/auth/context/AuthContext";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

const App = () => {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
