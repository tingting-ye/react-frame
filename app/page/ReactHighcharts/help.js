import * as _ from 'lodash'

const initConfig = {
  time:{ useUTC: false },
  credits: { enabled: false }, // 版权信息
  rangeSelector: { enabled: false }, // 隐藏顶部范围选择器
  navigator: { enabled: false }, // 隐藏底部导航器
  scrollbar: { enabled: false }, // 隐藏底部滚动条
  title: { text: null }, // 隐藏图表标题
  xAxis: {
    type: 'datetime',
    labels: {
      align: 'left',
      format:'{value:%H:%M:%S}'
    }
  },
  yAxis: [],
  series: [],
  tooltip: {
    shared: false, // 不共享数据
    split: false, // 只显示当前图表内的点位信息
  }
}

const yAxisConfig = {
  opposite: false, // y轴放在左侧
  resize: { enabled: true }, // 上下可拖拽
  lineWidth: 1,
  offset: 0,
  labels: {
    align: 'right',
    format: '{value}'
  }
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
  const timeArr = _.map(initConfig.series[0].data, record=> record.x)
  const minRange =  (timeArr[timeArr.length-1] - timeArr[0])/5;
  const pos = []
  for(let i = 0; i<5;i+=1) {
    pos.push(timeArr[timeArr.length-1] - i*minRange)
  }
  console.log(pos);
  return initConfig
}

export function mockData() {
  const arr = []
  const nowTime = new Date().valueOf();
  for(let i = 0; i<10;i+=1) {
    const time = nowTime + 1000 * i;
    const value = Math.random() * 100
    arr.push({x:time,y:value})
  }
  return arr;
}
