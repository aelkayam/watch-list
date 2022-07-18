import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieCard from "../MovieCard/MovieCard";

export default function Watchlist() {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Your list is empty</h2>
        )}
      </div>
    </div>
  );
}
