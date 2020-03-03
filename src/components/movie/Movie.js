import React from "react";
import movieIcon from "../../assets/cinema.svg";
import "./movie.style.css";

const Movie = ({ image, title, viewInfo, movieId }) => {
  return (
    <div className="movie-container">
      <div className="card">
        <div className="movie-card">
          <h5>{title}</h5>
          {image === null ? (
            <img
              src="https://i.pinimg.com/736x/82/3f/da/823fdae5c8420af3f013bc6a31fd2daf.jpg"
              style={{ width: "250px", height: "250px" }}
              alt=""
            />
          ) : (
            <img src={`https://image.tmdb.org/t/p/w185${image}`} alt="" />
          )}
        </div>
      </div>
      <button onClick={() => viewInfo(movieId)} className="movie-btn">
        More <i className="fas fa-film"></i>
      </button>
    </div>
  );
};

export default Movie;
