import React, { createContext, useReducer } from "react";

// initiall state:
const initialState = { darkMode: false };

// create context:
export const ThemeContext = createContext(initialState);

// reducer function:
const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return { darkMode: false };
    case "DARK_MODE":
      return { darkMode: true };
    default:
      return state;
  }
};

// provider:
export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
