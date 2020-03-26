import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';
import LeftAppList from './LeftAppList'
import Application from './Application'

// 将 HTMLBackend 作为参数传给 DragDropContext
@DragDropContext(HTMLBackend)
class App extends Component {
  render() {
    return (
        <div style={{ paddingLeft: 200, paddingTop: 50 }}>
          <LeftAppList />
          <Application />
        </div>
    );
  }
}

export default App;
