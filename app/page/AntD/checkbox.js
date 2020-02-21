import React, { Component } from 'react'
import * as _ from 'lodash'
import { Checkbox } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onChange = (keyArr)=> {
    const arr = keyArr.sort(function(a, b){
      return a - b;
    })
    const str = arr.join(",")
    const valueStr = `0 0 0 ${str} ? *`
    console.log(valueStr)
  }

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
              {
                _.map(Array(31).fill(""),(item,key)=>{
                  return <Checkbox key={key+1} value={key+1}>{key+1}</Checkbox>
                })
              }
            </Checkbox.Group>
          </div>
        </div>
      </div>
    )
  }
}
