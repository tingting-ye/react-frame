import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './page/home/index'
// 拖拽-基础
import ReactRndDefault from './page/ReactRnd/index'
// 拖拽-大小位置
import ReactRndSizeOrPosition from './page/ReactRnd/sizeOrPosition'
// 拖拽-其他参数 props
import ReactRndOtherProps from './page/ReactRnd/otherProps'
// 拖拽-Callback
import ReactRndCallback from './page/ReactRnd/rndCallback'
// 拖拽-API
import ReactRndApi from './page/ReactRnd/rndApi'

const routers = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ReactRndApi}/>
    </Route>
  </Route>
)
export default routers