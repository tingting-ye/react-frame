import React, { Component } from 'react'
import {InputNumber} from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSeconds: 0,
      day:0,
      hour:0,
      miniter:0,
      seconds:0
    }
  }

  changeSeconds = (number)=> {
    // const time = number /1000
    // const day = Math.floor(time/86400);
    // const hour = Math.floor((time-day*86400)/3600);
    // const minute = Math.floor((time-day*86400-hour * 3600)/60);
    // const second = time-day*86400-hour * 3600 - minute * 60;
    let time = number /1000;
    let day = Math.floor(time / 86400);
    let hour = Math.floor(time / 3600) %24;
    let minute = Math.floor(time /60) %60;
    let second = Math.floor(time) % 60;
    this.setState({allSeconds:number,day,hour,minute,second})

  }

  onchange = (tyle, number) =>{
    this.setState({[type]:number})
  }

  render() {
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <InputNumber step={1000} style={{width:150}} value={this.state.allSeconds} onChange={(value)=>this.changeSeconds(value)}/>
            <br/>
            <InputNumber style={{width:150}} value={this.state.day} onChange={(value)=>this.onchange('day',value)}/>
            <InputNumber style={{width:150}} value={this.state.hour} onChange={(value)=>this.onchange('hour',value)}/>
            <InputNumber style={{width:150}} value={this.state.minute} onChange={(value)=>this.onchange('minute',value)}/>
            <InputNumber style={{width:150}} value={this.state.second} onChange={(value)=>this.onchange('second',value)}/>
          </div>
        </div>
      </div>
    )
  }
}
