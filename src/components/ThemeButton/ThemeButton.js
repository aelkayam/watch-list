import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ThemeButton() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  function onClick() {
    if (darkMode) {
      theme.dispatch({ type: "LIGHT_MODE" });
    } else {
      theme.dispatch({ type: "DARK_MODE" });
    }
  }

  return (
    <button className="button" onClick={onClick}>
      {darkMode ? "Switch to bg1" : "Switch to bg2"}
    </button>
  );
}
