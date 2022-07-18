import React, {
  createContext,
  useReducer,
  useEffect,
  createElement,
} from "react";
import AppReducer from "./AppReducer";

// initiall state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  // watched: localStorage.getItem("watched")
  //   ? JSON.parse(localStorage.getItem("watched"))
  //   : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export function GlobalProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  function addMovieToWatchlist(movie) {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  }

  function removeMovieFromWatchlist(id) {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  }

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
