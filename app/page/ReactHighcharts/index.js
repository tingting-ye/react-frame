import React, { Component } from 'react'
const ReactHighChart = require("react-highcharts")

const timeTemp = []
let activePointTime = null
export default class index extends Component {
  constructor(props) {
    super(props)
    this.config= {
        chart:{
          type:'line',
          animation:false,
          events: {
            click: function(e) {
              // 获取点击的时间，以整秒为准
              console.log(this)
              const nowTime = e.xAxis[0].value
              // const nowTime =Math.floor( e.xAxis[0].value/1000 ) * 1000
              var renderer = this.renderer
              const startTime = this.xAxis[0].tickPositions[this.xAxis[0].tickPositions.length-1]
              const totalWidth =this.xAxis[0].width
              const x = (nowTime-startTime)*totalWidth/120000+this.xAxis[0].transB;
              console.log(e.chartX)
              console.log(x)
              // const x = e.chartX
              if(this.myPlotLine) {
                this.myPlotLine.destroy();
              }
              this.myPlotLine = renderer.path(['M', x, this.plotTop, x, this.plotHeight + this.plotTop])
              .attr({
                stroke: '#68228B',
                zIndex: 6,
                'stroke-width': 1
              })
              .add();
              activePointTime=  nowTime
            }
          }
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
          crosshair: false,
          visible:true
        }],
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
      var x = Date.parse(new Date()), // 当前时间
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
        if(series[1].data.length>=120){
          timeTemp.splice(0,1)
          timeTemp.push(x)
          series[1].addPoint([x, y], false, true);
        }else{
          timeTemp.push(x)
          series[1].addPoint([x, y], false, false);
        }
        chart.redraw()
        if(activePointTime!==null){
          const points = series[1].points;
          const index = timeTemp.indexOf(activePointTime)>=0?timeTemp.indexOf(activePointTime):null
          if(index!==null && index>=0){
            const activePoint = points[index === null ? points.length -1 : index];
            chart.tooltip.refresh(activePoint);
            activePoint.select();
            chart.xAxis[1].drawCrosshair(null, activePoint);
          }
          activePointTime+=1000
        }
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
