import React, { Component } from 'react'
import { Select } from "antd"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: {
        key: "1",
        label: "Jack"
      }
    }
  }

  handleChange = value => {
    this.setState({
      value: {
        key: value.key,
        label: value.label
      }
    });
  };

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content" style={{ width: '1000px', height: '500px', margin: '0 auto'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
