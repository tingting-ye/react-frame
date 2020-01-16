import React, { Component } from 'react'
import { Button, Select } from 'antd'
import {} from 'lodash'
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import Histogram from 'highcharts/modules/histogram-bellcurve';
import HighchartsReact from '../HighchartsReact';
import BaseChart from '../BaseChart'

Histogram(Highcharts);
HighchartsMore(Highcharts);

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.initConfig = {
      /** 公共配置 */
      // 图表配置 边框（宽度 圆角 颜色） 上下左右边距 背景色 图表颜色
      // 主标题 标题 文本样式（字体 大小 颜色 粗细 倾斜） 对齐方式
      // 副标题 标题 文本样式（字体 大小 颜色 粗细 倾斜） 对齐方式
      // x轴 是否显示 网格线 刻度（初始值 间隔） 标题 文本样式（字体 大小 颜色 粗细 倾斜） 标题位置 轴线颜色 轴字颜色 旋转角度 竖排文字
      // y轴 是否显示 网格线 准星线 单位 刻度（初始值 间隔） 标题 文本样式（字体 大小 颜色 粗细 倾斜） 标题位置 轴线颜色 轴字颜色 旋转角度 最大值
      // 图例 是否显示 边框（宽度 圆角 颜色） 对齐方式 布局方式 文本样式（字体 大小 颜色 粗细 倾斜） 背景色
      // 标签 是否显示 边框（宽度 圆角 颜色）标签颜色 背景颜色 对齐方式 数据（格式 位数）字体大小 内间距
      // 备注 是否显示 备注信息
      extra: {
        zIndex: 100, // 定位层级
        intervalTime: 0, // 定时器
        isFullscreenIcon: false, // 当前图表是否全局显示
        yAxisUnit: '' // y轴单位
      },
      chart: {
        animation: false, // 整体动画
        showAxes: true, // 初始化显示坐标轴
        borderWidth: 0, // 边框（宽度）
        borderRadius: 0, // 边框（圆角）
        borderColor: '#ddd', // 边框（颜色）
        spacingTop: 10, // 边距-上
        spacingRight: 10, // 边距-右
        spacingBottom: 10, // 边距-下
        spacingLeft: 10, // 边距-左
        backgroundColor: 'rgba(0, 0, 0, 0)', // 背景色
        plotBackgroundColor: 'rgba(0, 0, 0, 0)', //图表颜色
      },
      title: {
        text: undefined, // 标题
        style: {
          fontFamily: "微软雅黑", // 文本样式(字体)
          fontSize: 16, // 文本样式(大小)
          color: '#272C3D', // 文本样式(颜色)
          fontWeight: 'normal', // 文本样式(粗细)
          fontStyle: 'normal' // 文本样式(倾斜)
        },
        align: 'center' // 标题位置
      },
      subtitle: {
        text: undefined, // 标题
        style: {
          fontFamily: "微软雅黑", // 文本样式(字体)
          fontSize: 16, // 文本样式(大小)
          color: '#272C3D', // 文本样式(颜色)
          fontWeight: 'normal', // 文本样式(粗细)
          fontStyle: 'normal' // 文本样式(倾斜)
        },
        align: 'center' // 标题位置
      },
      xAxis: [{
          /** x轴内容 提出 */
          startOnTick: false, // 强制开始刻度（配合刻度）
          visible: true,  // 是否显示X轴
          gridLineWidth: 0, // 网格线
          min: null, // 刻度（初始值）
          tickInterval:undefined, // 刻度（间隔）
          title: {
            text: undefined, // 标题
            style: {
              fontFamily: "微软雅黑", // 文本样式(字体)
              fontSize: 16, // 文本样式(大小)
              color: '#272C3D', // 文本样式(颜色)
              fontWeight: 'normal', // 文本样式(粗细)
              fontStyle: 'normal' // 文本样式(倾斜)
            },
            align: 'center' // 标题位置
          },
          lineColor:'#ccd6eb', // 轴线颜色
          labels:{ // 轴标签
            style: {
              color: '#666666', // 轴字颜色
              writingMode: "" // 竖排文字
            },
            rotation: 0 // 旋转角度
          },
      }],
      yAxis: [{
          /** y轴内容 提出 */
          startOnTick: false, // 强制开始刻度（配合刻度）
          endOnTick: false, // 强制结束刻度（配合刻度）
          visible: true,  // 是否显示X轴
          gridLineWidth: 0, // 网格线
          crosshair: false, // 准星线
          min: null, // 刻度（初始值）
          max: null, // 刻度（最大值）
          tickInterval:undefined, // 刻度（间隔）
          title: {
            text: undefined, // 标题
            style: {
              fontFamily: "微软雅黑", // 文本样式(字体)
              fontSize: 16, // 文本样式(大小)
              color: '#272C3D', // 文本样式(颜色)
              fontWeight: 'normal', // 文本样式(粗细)
              fontStyle: 'normal' // 文本样式(倾斜)
            },
            align: 'center' // 标题位置
          },
          lineColor:'#ccd6eb', // 轴线颜色
          labels:{ // 轴标签
            style: {
              color: '#666666', // 轴字颜色
              writingMode: "" // 竖排文字
            },
            rotation: 0 // 旋转角度
          },
          plotLines: [] // 预警线
      }],
      legend: {
        enabled: false, // 是否显示
        borderWidth: 0, // 边框（宽度）
        borderRadius: 0, // 边框（圆角）
        borderColor: '#ddd', // 边框（颜色）
        align: 'center', // 对齐方式(水平)
        verticalAlign: 'middle',  // 对齐方式（垂直）
        layout: 'horizontal', // 布局方式
        title: {
          text: undefined, // 标题
          style: {
            fontFamily: "微软雅黑", // 文本样式(字体)
            fontSize: 16, // 文本样式(大小)
            color: '#272C3D', // 文本样式(颜色)
            fontWeight: 'normal', // 文本样式(粗细)
            fontStyle: 'normal' // 文本样式(倾斜)
          },
        },
        backgroundColor: 'rgba(0, 0, 0, 0)'
      },
      plotOptions: {
        series: {
          dataLabels : { // 标签
            enabled: false, // 是否显示
            borderWidth: 0, // 边框（宽度）
            borderRadius: 0, // 边框（圆角）
            borderColor: '#ddd', // 边框（颜色）
            color: '#272C3D', // 标签颜色
            backgroundColor: undefined, // 背景颜色
            align: 'center', // 对齐方式(水平)
            padding: 5, // 内间距
            style: {
              fontSize: 11 // 字体大小
            }
          }
        }
      },
      // 标签  数据（格式 位数）字体大小
      series: [],
      credits: { // 备注(版权信息)
        enabled: false, // 是否显示
        text: undefined, // 信息
      },
    }
    // y轴 预警线（最大最小值 颜色 数值）
    this.customConfig = {
      extra: {
        bellcurve: false, // 拟合线（直方图&正态分布）
      }
    }
    this.currentConfig = _.merge({},this.initConfig,this.customConfig);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div style={{minWidth: '410px', maxWidth: '600px',height: '400px' ,margin: '0 auto',overflow:'hidden'}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={this.currentConfig}
          ref={(el) => { this.chart = el; }}
        />
      </div>
    )
  }
}
