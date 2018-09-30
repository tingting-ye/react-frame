import React, { Component } from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highchartsmore from 'highcharts/highcharts-more'
import * as _ from 'lodash'
import moment from 'moment'

Highchartsmore(Highcharts)

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
        yAxis: [{
          labels:{
            format:'{value}%',
            enabled:true,
          },
          tickAmount:5,
          title: {
            text: null
          },
          showFirstLabel: false
        },{
            labels:{
            format:'{value}%',
              enabled:false,
            },
            tickAmount:5,
            title: {
              text: null
            },
            showFirstLabel: false
          }],
        series: [],
      },
      this.dataSource = ['source1','source2','source3','source4','source5','source6','source7'];
  }

  componentDidMount(){
    Highcharts.setOptions({global:{useUTC:false}})
    const { chart } = this.chart
    const { series } = chart
    // 在图表渲染完毕后对图表进行新增数据列操作
    const newPoint0 = {
      xAxis:0,
      yAxis:0,
      name:"initSeries",
      color:'rgb(0,0,0)',
      data:[0,0,0,0,0]
    }
    chart.addSeries(newPoint0)
    const newPoint1 = {
        xAxis:1,
        yAxis:1,
        name:"showSource",
        color:'rgb(0,0,0)',
        data:[0,0,0,0,0]
    }
    chart.addSeries(newPoint1)
    _.map(this.dataSource,(val,key)=>{
        chart.addAxis({ 
            tickWidth:0,
            opposite:true,
            type:'datetime',
            gridLineDashStyle:'Solid',
            labels:{
              format:'{value:%H:%M:%S}',
              enabled:false,
              style:{color:'#666666'},
            },
            gridLineWidth:1,
            crosshair: false,
            visible:true
        },true)
        const opposite = key % 2 === 1 ? true:false;
        chart.addAxis({ // Secondary yAxis
            opposite:opposite,
            labels:{
            format:'{value}',
              enabled:true,
            },
            tickAmount:5,
            title: {
              text: null
            },
            showFirstLabel: false
		})
        const newPoint1 = {
          xAxis: key+2,
          yAxis: key+2,
          name: val,
          color:'rgb(255,130,0)',
          data:[0,0,0,0,0]
        }
        chart.addSeries(newPoint1)
    })
    this.interValData()
  }

  interValData = () => {
    const { chart } = this.chart
    const { series } = chart
    const config = this.config
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
          series[1].addPoint([x, y], false, true);
        }else{
          series[1].addPoint([x, y], false, false);
        }
        chart.redraw()
    }, 1000);
  }

  render() {
    return (
      <div style={{width:1500,margin:'50px auto',border:'1px solid yellow'}}>
        <HighchartsReact
          highcharts={Highcharts}
          options = {this.config}
          ref = {(el) => {this.chart = el}}
        />
      </div>

    )
  }
}
