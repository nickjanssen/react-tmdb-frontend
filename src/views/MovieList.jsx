import React, { Component } from 'react'

import './MovieList.scss'

export default class MovieList extends Component {
  static propTypes = {
    genres: React.PropTypes.array.isRequired,
    movies: React.PropTypes.object
  }
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="me-movie-list">
        {this.props.movies && this.props.movies.results.map(m => {
          const average = Math.round(m.vote_average * 10) / 10
          return <div className="me-movie" key={m.id}>
            <div className="me-movie__poster__score">{average}</div>
            <img className="me-movie__poster" src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}/>
            <div className="me-movie__details">
              <div className="me-movie__details__title">
                {m.title}
              </div>
              <div className="me-movie__details__genres">
                {this.props.genres
                  .filter(g => m.genre_ids.indexOf(g.id) !== -1)
                  .map(g => g.name).join(', ')}
              </div>
            </div>
          </div>
        })}
      </div>
    )
  }
}
