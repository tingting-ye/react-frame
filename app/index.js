import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import 'style/base.less'

import routers from './routers'

ReactDOM.render((
  <Router history={hashHistory}>
    {routers}
  </Router>
), document.getElementById('root'))
