import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainChild from './mainChild'

export default class index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("main*****" + this.context.themeColor)
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <p>main</p>
            <MainChild />
          </div>
        </div>
      </div>
    )
  }
}

index.contextTypes = {
  themeColor: PropTypes.string
}

