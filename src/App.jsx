import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.any
  }
  render() {
    return (
      <div className="me-app">
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
