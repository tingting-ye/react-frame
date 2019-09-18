import React, { Component } from 'react'
import { Spin } from 'antd'
import * as _ from 'lodash'
import './iframe.less'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iframeUrl: ['https://www.baidu.com/','https://www.qq.com/','https://ant.design/index-cn','https://www.highcharts.com.cn/'], // url路径
      iframeShowPoint: 0, // 当前显示的iframe
    }
    this.iframeShowPoint = 0;
    this.cutIframe = null;
  }

  componentDidMount () {
    this.createIframe()
  }

  componentWillUnmount () {
    clearInterval(this.cutIframe)
  }

  createIframe = () =>{
    const { iframeUrl } = this.state;
    _.forEach(iframeUrl,(src,key)=>{
      //在document中创建iframe
      var iframe = document.createElement("iframe");
      //设置iframe的样式
      iframe.frameborder = "no";
      iframe.src = src;
      iframe.sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts allow-popups"
      iframe.className = key===0 ? "visible" : "hidden";
      //把iframe加载到dom下面
      this.iframeContext.appendChild(iframe);
    })
    this.setIframeTime()
  }

  setIframeTime =()=> {
    const { iframeUrl } = this.state;
    if(iframeUrl.length<=1) return;
    this.cutIframe = setInterval(()=>{
    this.iframeContext.childNodes[this.iframeShowPoint].className = 'hidden';
      const iframeShowPoint = this.rightClickNumber()
      this.iframeShowPoint = iframeShowPoint;
      this.iframeContext.childNodes[iframeShowPoint].className = 'visible';
    },10000)
  }

  rightClickNumber = () => {
    const { iframeUrl } = this.state;
    let { iframeShowPoint } = this;
    if(iframeUrl.length-1 >iframeShowPoint) {
      iframeShowPoint += 1;
    } else {
      iframeShowPoint = 0
    }
    return iframeShowPoint
  }

  cutIframeClick = (type) => {
    const { iframeUrl } = this.state;
    if(iframeUrl.length<=1) return;
    clearInterval(this.cutIframe);
    let { iframeShowPoint } = this;
    this.iframeContext.childNodes[iframeShowPoint].className = 'hidden';
    if (type==="left") {
      if(iframeShowPoint === 0) {
        iframeShowPoint = iframeUrl.length - 1;
      } else {
        iframeShowPoint -= 1;
      }
    }else {
      iframeShowPoint = this.rightClickNumber()
    }
    this.iframeShowPoint = iframeShowPoint;
    this.iframeContext.childNodes[iframeShowPoint].className = 'visible';
    // 发生点击事件，清除定时器 重新定时。
    this.setIframeTime();
  }

  // iframeHtml = ()=>{
  //   const { iframeUrl, iframeShowPoint } =this.state
  //   return _.map(iframeUrl, (iframeItem,key) => {
  //     return (
  //       <iframe
  //         frameBorder="no"
  //         onLoad={null}
  //         sandbox="allow-same-origin allow-top-navigation allow-forms allow-scripts"
  //         name={key}
  //         src={iframeItem}
  //         className={key===iframeShowPoint?'visible' :'hidden'}
  //       />
  //     )
  //   })
  // }

  render() {
    // const { iframeShowPoint, iframeUrl } = this.state;
    // const src = iframeUrl[iframeShowPoint];
    return (
      <div className="iframe_container">
        <div className="iframe_left" onClick={()=> this.cutIframeClick('left')}>左侧点击</div>
        <div className="iframe_context" ref={(el)=>this.iframeContext = el}>
          {/* {this.iframeHtml()} */}
          {/* <iframe src={src}/> */}
        </div>
        <div className="iframe_right" onClick={()=> this.cutIframeClick('right')}>右侧点击</div>
        {/* <div className="iframe_point">
          圆圈~
        </div> */}
      </div>
    )
  }
}
