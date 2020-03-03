import React from "react";
import Movie from "../movie/Movie";
import "./movie-list.style.css";

const MovieList = ({ movies, viewInfo }) => {
  return (
    <div className="movies-container">
      <div className="movies-list">
        <div className="list">
          {movies.map((movie, id) => {
            return (
              <Movie
                key={id}
                viewInfo={viewInfo}
                movieId={movie.id}
                image={movie.poster_path}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
