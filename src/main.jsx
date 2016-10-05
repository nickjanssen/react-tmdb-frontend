
import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import App from './views/App.jsx'
import AllMoviesList from './views/AllMoviesList.jsx'
import Watchlist from './views/Watchlist.jsx'
import MovieDetail from './views/MovieDetail.jsx'

import './main.scss'
import './misc/scrollbar.scss'
import './misc/react-select.scss'

const NoMatch = () => <div>404</div>

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/all" />
      <Route path="all" component={AllMoviesList} />
      <Route path="movie/:movieId" component={MovieDetail} />
      <Route path="watchlist" component={Watchlist} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('app')
)
