import React, { Component } from 'react'
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import dragPanes from "highcharts/modules/drag-panes";

HighchartsMore(Highcharts)
dragPanes(Highcharts)

export default class index extends Component {
  constructor(props) {
    super(props)
    this.init();
  }

  componentDidMount() {
    // this.chart.Highcharts.setOptions({ global: { useUTC: false } })
    console.log(JSON.stringify(this.config))
    this.chart = Highcharts.chart(this.container,this.config)
    const timeHight = this.chart;
    setInterval(function () {
      let x = new Date().valueOf(), // 当前时间
        y = Math.random()*100;          // 随机值
        if(timeHight.series[0].data.length>500){
          timeHight.series[0].addPoint([x, y], false, true);
        }else{
          timeHight.series[0].addPoint([x, y], false, false);
        }
        // const start = x - 1000*500
        // timeHight.update({xAxis:{max:x,min:start}},false)
        timeHight.redraw()
        // timeHight.xAxis[0].setExtremes(start,x)
    }, 1000);
  }

  componentWillReceiveProps () {
  }

  init = ()=>{
    const data = this.mockData()
    this.config = {
      chart: {
        type: 'line',
        animation: false,
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          millisecond: '%H:%M:%S.%L',
          second: '%H:%M:%S',
          minute: '%H:%M',
          hour: '%H:%M',
          day: '%m-%d',
          week: '%m-%d',
          month: '%Y-%m',
          year: '%Y'
        },
        labels: {
          enabled: true,
          style: { color: '#666666' },
        },
        gridLineWidth: 1,
        gridLineColor: '#C0C0C0'
      },
      yAxis: [{
        labels:{
          enabled:true,
        },
        tickAmount:5,
        title: {
          text: null
        },
        showFirstLabel: false
      }],
      series: [{
        data
      }],
      // plotOptions: {
      //   series: {
      //     pointStart: data[0].x, // 开始值
      //     pointInterval: 1000 // 间隔一天
      //   }
      // },
    }
  }

  mockData=()=>{
    let x = new Date().valueOf(); // 当前时间
    const arr = [];
    for(let i=0;i<500;i++) {
      const a = x - i * 1000;
      const y = Math.random()*100;          // 随机值
      const point = {x:a,y};
      arr.unshift(point)
    }
    return arr;
  }

  render() {
    return (
      <div style={{ width: '70%', margin: '50px auto', border: '1px solid yellow' }}>
        <div ref={(el)=>{this.container = el}}/>
      </div>
    )
  }
}
