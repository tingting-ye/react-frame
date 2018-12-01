import React, { Component } from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import DragPanes from "highcharts/modules/drag-panes";
import * as _ from 'lodash'

import { getConfig } from "./help";

HighchartsMore(Highcharts)
DragPanes(Highcharts)

export default class index extends Component {
  constructor(props) {
    super(props)
    this.dataSource = ['a','b','c','d']
  }

  componentDidMount(){
    const Option = getConfig(this.dataSource);
    this.chart = Highcharts.stockChart(this.container, Option)
  }

  render() {
    return (
      <div style={{width:1500,margin:'50px auto'}}>
        <div
          style={{height:500}}
          ref={(el)=>this.container = el}
        />
      </div>
    )
  }
}
