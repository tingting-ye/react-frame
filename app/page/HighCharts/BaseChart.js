import React, { Component } from 'react'
export default class BaseChart extends Component {
  constructor(props) {
    super(props)
    this.initConfig = {
      chart: {
        spacingBottom: 15, // 下内边框
        spacingLeft: 10, // 左内边框
        spacingRight: 10, // 右内边框
        spacingTop: 10, // 上内边框
        borderWidth: 0, // 边框宽度
        borderRadius: 0 , // 边框圆角
        borderColor: '#335csd', // 边框颜色
        backgroundColor: "rgba(0,0,0,0)", // 背景色
        plotBackgroundColor: "rgba(0,0,0,0)" // 绘制区背景色
      },
      title: {
        text: '标题',
        align: 'center',
        style: {
          fontFamily: '微软雅黑',
          fontSize: '16px', // 必须跟px否则会出现部分title消失的情况
          color: '#333333',
          fontWeight: 'initial',
          fontStyle: 'initial'
        }
      },
      subtitle: {
        text: null,
        align: 'center',
        style: {
          fontFamily: '微软雅黑',
          fontSize: '12px', // 必须跟px否则会出现部分title消失的情况
          color: '#333333',
          fontWeight: 'initial',
          fontStyle: 'initial'
        }
      },
      plotOptions: {

      },
      credits: {
        enabled: false, // 备注显隐
        text: null // 备注内容
      },
      extra: {
        zIndex: 100
      }
    }
  }

  // 将基础配置传参给组态配置区域-chart
  getChartConfig = () => {
    return this.currentConfig.chart;
  }

  // 获取修改后的配置，更新图表，替换数据
  setChartConfig = (chartConfig) => {
    this.updateConfigNew('chart',chartConfig)
  }

  // 将基础配置传参给组态配置区域-title
  getTitleConfig = () => {
    return this.currentConfig.title;
  }

  // 获取修改后的配置，更新图表，替换数据
  setTitleConfig = (titleConfig) => {
    this.updateConfigNew('title',titleConfig)
  }

  // 更新整体配置，用于保存
  updateConfigNew = (key,value)=> {
    this.chart.update({[key]:value})
    this.currentConfig = _.merge({}, this.currentConfig, {[key]:value});
  }
}


