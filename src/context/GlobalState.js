import React, {
  createContext,
  useReducer,
  useEffect,
  createElement,
} from "react";
import AppReducer from "./AppReducer";

// initiall state
const initialState = {
  watchlist: [],
  Watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function addMovieToWatchlist(movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
