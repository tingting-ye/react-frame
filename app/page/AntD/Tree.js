import React, { Component } from 'react'
import { Tree, Modal } from 'antd';
import  './Tree.less'

const { TreeNode } = Tree;

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      leftWidth: 160
    }
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  mouseUpDiv = (e)=>{
    console.log("点击？")
  }

  render() {
    const { leftWidth } = this.state;
    return (
    <Modal
      title="Basic Modal"
      visible={true}
      width="60%"
      height="400"
    >
      <div className="leftDiv" style={{ width: leftWidth }} ref="treediv">
        <Tree showLine defaultExpandedKeys={['0-0-0']}>
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="parent 1-0parent 1-0" key="0-0-0-0" />
              <TreeNode title="parent 1-0parent 1-0" key="0-0-0-1" />
              <TreeNode title="parent 1-0parent 1-0" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="parent 1-0" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
              <TreeNode title="parent 1-0" key="0-0-2-0" />
              <TreeNode title="parent 1-0" key="0-0-2-1" />
            </TreeNode>
            <TreeNode title="parent 1-3" key="0-0-3">
              <TreeNode title="parent 1-0" key="0-0-3-0" />
            </TreeNode>
            <TreeNode title="parent 1-4" key="0-0-4">
              <TreeNode title="parent 1-0" key="0-0-4-0" />
              <TreeNode title="parent 1-0" key="0-0-4-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
      <div className="rightDiv">
        右侧自适应
      </div>
      </Modal>
    )
  }
}
