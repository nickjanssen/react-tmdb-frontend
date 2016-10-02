import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="me-app">
        <Sidebar currentRoute={this.props.location.pathname} />
        {this.props.children}
      </div>
    )
  }
}
