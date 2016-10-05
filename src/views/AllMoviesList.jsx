import React, { Component } from 'react'
import MovieList from './MovieList'

import './AllMoviesList.scss'

export default class AllMoviesList extends Component {
  static propTypes = {
    genres: React.PropTypes.array
  }
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }

    this.isLoadingNewMovies = false
    this.nextPageToLoadMoviesFrom = 1
  }
  componentDidMount() {
    this.loadNewMovies()
  }
  loadNewMovies() {
    if (this.isLoadingNewMovies) return
    this.isLoadingNewMovies = true
    fetch(`https://api.themoviedb.org/3/discover/movie?page=${this.nextPageToLoadMoviesFrom}&api_key=${process.env.TMDB_API_KEY}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        movies: [...this.state.movies, ...blob.results]
      })
      this.isLoadingNewMovies = false
      this.nextPageToLoadMoviesFrom++
    })
  }
  render() {
    const isLoading = this.state.movies === null

    if (isLoading) {
      return <div className="me-loading">
        <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
      </div>
    }
    else {
      return <div className="me-all">
          <div className="me-all__header">
            <div className="me-all__header__row">
              <div className="me-all__header__title">
                <h1>All Movies</h1>
              </div>
              <div className="me-all__header__search">
                <div className="me-all__header__search__wrapper">
                  <div className="me-all__header__search__input__icon">
                    <i className="fa fa-search"></i>
                  </div>
                  <input type="text" className="me-all__header__search__input" placeholder="Search for movies"/>
                </div>
              </div>
            </div>
            <div className="me-all__header__row">
              <div className="me-movie-list__filter">
                Filter here
              </div>
            </div>
          </div>
          <div className="me-all__content" onScroll={(o) => {
            if(o.target.offsetHeight + o.target.scrollTop >= o.target.scrollHeight - 100) {
              this.loadNewMovies()
            }
          }}>
            <MovieList movies={this.state.movies} genres={this.props.genres} />
          </div>
        </div>
    }
  }
}
