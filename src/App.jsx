import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import { useEffect } from "react";
import { useTheme } from "./features/theme/hooks/useTheme";


import SigninPage from "./pages/SignIn/SigninPage";
import SignupPage from "./pages/Signup/SignupPage";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />


      
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<SigninPage/>} />


      <Route path='/dashboard' element={<Dashboard/>} />


    </Routes>
  );
};

export default App;
