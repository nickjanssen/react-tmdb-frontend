import React, { Component } from 'react'
import MovieList from './MovieList'
import Select from 'react-select'
import _ from 'lodash'

import './Watchlist.scss'

const orderByOptions = [
  { value: 'release_date.desc', label: 'Release date', clearableValue: false },
  { value: 'vote_average.desc', label: 'Vote average', clearableValue: false },
  { value: 'popularity.desc', label: 'Popularity', clearableValue: false },
]

export default class Watchlist extends Component {
  static propTypes = {
    genres: React.PropTypes.array,
    watchlist: React.PropTypes.array
  }
  constructor(props) {
    super(props)

    this.state = {
      movies: null,
      orderBy: 'popularity.desc',
      filterBy: null,
      filterQuery: null
    }
  }
  componentDidMount() {
    this.setState({
      movies: this.props.watchlist
    })
  }
  render() {
    const isLoading = this.state.movies === null

    // Apply local sorting and filtering
    let filteredMovies = _.sortBy(this.state.movies, this.state.orderBy.split('.')[0])

    const filterOptions = this.props.genres.map((g) => {
      return {
        value: g.id, label: g.name
      }
    })

    if (this.state.filterBy) {
      filteredMovies = filteredMovies.filter(m => {
        return _.includes(m.genre_ids, this.state.filterBy)
      })
    }

    if (this.state.filterQuery) {
      filteredMovies = filteredMovies.filter(m => {
        return m.title.toLowerCase().indexOf(this.state.filterQuery.toLowerCase()) !== -1
      })
    }

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
                  <input type="text" className="me-all__header__search__input" placeholder="Search for movies" onChange={(e) => {
                    this.setState({
                      filterQuery: e.target.value
                    })
                  }}/>
                </div>
              </div>
            </div>
          <div className="me-all__header__row">
            <div className="me-movie-list__order">
              <div className="label">Order by:</div><Select
                value={this.state.orderBy}
                clearable={false}
                searchable={false}
                options={orderByOptions}
                onChange={v => {
                  this.setState({
                    orderBy: v.value
                  })
                }}
              />
            </div>
            <div className="me-movie-list__filter">
              <div className="label">Filter by:</div>
              <Select
                value={this.state.filterBy}
                searchable={false}
                options={filterOptions}
                onChange={v => {
                  this.setState({
                    filterBy: v ? v.value : null
                  })
                }}
              />
            </div>
          </div>
          </div>
          <div className="me-all__content">
            <MovieList movies={filteredMovies} genres={this.props.genres} />
          </div>
        </div>
    }
  }
}
