
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import App from './views/App.jsx'
import AllMoviesList from './views/AllMoviesList.jsx'

import './main.scss'

const NoMatch = () => <div>404</div>
const WatchList = () => <div>WatchList</div>
const MovieDetail = () => <div>MovieDetail</div>

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/all" />
      <Route path="all" component={AllMoviesList}>
        <Route path="/movie/:movieId" component={MovieDetail}/>
      </Route>
      <Route path="watchlist" component={WatchList}>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
