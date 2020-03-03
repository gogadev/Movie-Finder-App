import React from "react";
import "./search-movie.style.css";

const SearchMovie = ({ handleSubmit, handleChange }) => {
  return (
    <div className="search-container">
      <section className="search-section">
        <form onSubmit={handleSubmit}>
          <div className="search-input">
            <i className="fas fa-search fa-2x"></i>
            <input
              type="text"
              placeholder="Search Movie"
              onChange={handleChange}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default SearchMovie;
