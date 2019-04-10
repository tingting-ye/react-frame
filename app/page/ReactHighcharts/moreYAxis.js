import React, { Component } from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import DragPanes from "highcharts/modules/drag-panes";
import { chartWrapper  } from "./utils";
import * as _ from 'lodash'

import { getConfig, getTickPostions } from "./help";

HighchartsMore(Highcharts)
DragPanes(Highcharts)
chartWrapper(Highcharts)

export default class index extends Component {
  constructor(props) {
    super(props)
    this.setInterval = null
    this.addTime = 1543802855000;
    this.dataSource = ['a','b','c','d']
  }

  componentDidMount(){
    const Option = getConfig(this.dataSource);
    const tickPositions = getTickPostions(this.addTime);
    Option.xAxis.tickPositions = tickPositions
    this.chart = Highcharts.stockChart(this.container, Option);
    // console.log(tickPositions)
    // this.chart.xAxis[0].setExtremes(tickPositions[0],tickPositions[tickPositions.length-1])
    // this.setInterval = setInterval(() => {
    //   this.addPoint();
    // }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.setInterval)
  }

  addPoint = () =>{
    this.addTime += 1000
    const data = Math.random() * 100;
    _.map(this.chart.series, (item) => {
      item.addPoint({x:this.addTime,y:data},false,true)
    })
    const tickPositions = getTickPostions(this.addTime);
    this.chart.xAxis[0].update({tickPositions})
    // this.chart.xAxis[0].setExtremes(this.addTime-11000,this.addTime)
    this.chart.redraw()
  }

  render() {
    return (
      <div style={{transformOrigin: 'left top 0', width:'1200px', transform: 'matrix(1,0,0,1,0,0)' }}>
        <div style={{width:'100%',height:'100%'}}>
          <div
            style={{height:500}}
            ref={(el)=>this.container = el}
          />
        </div>
      </div>
    )
  }
}
