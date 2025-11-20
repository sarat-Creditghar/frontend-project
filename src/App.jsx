import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useTheme } from "./features/theme/hooks/useTheme";


import SigninPage from "./features/auth/signin/SigninPage";
import SignupPage from "./features/auth/signup/SignupPage";
import Dashboard from "./features/dashboard/Dashboard";

import { Toaster } from "react-hot-toast";

const App = () => {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
