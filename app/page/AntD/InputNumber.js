import React, { Component } from 'react'
import { Input,Button } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:1
    }
  }

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content">
          {/* <InputNumber
            onChange={onChange}
          /> */}
          <Button onClick={()=>this.setState({value:50})}>点击</Button>
          <Input value={this.state.value} onChange={()=>console.log('我触发你了！')}/>
          </div>
        </div>
      </div>
    )
  }
}
