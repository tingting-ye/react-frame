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
            // z={10} // z 当前组件的层级(有组件比对较明显)
            // resizeGrid={[1,5]} //指定调整大小的增量
            // dragGrid={[0,0]} //指定移动应捕捉的增量
            // lockAspectRatio={1/2} //锁定宽高比
            // dragHandleClassName={".handle"} // 设定只有“.handle”可以拖动
            // enableResizing={{top:true, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false}}
            // disableDragging = {true} // 禁止拖动
            // cancel={".cancel"} //禁止选择器内元素拖动组件
            // dragAxis={'none'} // 允许移动的方向
            size={{ width: this.state.width, height: this.state.height }}
            position={{ x: this.state.x, y: this.state.y }}
            onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
            onResize={(e, direction, ref, delta, position) => {
              this.setState({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                ...position,
              });
            }}
          >
            <div className="cancel">fdsf</div>
          </Rnd>
        </div>
      </div>
    );
  }
}
