import React, { Component } from 'react'
import { Button } from 'antd'
const ReactHighChart = require("react-highcharts")


let i = 0;
let xValue = undefined

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      y:undefined,
      config: {
        title: {
          text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
        },
        tooltip: {
            formatter: function() {
                xValue = this.y
                return '<b>'+ this.x +
                  '</b> is <b>'+ this.y +'</b>';
            }
        },
        subtitle: {
          text: '数据来源：thesolarfoundation.com'
        },
        xAxis: {
          crosshair: true
        },
        yAxis: {
          title: {
            text: '就业人数'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010,
            events: {
              click: function (event) {
                this.chart.xAxis[0].drawCrosshair(event, this);
                console.log(event)
              }
          }
          }
        },
        series: [{
          name: '安装，实施人员',
          data: [
            {xValue: 2010 ,y:43934}, 
            {xValue: 2011 ,y:52503}, 
            {xValue: 2012 ,y:57177}, 
            {xValue: 2013 ,y:69658}, 
            {xValue: 2014 ,y:97031}, 
            {xValue: 2015 ,y:119931}, 
            {xValue: 2016 ,y:137133}, 
            {xValue: 2017 ,y:154175}, 
          ]
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      }
    }
  }

  componentDidMount = () => {
  }

  render() {
    console.log(xValue)
    return (
      <div>
        <ReactHighChart
          config = {this.state.config}
          ref = {(el) => {this.chart = el}}
        />
      </div>

    )
  }
}
