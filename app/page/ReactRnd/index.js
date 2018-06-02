import React, { Component } from 'react'
import Rnd from "react-rnd"
import {Button} from "antd"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size:{width:50,height:50}
    }
  }

  render() {
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid 1px #ddd',
      background: '#f0f0f0',
    };
    return (
      <div className="page">
        <div className="page-content">
          <Button type="primary" onClick={()=>this.setState({size:{width:100,height:80}})}>改变大小</Button>
          <Rnd
            style={style}
            default={{
              // x: 100, y: 100, // 默认位置
              // width: 100, height: 50, // 组件默认大小,可设置"auto"
            }}
            position={{x:200,y:150}} // 组件位置，可更改参数，对组件位置进行改变
            size={this.state.size} // 组件大小,除非改变size值，否则不可改变
          >Rnd</Rnd>
        </div>
      </div>
    );
  }
}