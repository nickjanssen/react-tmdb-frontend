import React, { Component } from 'react'

const TabButton = props => <div className="me-sidebar--button"></div>

export default class Sidebar extends Component {
  render() {
    return (
      <div className="me-sidebar">
        <img src="images/logo.png" className="me-sidebar__logo" />
        <TabButton icon="fa-list-ul" route="/" />
      </div>
    )
  }
}
