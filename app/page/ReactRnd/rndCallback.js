import React, { Component } from 'react'
import Rnd from "react-rnd"

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10,
    }
  }

  /**
   *  dir:拉升组件的方向
   *  ref:拖拽的组件实例
   *  delta:组件的大小
   *  position:组件的位置
   */
  onResizeStart = (e, dir, ref) => {
    console.log(e)
    console.log(dir)
    console.log(ref)
  }

  onResize = (e, dir, ref, delta, position) => {
    this.setState({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
      ...position,
    });
  }

  onResizeStop = (e, dir, ref, delta, position) => {
    console.log(e)
    console.log(dir)
    console.log(ref)
    console.log(delta)
    console.log(position)
  }

  onDragStart = (e, d) => {
    console.log(e)
    console.log(d)
  }

  onDrag = (e, d) => {
    console.log(e)
    console.log(d)
  }

  onDragStop = (e, d) => {
    console.log(e)
    console.log(d)
    this.setState({ x: d.x, y: d.y })
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
          <Rnd
            style={style}
            size={{ width: this.state.width, height: this.state.height }}
            position={{ x: this.state.x, y: this.state.y }}
            // onResizeStart = {this.onResizeStart} // 触发改变组件大小时
            onResize={this.onResize} // 改变组件大小中
            // onResizeStop = {this.onResizeStop} // 结束改变组件大小时
            // onDragStart={this.onDragStart} // 触发改变组件位置时
            // onDrag={this.onDrag}// 改变组件位置中
            onDragStop={this.onDragStop} // 结束改变组件位置时
          >Rnd
          </Rnd>
        </div>
      </div>
    );
  }
}
