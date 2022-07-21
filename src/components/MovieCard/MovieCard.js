import React from "react";
import MovieControls from "../MovieControls/MovieControls";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card" key={movie.key}>
      <div className="overlay"></div>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}

      <MovieControls movie={movie} type={type} />
    </div>
  );
}
