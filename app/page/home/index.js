import React, { Component } from 'react'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content">
            {this.props.children}
          </div>
        </div>
      </div>

    )
  }
}
