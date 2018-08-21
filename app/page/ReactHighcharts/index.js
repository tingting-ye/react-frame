import React, { Component } from 'react'
const ReactHighChart = require("react-highcharts")
import moment from 'moment'

const timeTemp = []
let activePointTime = null
export default class index extends Component {
  constructor(props) {
    super(props)
    this.config= {
        chart:{
          type:'line',
          animation:false,
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
      this.config.chart.events = {
        click: function(e) {
          console.log(e)
          // 当前选中的点的时间。。
          let nowTime = e.xAxis[0].value
          let nowX = e.chartX
          // 从timeTemp中获取最近的一个时间点，没有对应坐标，则使用选中的时间（需要做处理）
          for(let i=0;i<timeTemp.length-1;i++){
            if(timeTemp[i]<nowTime && nowTime<timeTemp[i+1]){
              if(nowTime-timeTemp[i]<timeTemp[i+1]-nowTime){
                nowTime = timeTemp[i]
              }else{
                nowTime = timeTemp[i+1]
              }
            }
          }
          // 对数据进行处理，保证是整秒数据
          nowTime = Math.round( nowTime/1000 ) * 1000
          // 坐标开始时间
          const startTime = this.xAxis[0].tickPositions[this.xAxis[0].tickPositions.length-1]
          // 计算滑竿
          nowX  = (nowTime-startTime)*this.plotWidth/120000+this.yAxis[0].left
          console.log(nowX)
          console.log(e.chartX)
          if(this.myPlotLine) {
            this.myPlotLine.destroy();
          }
          this.myPlotLine = this.renderer.path(['M', nowX, this.plotTop, nowX, this.plotHeight + this.plotTop])
          .attr({
            stroke: '#68228B',
            zIndex: 6,
            'stroke-width': 1
          })
          .add();
          activePointTime =  nowTime
        }
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
        y = Math.random()*100;          // 随机值、
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
          activePointTime+=1000
          console.log(moment(activePointTime).format("YYYY-MM-DD HH:mm:ss"))
          const points = series[1].points;
          const index = timeTemp.indexOf(activePointTime)>=0?timeTemp.indexOf(activePointTime):null
          if(index!==null && index>=0){
            const activePoint = points[index === null ? points.length -1 : index];
            // chart.tooltip.refresh(activePoint);
            activePoint.select();
            chart.xAxis[1].drawCrosshair(null, activePoint);
          }
        }
    }, 1000);
  }

  render() {
    return (
      <div style={{width:900,margin:'50px auto',border:'1px solid yellow'}}>
        <ReactHighChart
          config = {this.config}
          ref = {(el) => {this.chart = el}}
        />
      </div>

    )
  }
}
