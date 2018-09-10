import React, { Component } from 'react'
import Rnd from "react-rnd"
import HighChart from '../ReactHighcharts/index'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 500,
      height: 500,
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
          <p>X位置{this.state.x}</p>
          <p>Y位置{this.state.y}</p>
          <p>宽度{this.state.width}</p>
          <p>高度{this.state.height}</p>
          <Rnd
            style={style}
            maxWidth={1500} // 最大值maxWidth（maxHeight）、最小是minWidth（minHeight）
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
          ><HighChart item={this.state}/></Rnd>
        </div>
      </div>
    );
  }
}
