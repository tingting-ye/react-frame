import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './page/home/index'
// 拖拽react-rnd -基础
import ReactRndDefault from './page/ReactRnd/index'
// 拖拽react-rnd -大小位置
import ReactRndSizeOrPosition from './page/ReactRnd/sizeOrPosition'
// 拖拽react-rnd -其他参数 props
import ReactRndOtherProps from './page/ReactRnd/otherProps'
// 拖拽react-rnd -Callback
import ReactRndCallback from './page/ReactRnd/rndCallback'
// 拖拽react-rnd -API
import ReactRndApi from './page/ReactRnd/rndApi'
// React-context
import ReactReduxDefault from './page/ReactRedux/index'
// React-Highcharts
import ReactHighchartsDefault from './page/ReactHighcharts/index'
// React-Dnd -基础
import ReactDndDefault from './page/ReactDnd/index'
import Select from './page/AntD/Select'
import Tree from './page/AntD/Tree'
import Table from './page/AntD/Table'
// import Input from './page/AntD/input'
import InputNumber from './page/AntD/inputNumber'
import Checkbox from './page/AntD/checkbox'

import Inframe from './page/other/iframe'


import Funnel from './page/HighCharts/Funnel/index'

const routers = (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Select} />
    </Route>
  </Route>
)
export default routers
