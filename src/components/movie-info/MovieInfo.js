import React from "react";
import "./movie-info.style.css";

const MovieInfo = ({ closeInfo, currentMovie, title }) => {
  return (
    <div className="info-container">
      <div className="info-row">
        <button className="info-btn">{currentMovie.title}</button>
      </div>
      <div className="info">
        {currentMovie.poster_path === null ? (
          <img
            src="https://i.pinimg.com/736x/82/3f/da/823fdae5c8420af3f013bc6a31fd2daf.jpg"
            style={{ width: "250px", height: "250px" }}
            alt=""
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
            alt=""
          />
        )}
      </div>
      <div className="details">
        <p align="justify">
          {" "}
          <span>
            Description
            <br />
          </span>
          {currentMovie.overview}
        </p>
        <p>
          <span>
            Release Date
            <br />
          </span>
          {/* {currentMovie.release_date
            .substring(5)
            .split("-")
            .concat(currentMovie.release_date.substring(0, 4))
            .join("/")} */}
          {currentMovie.release_date}
        </p>
        <p>
          <span>
            Original Language
            <br />
          </span>
          {currentMovie.original_language.toUpperCase()}
        </p>
      </div>
      <div className="info-row">
        <button className="info-btn" onClick={closeInfo}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MovieInfo;
