import React, { Component } from 'react'
import PropTypes from 'prop-types'  

export default class index extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("mainChild*****"+this.context.themeColor)
    return (
      <div>
        <div className="page">
          <div className="page-content">
          <p>MainChild</p>
          </div>
        </div>
      </div>
    )
  }
}

index.contextTypes = {
  themeColor: PropTypes.string  
}

