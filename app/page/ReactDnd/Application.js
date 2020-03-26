import React, { Component } from 'react';
import DndWay from './DndWay'
import Card from './Card'

class Application extends Component {
  constructor(props) {
      super(props)
      this.state = {
          applicationlist: ['hang', 'bei', '88', 'qq']
      }
  }

  html = (content,index) =>{
    const CardItem = DndWay('leftApp','draggableApp')(Card);
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
    let { applicationlist } = this.state;
    return (
      <div style={{width:'100px',height:'100px',background:'blue', marginTop:'45px'}}>
        {applicationlist.map((item, index) => {
          return this.html(item, index)
          })}
      </div>
    );
  }
}

export default Application;
