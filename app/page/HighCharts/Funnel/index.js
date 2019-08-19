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
        type: 'funnel'
      },
      plotOptions: {
        series: {
          neckWidth: '30%',
          neckHeight: '25%',
          borderColor: '#ffffff',
          borderWidth: 1,
          dataLabels: {  // 数据标签
            enabled: true,
            borderWidth: 0,
            borderRadius: 0,
            borderColor: undefined,
            backgroundColor: undefined,
            color: null,
            padding: 5,
            style: {
              fontSize: '12px'
            }
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
      }],
      plotOptions: {
        series: {
          dataLabels: {
            crop : false,
            overflow: 'none',
            format: '{point.name}:{point.y}',
            softConnector: true
          }
        }
      }
    }
    this.currentConfig = _.merge({},this.initConfig,this.customConfig);
  }

  componentDidMount(){
    this.chart = Highcharts.chart(this.container, this.currentConfig);
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
    const ObjConfig = { dataLabels:{ format: value} }
    this.setFunnelConfig(ObjConfig);
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
          {
            _.map(Option,(item,index)=>
              <Select.Option key={index} value={item.value}>{item.name}</Select.Option>
            )
          }
        </Select>
        <Button onClick={()=> this.setFunnelConfig(this.updateConfig)}>修改参数配置</Button>
        <div style={{width:'100%',height:'100%'}} ref={(el)=>{this.container = el}}/>
      </div>
    )
  }
}
