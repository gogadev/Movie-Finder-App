import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchMovie from "./components/search-movie/SearchMovie";
import MovieList from "./components/movie-list/MovieList";
import MovieInfo from "./components/movie-info/MovieInfo";
import Pagination from "./components/pagination/Pagination";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchMovie: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchMovie}`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleChange = e => {
    this.setState({
      searchMovie: e.target.value
    });
  };

  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchMovie}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          currentPage: pageNumber
        });
      });
  };

  viewInfo = id => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);
    const newChosenMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
    this.setState({ currentMovie: newChosenMovie });
  };

  closeInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div>
        <Navbar />
        {this.state.currentMovie === null ? (
          <div>
            <SearchMovie
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />{" "}
            <MovieList movies={this.state.movies} viewInfo={this.viewInfo} />{" "}
          </div>
        ) : (
          <MovieInfo
            currentMovie={this.state.currentMovie}
            closeInfo={this.closeInfo}
          />
        )}
        {this.state.totalResults > 20 && this.state.currentMovie === null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
