import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './page/home/index'
import Welcome from './page/welcome'

const routers = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome}/>
    </Route>
  </Route>
)
export default routers