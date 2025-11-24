
import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useTheme } from "./features/theme/hooks/useTheme";


import SigninPage from "./features/auth/pages/SigninPage";
import SignupPage from "./features/auth/pages/SignupPage";
import DashboardPage from "./features/dashboard/pages/DashboardPage";
import Appdashbord from "./features/dashboard/pages/Appdashbord";
import AnalyticPage from "./features/dashboard/pages/AnalyticPage";
import Profilecard from "./shared/components/Profilecard";

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
              <DashboardPage />
            </ProtectedRoute>
          }
        >
          <Route index element={<Appdashbord />} />
          <Route path="app" element={<Appdashbord />} />
          <Route path="analytics" element={<AnalyticPage />} />
          <Route path="user-profile" element={<Profilecard />} />
          {/* Add other routes as placeholders or actual components */}
          <Route path="user-card" element={<div>User Card Component</div>} />
          <Route path="user-list" element={<div>User List Component</div>} />
          <Route path="user-create" element={<div>Create User Component</div>} />
          <Route path="user-edit" element={<div>Edit User Component</div>} />
          <Route path="user-account" element={<div>User Account Component</div>} />
          <Route path="settings" element={<div>Settings Page Content</div>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
