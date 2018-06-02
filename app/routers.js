import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './page/home/index'
// 拖拽-基础
import ReactRndDefault from './page/ReactRnd/index'
// 拖拽-大小位置
import ReactRndSizeOrPosition from './page/ReactRnd/sizeOrPosition'
// 拖拽-其他参数
import ReactRndOtherParameter from './page/ReactRnd/otherParameter'

const routers = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={ReactRndOtherParameter}/>
    </Route>
  </Route>
)
export default routers