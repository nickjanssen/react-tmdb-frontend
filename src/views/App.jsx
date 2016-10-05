import React, { Component } from 'react'
import Sidebar from './Sidebar'
import EventEmitter from 'events'

import './App.scss'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)

    this.emitter = new EventEmitter()

    this.state = {
      genres: null,
      watchlist: []
    }

    this.emitter.on('addToWatchList', (movie) => {
      // Add genre_ids ourselves as we need to create a custom list from detail
      // API responses, and genre_ids is not available there
      movie.genre_ids = movie.genres.map(g => g.id)

      this.setState({
        watchlist: [
          ...this.state.watchlist,
          movie
        ]
      })
      setTimeout(this.saveWatchlist.bind(this), 0)
    })

    this.emitter.on('removeFromWatchList', (movie) => {
      const newWatchlist = this.state.watchlist.filter(m => m.id !== movie.id)
      this.setState({
        watchlist: newWatchlist
      })
      setTimeout(this.saveWatchlist.bind(this), 0)
    })
  }
  saveWatchlist() {
    localStorage.setItem('watchlist', JSON.stringify(this.state.watchlist))
  }
  loadWatchlist() {
    const savedWatchlist = localStorage.getItem('watchlist')
    if (savedWatchlist) {
      this.setState({
        watchlist: JSON.parse(savedWatchlist)
      })
    }
  }
  componentDidMount() {
    this.loadWatchlist()

    fetch(`https://api.themoviedb.org/3${'/genre/movie/list'}?api_key=${process.env.TMDB_API_KEY}`)
    .then(r => r.json())
    .then(blob => {
      this.setState({
        genres: blob.genres
      })
    })
  }
  render() {
    const isLoading = this.state.genres === null

    return (
      <div className="me-app">
        <Sidebar currentRoute={this.props.location.pathname} />
        <div className="me-app-route-wrapper">
          {isLoading ?
            <div className="me-loading">
              <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
            </div>
          : React.Children.map(this.props.children, child => React.cloneElement(child, {
            genres: this.state.genres,
            watchlist: this.state.watchlist,
            emitter: this.emitter
          }))}
        </div>
      </div>
    )
  }
}
