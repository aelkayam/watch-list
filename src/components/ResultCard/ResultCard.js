import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function ResultCard({ movie }) {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  // check if the movie already in a list:
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : watchedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>
      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="reviews">
            {movie.vote_average > 0
              ? "user reviews: " + movie.vote_average + "/10"
              : "no reviews"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="button"
            onClick={() => addMovieToWatchlist(movie)}
            disabled={watchlistDisabled}
          >
            Add to Watchlist
          </button>

          <button
            className="button"
            onClick={() => addMovieToWatched(movie)}
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
}
