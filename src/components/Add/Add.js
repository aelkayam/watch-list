import "./Add.css";
import React, { useState } from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function inputChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    ).then((res) =>
      res.json().then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      })
    );
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="search for a movie"
              value={query}
              onChange={inputChange}
            />
          </div>
          {results.length > 0 && (
            <ul>
              {results.map((prop) => (
                <li key={prop.id}>
                  <ResultCard movie={prop} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
