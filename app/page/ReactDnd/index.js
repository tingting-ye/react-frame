import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import ItemTypes from './Constants';

let ctrlName = ''

const cardSource = {
  drop(props, monitor) {
    if(monitor.isOver()){
      const { Widget } = monitor.getItem()
      ctrlName = Widget
    }
  }
};

@DropTarget(ItemTypes.Chart, cardSource, (connect, monitor) => ({
  connectDragTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  isOver: monitor.isOver()
}))
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    debugger
    const {connectDragTarget} = this.props;
    return connectDragTarget(
      <div style={{
        width: '900px'
      }}>
        sdfafe
      </div>
    )
  }
}
