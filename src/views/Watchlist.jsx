import React, { Component } from 'react'
import MovieList from './MovieList'

import './Watchlist.scss'

export default class Watchlist extends Component {
  static propTypes = {
    genres: React.PropTypes.array,
    watchlist: React.PropTypes.array
  }
  constructor(props) {
    super(props)

    this.state = {
      movies: null
    }
  }
  componentDidMount() {
    this.setState({
      movies: {
        results: this.props.watchlist
      }
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
                <h1>My Watchlist</h1>
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
          <div className="me-all__content">
            <MovieList movies={this.state.movies.results} genres={this.props.genres} />
          </div>
        </div>
    }
  }
}
