
import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useTheme } from "./features/theme/hooks/useTheme";


import SigninPage from "./features/auth/pages/SigninPage";
import SignupPage from "./features/auth/pages/SignupPage";
import DashboardLayout from "./features/dashboard/pages/DashboardLayout";
import DashboardOverview from "./features/dashboard/pages/DashboardOverview";
import AnalyticsPage from "./features/analytics/pages/AnalyticsPage";
import UserProfile from "./features/user/pages/UserProfile";
import UserList from "./features/user/pages/UserList";
import UserCreate from "./features/user/pages/UserCreate";
import UserEdit from "./features/user/pages/UserEdit";
import UserAccount from "./features/user/pages/UserAccount";



import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./features/auth/context/AuthContext";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";
import UserListTable from "./features/user/components/UserListTable";


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
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardOverview />} />
          <Route path="app" element={<DashboardOverview />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="user-card" element={<UserList />} />
          <Route path="user-list" element={<UserListTable />} />
          <Route path="user-create" element={<UserCreate />} />
          <Route path="user-edit" element={<UserEdit />} />
          <Route path="user-account" element={<UserAccount />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
