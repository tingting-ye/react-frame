import React, { Component } from 'react'
import moment from 'moment'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    console.log(moment().startOf('month').format("YYYY-MM-DD"))
    console.log(moment().endOf('month').format("YYYY-MM-DD"))
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
