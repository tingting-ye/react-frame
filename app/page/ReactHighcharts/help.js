import * as _ from 'lodash'

const initConfig = {
  time:{ useUTC: false },
  credits: { enabled: false }, // 版权信息
  rangeSelector: { enabled: false }, // 隐藏顶部范围选择器
  navigator: { enabled: false }, // 隐藏底部导航器
  scrollbar: { enabled: false }, // 隐藏底部滚动条
  title: { text: null }, // 隐藏图表标题
  chart: {
    animation: false
  },
  xAxis: {
    showFirstLabel: true,
    showLastLable:true,
    type: 'datetime',
    tickmarkPlecement: 'on',
    gridLineWidth:1,
    labels: {
      format:'{value:%H:%M:%S}'
    }
  },
  yAxis: [],
  series: [],
  tooltip: {
    shared: false, // 不共享数据
    split: false, // 只显示当前图表内的点位信息
    xDateFormat:'%Y-%m-%d %H:%M:%S'
  }
}

const yAxisConfig = {
  opposite: false, // y轴放在左侧
  resize: { enabled: true }, // 上下可拖拽
  lineWidth: 1,
  gridLineWidth:1,
  offset: 0,
  labels: {
    align: 'right',
    format: '{value}'
  },
  plotLines: [{
    color: '#FF0000',
    width: 2,
    value: 20,
    label: {
      text: 'Plot line',
      align: 'left',
      textAlign: 'right',
      x: 0
    }
}]
}

const seriesConfig = {
  type: 'line',
}

export function getYAxis(dataSource) {
  const yAxisArr = [];
  _.map(dataSource,(item,index)=>{
    const tempYAxis = _.merge({}, yAxisConfig);
    tempYAxis.id = `${item}y`;
    tempYAxis.name = item;
    tempYAxis.height = `${Math.round(100/dataSource.length)}%`
    tempYAxis.top = `${Math.round(index *(100/dataSource.length))}%`
    yAxisArr.push(tempYAxis);
  })
  return yAxisArr;
}

export function getSeries(dataSource) {
  const seriesArr = []
  _.map(dataSource,(item,index)=>{
    const tempSeries = _.merge({}, seriesConfig);
    tempSeries.id = item;
    tempSeries.data = mockData();
    tempSeries.name = item;
    tempSeries.yAxis = index;
    seriesArr.push(tempSeries);
  })
  return seriesArr;
}

export function getConfig(dataSource) {
  initConfig.yAxis = getYAxis(dataSource);
  initConfig.series = getSeries(dataSource);
  return initConfig
}

export function mockData() {
  const arr = []
  const nowTime = 1543802855000;
  for(let i = 0; i<120;i+=1) {
    const time = nowTime - 1000 * i;
    const value = Math.random() * 100
    arr.unshift({x:time,y:value})
  }
  return arr;
}

export function getTickPostions(time) {
  const minRange =  12000/12;
  const pos = []
  for(let i = 0; i<120;i+=1) {
    pos.unshift(time - i * minRange)
  }
  return pos;
}
