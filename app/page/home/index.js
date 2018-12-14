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
          <div className="page-content">
            {/* {this.props.children} */}
            <Select
              labelInValue
              value={{
                key: this.state.value.key,
                label: this.state.value.label
              }}
              optionLabelProp="text"
              style={{ width: 120 }}
              dropdownStyle={{
                width: 300
              }}
              onChange={this.handleChange}
            >
              <Option value="1" text="Jack">
                Jack (100)
              </Option>
              <Option value="2" text="Lucy">
                Lucy (101)
              </Option>
            </Select>
          </div>
        </div>
      </div>
    )
  }
}
