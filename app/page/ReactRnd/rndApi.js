import React, { Component } from 'react'
import Rnd from "react-rnd"
import { Button } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 200,
      height: 200,
      x: 100,
      y: 100,
    }
  }

  /**
   *  dir:拉升组件的方向
   *  ref:拖拽的组件实例
   *  delta:组件的大小
   *  position:组件的位置
   */

  onResize = (e, dir, ref, delta, position) => {
    this.setState({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
      ...position,
    });
  }

  onDragStop = (e, d) => {
    this.setState({ x: d.x, y: d.y })
  }

  // 改变组件大小
  updateSize = () => {
    this.setState({ width: 400, height: 300 })
    this.rnd.updateSize({ width: 400, height: 300 })
  }

  // 改变组件位置
  updatePosition = () => {
    this.setState({ x: 400, y: 300 })
    this.rnd.updatePosition({ x: 400, y: 300 })
  }

  // 改变组件层级(两个以及两个以上组件比较较为清晰)
  updateZIndex = () => {
    this.setState({ z: 1 })
    this.rnd.updatePosition({ z: 1 })
  }

  render() {
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'solid 1px #ddd',
      background: '#f0f0f0',
    };
    return (
      <div className="page">
        <div className="page-content">
          <Button onClick={this.updateSize}>updateSize</Button>
          <Button onClick={this.updatePosition}>updatePosition</Button>
          <Button onClick={this.updateZIndex}>updateZIndex</Button>
          <Rnd
            style={style}
            ref={c => { this.rnd = c }}
            size={{ width: this.state.width, height: this.state.height }}
            position={{ x: this.state.x, y: this.state.y }}
            onResize={this.onResize} // 改变组件大小中
            onDragStop={this.onDragStop} // 结束改变组件位置时
          >Rnd
          </Rnd>
        </div>
      </div>
    );
  }
}
