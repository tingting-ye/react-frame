import React, { Component } from 'react'
const ReactHighChart = require("react-highcharts")
import moment from 'moment'

const timeTemp = []
let activePointTime = null
let myPlotLine = null
export default class index extends Component {
  constructor(props) {
    super(props)
    this.config = {
      chart: {
        type: 'line',
        animation: false,
      },
      title: {
        text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
      },
      xAxis: {
        type: 'datetime',
        labels: {
          format: '{value:%H:%M:%S}',
          enabled: true,
          style: { color: '#666666' },
        },
        gridLineWidth: 1,
        gridLineColor: '#C0C0C0'
      },
        yAxis: {
          labels:{
            enabled:true,
          },
          tickAmount:5,
          title: {
            text: null
          },
          showFirstLabel: false
        },
        series: [],
      }
  }

  componentDidMount() {
    this.chart.Highcharts.setOptions({ global: { useUTC: false } })
    const chart = this.chart.getChart()
    const { series } = chart
    const config = this.config
    const newPoint1 = {
      name:"v90",
      color:'rgb(255,130,0)',
      data:[]
    }
    chart.addSeries(newPoint1)
    const self = this
    setInterval(function () {
      // self.updateToop()
      var x = Date.parse(new Date()), // 当前时间
        y = Math.random()*100;          // 随机值、
        const tickPositions = []
        for(let i=0;i<6;i+=1){
          const time = x-(120000/5*i)
          tickPositions.push(time)
        }
        config.xAxis.tickPositions = tickPositions
        chart.update(config)
        chart.xAxis[0].setExtremes(tickPositions[5],tickPositions[0])
        if(series[0].data.length>=120){
          series[0].addPoint([x, y], false, true);
        }else{
          series[0].addPoint([x, y], false, false);
        }
        chart.redraw()
    }, 1000);
  }

  componentWillReceiveProps () {
    if(this.chart){
      this.chart.getChart().reflow()
    }
  }

  shouldComponentUpdate(nextProps){
    if (this.props.item!==nextProps.item){
      return false
    }
  }

  render() {
    return (
      <div style={{ width: '70%', margin: '50px auto', border: '1px solid yellow' }}>
        <ReactHighChart
          config={this.config}
          ref={(el) => { this.chart = el }}
        />
      </div>
    )
  }
}
