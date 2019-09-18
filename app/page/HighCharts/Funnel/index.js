import React, { Component } from 'react'
import { Button, Select } from 'antd'
import * as _ from 'lodash'
import Highcharts from "highcharts/highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import Funnel from 'highcharts/modules/funnel'

import BaseChart from '../BaseChart'

HighchartsMore(Highcharts)
Funnel(Highcharts)

export default class index extends BaseChart {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.customConfig = {
      chart: {
        type: 'funnel' // 类型
      },
      plotOptions: {
        series: {
          neckWidth: '30%', //颈宽
          neckHeight: '25%', // 颈髙
          borderColor: '#ffffff', // 边框颜色
          borderWidth: 1, // 边框宽度
          dataLabels: {  // 数据标签
            inside:true, // 标签放在内置还是外侧
            enabled: true, // 标签显示(隐藏)
            borderWidth: 0, //标签边框宽度
            borderRadius: 0, // 标签边框圆角
            borderColor: undefined, // 标签边框颜色
            backgroundColor: undefined, // 标签颜色
            color: null, // 标签文字颜色
            padding: 5, // 标签内边距
            style: {
              fontSize: '12px' // 标签字体大小
            },
            crop : false, // 标签超出绘图区时是否隐藏
            overflow: 'none', // 标签超出绘制区处理
            format: '{point.name}:{point.y}', // 显示格式
          }
        }
      },
      series: [{
        name: '用户',
        data: [
          ['访问网站',   15654],
          ['下载产品',       4064.66666],
          ['询价', 1987],
          ['发送合同',    976],
          ['成交',    846]
        ]
      }]
    }
    this.currentConfig = _.merge({},this.initConfig,this.customConfig);
  }

  componentDidMount(){
    this.chart = Highcharts.chart(this.container, this.currentConfig,(chart)=>this.tipRender(chart));
  }

  // 对this.currentConfig进行过滤，排除多余参数
  mergeConfig = () => {

  }

  // 将基础配置传参给组态配置区域-漏斗图样式
  getFunnelConfig = () => {
    return this.currentConfig.plotOptions.series;
  }

  // 获取修改后的配置，更新图表，替换数据
  setFunnelConfig = (seriesConfig) => {
    const ObjConfig = { series: seriesConfig }
    this.updateConfigNew('plotOptions',ObjConfig);
  }

  selectFormat = (value)=> {
    const ObjConfig = { dataLabels:{ format: value } }
    this.setFunnelConfig(ObjConfig);
  }

  tipRender=(chart)=>{
    console.log(chart)
    let maxLabelLength = 0;
    _.forEach(chart.series[0].points,point => {
      if(point.dataLabel.width > maxLabelLength) {
        maxLabelLength = point.dataLabel.width;
      }
    });
    maxLabelLength = Math.ceil(maxLabelLength)
    chart.update({
      chart: { marginRight: maxLabelLength },
      title: { x: - maxLabelLength / 2 }
    })
  }

  render() {
    const Option = [
      {value:'{point.name}',name:'名称'},
      {value:'{point.percentage:.2f}%',name:'百分比'},
      {value:'{point.y}',name:'值'},
      {value:'{point.name}:{point.percentage:.2f}',name:'名称：百分比'},
      {value:'{point.name}:{point.y}',name:'名称：值'},
      {value:'{point.y}:{point.percentage:.2f}',name:'值：百分比'},
      {value:'{point.name}({point.percentage:.2f}):{point.y}',name:'名称(百分比):值'},
    ]
    return (
      <div style={{minWidth: '410px', maxWidth: '600px',height: '400px' ,margin: '0 auto',border:'1px red solid',overflow:'hidden'}}>
        <Select style={{ width: 120 }} onChange={this.selectFormat}>
          { _.map(Option,(item,index)=><Select.Option key={index} value={item.value}>{item.name}</Select.Option>)}
        </Select>
        <Button onClick={()=> this.setFunnelConfig(this.updateConfig)}>修改参数配置</Button>
        <div style={{width:'100%',height:'100%'}} ref={(el)=>{this.container = el}}/>
      </div>
    )
  }
}
