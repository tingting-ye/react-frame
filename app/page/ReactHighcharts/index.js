import React, { Component } from 'react'
const ReactHighChart = require("react-highcharts")

export default class index extends Component {
  constructor(props) {
    super(props)
    this.config= {
        chart:{
          type:'line',
          animation:false
        },
        title: {
          text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
        },
        xAxis: [{
          type:'datetime',
          labels:{
            format:'{value:%H:%M:%S}',
            enabled:true,
            style:{color:'#666666'},
          },
          gridLineWidth:1,
          gridLineColor:'#C0C0C0'
        },{
          tickWidth:0,
          opposite:true,
          type:'datetime',
          gridLineDashStyle:'Solid',
          labels:{
            format:'{value:%H:%M:%S}',
            enabled:true,
            style:{color:'#666666'},
          },
          gridLineWidth:1,
          crosshair:{
            color:'#666666',
            width:1
          },
          visible:true
        }],
        yAxis: {
          tickAmount:5,
          title: {
            text: null
          }
        },
        plotOptions: {
          series: {
            // events: {
            //   click: function (event) {
            //     this.chart.xAxis[0].drawCrosshair(event, this);
            //     console.log(event)
            //   }
            // }
          }
        },
        series: [],
      }
  }

  componentDidMount(){
    this.chart.Highcharts.setOptions({global:{useUTC:false}})
    const chart = this.chart.getChart()
    const { series } = chart
    const config = this.config
    // 在图表渲染完毕后对图表进行新增数据列操作
    const newPoint0 = {
      xAxis:0,
      name:"initSeries",
      color:'rgb(0,0,0)',
      data:[0,0,0,0,0]
    }
    chart.addSeries(newPoint0)
    const newPoint1 = {
      xAxis:1,
      name:"v90",
      color:'rgb(255,130,0)',
      data:[]
    }
    chart.addSeries(newPoint1)
    setInterval(function () {
      var x = (new Date()).getTime(), // 当前时间
        y = Math.random()*100;          // 随机值
        const tickPositions = []
        for(let i=0;i<6;i+=1){
          const time = x-(120000/5*i)
          tickPositions.push(time)
        }
        config.xAxis[0].tickPositions = tickPositions
        config.xAxis[1].tickPositions = tickPositions
        chart.update(config)
        chart.xAxis[0].setExtremes(tickPositions[5],tickPositions[0])
        chart.xAxis[1].setExtremes(tickPositions[5],tickPositions[0])
        if(series[1].data.length>=100){
          series[1].addPoint([x, y], false, true);
        }else{
          series[1].addPoint([x, y], false, false);
        }
        chart.redraw()
    }, 2000);
  }

  render() {
    return (
      <div style={{width:900}}>
        <ReactHighChart
          config = {this.config}
          ref = {(el) => {this.chart = el}}
        />
      </div>

    )
  }
}
