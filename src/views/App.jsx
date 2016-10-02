import React, { Component } from 'react'
import Sidebar from './Sidebar'

import './App.scss'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="me-app">
        <Sidebar currentRoute={this.props.location.pathname} />
        <div className="me-app-route-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
