import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    console.log("header*****" + this.context.themeColor)
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <p>header</p>
          </div>
        </div>
      </div>
    )
  }
}

index.contextTypes = {
  themeColor: PropTypes.string
}
