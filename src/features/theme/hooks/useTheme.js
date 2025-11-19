import { useState } from "react";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("Elegant Sand");

  const applyTheme = (themeName) => {
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("app-theme", themeName);
    setCurrentTheme(themeName);
  };

  const loadTheme = () => {
    const savedTheme = localStorage.getItem("app-theme");
    const themeToApply = savedTheme || currentTheme;

    document.documentElement.setAttribute("data-theme", themeToApply);
    setCurrentTheme(themeToApply);
  };

  return { applyTheme, loadTheme, currentTheme };
};
