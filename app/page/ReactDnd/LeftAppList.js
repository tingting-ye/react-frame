import React, { Component } from 'react';
import DndWay from './DndWay'
import Card from './Card'

const CardList = ['hang', 'bei', '88', 'qq'];
class LeftAppList extends Component {
  constructor(props) {
      super(props)
      this.state = {
          cardList: CardList
      }
  }

  html = (content,index) =>{
    const CardItem = DndWay('draggableApp')(Card);
    return (
      <CardItem
        key={index}
        width="100%"
        index={index}
        id={index}
        moveCard={this.moveProp}
        content={content}
        style={{ padding: 0 }}
      />)
  }

  render() {
    let { cardList } = this.state;
    return (
      <div style={{width:'100px',height:'100px',background:'blue'}}>
        右侧app列表
        {cardList.map((item, index) => {
          return this.html(item, index)
          })}
      </div>
    );
  }
}

export default LeftAppList;
