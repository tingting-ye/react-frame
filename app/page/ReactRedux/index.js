import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './content/header'
import Main from './content/main'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeColor: "red"
    }
  }

  // 设置content的过程
  getChildContext() {
    return { themeColor: this.state.themeColor }
  }

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <Header />
            <Main />
          </div>
        </div>
      </div>
    )
  }
}

index.childContextTypes = {
  themeColor: PropTypes.string
}

/**
 * context进行传递数据时，
 * 必须在子级和父级都必须引入prop-types，
 * 在第一级父级中必须要有getChildContext函数和childContextTypes属性，
 * 其他子级中必须要有contextTypes属性，
 * context的数据才能传递成功；
 * 不然无法传递
 */
