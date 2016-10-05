import React, { Component } from 'react'
import MovieList from './MovieList'
import classnames from 'classnames'
import { browserHistory } from 'react-router'
import { Circle } from 'rc-progress'

import './MovieDetail.scss'

export default class MovieDetail extends Component {
  static propTypes = {
    genres: React.PropTypes.array,
    watchlist: React.PropTypes.array,
    params: React.PropTypes.object,
    emitter: React.PropTypes.object
  }
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      images: null,
      credits: null
    }
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}`}?api_key=${process.env.TMDB_API_KEY}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        movie: blob
      })
    })
    fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}/images`}?api_key=${process.env.TMDB_API_KEY}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        images: blob
      })
    })
    fetch(`https://api.themoviedb.org/3${`/movie/${this.props.params.movieId}/credits`}?api_key=${process.env.TMDB_API_KEY}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        credits: blob
      })
    })
  }
  render() {
    const isLoading = this.state.movie === null || this.state.images === null || this.state.credits === null

    if (isLoading) {
      return <div className="me-loading">
        <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
      </div>
    }
    else {
      const m = this.state.movie
      const i = this.state.images
      const c = this.state.credits

      const previewBackdrops = [...i.backdrops].splice(1)

      const average = Math.round(m.vote_average * 10) / 10

      // Put in a columns/rows format
      const previewBackdropsFormatted = []
      for (let i = 0; i < previewBackdrops.length; i += 2) {
        previewBackdropsFormatted.push([previewBackdrops[i], previewBackdrops[i+1]])
      }

      const isOnWatchlist = this.props.watchlist.find((wlMovie) => wlMovie.id === m.id)

      return <div className="me-movie-detail">
        <div className="me-movie-detail__main-left">
          <div className="me-movie-detail__main-left__fixed-wrapper">
            <div className="me-movie-detail__main-left__main-poster" style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w600${m.poster_path})`
            }} />
            <div className="me-movie-detail__main-left__main-poster--border"/>
            <div className="me-movie-detail__main-left__details">
              <div className="me-movie-detail__main-left__buttons">
                {!isOnWatchlist && <button className={classnames('me-button me-button-flex me-button-primary')} onClick={() => {
                  this.props.emitter.emit('addToWatchList', m)
                }}>
                  Add to Watchlist
                </button>}
                {isOnWatchlist && <button className={classnames('me-button me-button-flex me-button-info')} onClick={() => {
                  this.props.emitter.emit('removeFromWatchList', m)
                }}>
                  Remove from Watchlist
                </button> }
                <button className={classnames('me-button me-button-flex me-button-regular')}>
                  Watch trailer
                </button>
              </div>
            </div>
          </div>
          <div className="me-movie-detail__main-left__scrollable-wrapper">
            <div className="me-movie-detail__main-left__backdrops">
              {previewBackdropsFormatted.map((bD, i) => {
                return <div key={i} className="me-movie-detail__main-left__backdrop__row">
                  <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 0,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 1
                  })} style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[0].file_path})`
                  }} />

                  {bD[1] && <div className={classnames('me-movie-detail__main-left__backdrop', {
                    'me-movie-detail__main-left__backdrop-wide': i % 2 === 1,
                    'me-movie-detail__main-left__backdrop-narrow': i % 2 === 0
                  })}  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600${bD[1].file_path})`
                  }} />}
                </div>
              })}
            </div>
          </div>
        </div>
        <div className="me-movie-detail__main-right">
          <div className="me-movie-detail__main-right__info">
            <a className="me-back-link" onClick={browserHistory.goBack}><i className="fa fa-chevron-circle-left" aria-hidden="true"></i> Back to list</a>
            <h1 className="me-movie-detail__main-right__info__title">{m.title} <span className="me-movie-detail__main-right__info__year">({m.release_date.split('-')[0]})</span></h1>
            <div className="me-movie-detail__main-right__info__desc">
              {m.overview}
            </div>
            <div className="me-movie-detail__main-right__info__scoretable">
              <div className="score">
                <div className="circle-wrapper">
                  <Circle percent={average * 10}
                    trailWidth="10"
                    trailColor="#292929"
                    strokeWidth="10"
                    strokeColor="#fae906"
                    strokeLinecap="square"/>
                  <div className="value"><span>{average}</span></div>
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Genre</td>
                    <td className="detail">{m.genres.map(g => g.name).join(', ')}</td>
                  </tr>
                  <tr>
                    <td>Release date</td>
                    <td className="detail">{m.release_date}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td className="detail">{m.runtime} min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="me-movie-detail__main-right__crew">
            <table>
              <tbody>
                {c.cast.map((c, i) => {
                  return <tr key={i}>
                    <td>
                      {c.profile_path && <div className="photo" style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w90${c.profile_path})`
                      }}></div>}
                    </td>
                    <td className="info">{c.name}</td>
                    <td className="info">As...</td>
                    <td className="detail">{c.character}</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    }
  }
}
