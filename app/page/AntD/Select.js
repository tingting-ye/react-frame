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
            <select>
              <option value="1">杭州</option>
              <option value="2">温州</option>
              <option value="3">台州</option>
              <option value="4">宁波</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
