import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const sourceSpec = {
  beginDrag(props) {
      return {
          id: props.id,
          index: props.index
      }
  },
  endDrag(item, monitor) {
    const dropResult = monitor.getDropResult()
    if (item && dropResult) {
      alert(`You dropped ${item.content} into ${dropResult.name}!`)
    }
  },
}

const targetSpec = {
  drop: (props) => {
    console.log(props)
    return {name:props.content}
  }
}

// DragSource用于包装你需要拖动的组件，使组件能够被拖拽
// DropTarget 用于包装接收拖拽元素的组件，使组件能够放置
const DndWay = (targetType,dragSourceType) => (WrappedComponent) => {
  if(!dragSourceType) {
    dragSourceType = targetType
  }
  return class extends Component {
    render() {
      const WrapHoc = DropTarget(targetType, targetSpec, connect => ({
        connectDropTarget: connect.dropTarget()
      }))(
        DragSource(dragSourceType, sourceSpec, (connect, monitor) => ({
          connectDragSource: connect.dragSource(),
          isDragging: monitor.isDragging()
        }))(WrappedComponent)
      );

      return <WrapHoc {...this.props} />;
    }
  };
};

export default DndWay;
