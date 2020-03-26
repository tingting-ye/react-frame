import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      content,
      width,
      isActive,
      className,
      isDragging,
      connectDragSource,
      connectDropTarget,
      style
    } = this.props;

    const opacity = isDragging ? 0 : 1;
    const borderColor = isActive ? 'rgb(24,144,225)' : '#ddd';

    return connectDragSource(
      connectDropTarget(
        <div
          className={className}
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            marginBottom: '.5rem',
            border: '1px dashed #ddd',
            backgroundColor: 'white',
            cursor: 'move',
            ...style,
            opacity,
            width,
            borderColor
          }}
        >
          {content}
        </div>
      )
    );
  }
}

export default Card;
