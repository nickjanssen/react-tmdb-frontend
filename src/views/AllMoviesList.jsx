import React, { Component } from 'react'

import './AllMoviesList.scss'

export default class AllMoviesList extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div className="me-all">
        <div className="me-all__header">
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
      </div>
    )
  }
}
