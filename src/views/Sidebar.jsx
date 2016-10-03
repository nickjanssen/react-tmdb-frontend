import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { browserHistory } from 'react-router'

import './sidebar.scss'

const TabButton = props => <div className={classnames('me-sidebar__button', {
  'me-sidebar__button--active': props.route === props.currentRoute
})} onClick={() => {
  browserHistory.push(props.route)
}}>
  <i className={`fa ${props.icon}`}></i>
</div>

TabButton.propTypes = {
  icon: PropTypes.string,
  currentRoute: PropTypes.string,
  route: PropTypes.string
}

export default class Sidebar extends Component {
  static propTypes = {
    currentRoute: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="me-sidebar">
        <img src="/images/logo.png" className="me-sidebar__logo" />
        <TabButton icon="fa-list-ul" route="/all" currentRoute={this.props.currentRoute} />
        <TabButton icon="fa-star-o" route="/watchlist" currentRoute={this.props.currentRoute} />
      </div>
    )
  }
}
