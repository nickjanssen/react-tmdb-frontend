
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import App from './views/App.jsx'
import AllMoviesList from './views/AllMoviesList.jsx'
import MovieDetail from './views/MovieDetail.jsx'

import './main.scss'
import './misc/scrollbar.scss'

const NoMatch = () => <div>404</div>
const WatchList = () => <div>WatchList</div>

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/all" />
      <Route path="all" component={AllMoviesList} />
      <Route path="movie/:movieId" component={MovieDetail} />
      <Route path="watchlist" component={WatchList} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
)
