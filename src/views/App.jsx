import React, { Component } from 'react'
import Sidebar from './Sidebar'

import './App.scss'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      genres: null
    }
  }
  componentDidMount() {
    // fetch(`https://api.themoviedb.org/3${'/genre/movie/list'}?api_key=${process.env.TMDB_API_KEY}`)
    // .then(r => r.json())
    // .then(blob => {
    //   console.log(blob)
    // })
    setTimeout(() => {
      this.setState({
        genres: {"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}.genres // eslint-disable-line
      })
    }, 1000)
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
            genres: this.state.genres
          }))}
        </div>
      </div>
    )
  }
}
