import React, { Component } from 'react'
import MovieList from './MovieList'
import _ from 'lodash'

import './AllMoviesList.scss'

export default class AllMoviesList extends Component {
  static propTypes = {
    genres: React.PropTypes.array
  }
  constructor(props) {
    super(props)

    this.state = {
      movies: null
    }

    this.isLoadingNewMovies = false
    this.nextPageToLoadMoviesFrom = 1
    this.searchQuery = ''

    this.loadNewMoviesDebounced = _.debounce(this.loadNewMovies, 1000)
  }
  componentDidMount() {
    this.loadNewMovies()
  }
  searchForKeywords(newKeywords) {
    if (this.searchQuery !== newKeywords) {
      this.setState({
        movies: null
      })
      this.searchQuery = newKeywords
      this.nextPageToLoadMoviesFrom = 1
    }
    this.loadNewMoviesDebounced()
  }
  loadNewMovies() {
    if (this.isLoadingNewMovies) return
    this.isLoadingNewMovies = true
    fetch(`https://api.themoviedb.org/3/${this.searchQuery ? 'search/movie' : 'discover/movie'}?page=${this.nextPageToLoadMoviesFrom}&api_key=${process.env.TMDB_API_KEY}&query=${this.searchQuery}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        movies: this.state.movies ? [...this.state.movies, ...blob.results] : blob.results
      })
      this.isLoadingNewMovies = false
      this.nextPageToLoadMoviesFrom++
    })
  }
  render() {
    const isLoading = this.state.movies === null


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
                <input type="text" className="me-all__header__search__input" placeholder="Search for movies" onChange={(e) => {
                  this.searchForKeywords(e.target.value)
                }}/>
              </div>
            </div>
          </div>
          <div className="me-all__header__row">
            <div className="me-movie-list__filter">
              Filter here
            </div>
          </div>
        </div>
        {!isLoading && <div className="me-all__content" onScroll={(o) => {
          if(o.target.offsetHeight + o.target.scrollTop >= o.target.scrollHeight - 100) {
            this.loadNewMovies()
          }
        }}>
          <MovieList movies={this.state.movies} genres={this.props.genres} />
        </div>}
        {isLoading && <div className="me-loading">
          <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
        </div>}
      </div>
  }
}
