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
    console.log(this.props.genres)
    return (
      <div className="me-movie-list">
        {this.props.movies && this.props.movies.results.map(m => {



          return <div className="me-movie" key={m.id}>
            <img className="me-movie__poster" src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}/>
            <div className="me-movie__details">
              <b>{m.title}</b><br />
              <span>{this.props.genres
                  .filter(g => m.genre_ids.indexOf(g.id) !== -1)
                  .map(g => g.name).join(', ')}
              </span>
            </div>
          </div>
        })}
      </div>
    )
  }
}
