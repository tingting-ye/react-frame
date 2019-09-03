import React, { Component } from 'react'
import { Table, Button } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }

  dataList = ()=> {
    const list = []
    for(let i=0;i<300;i+=1) {
      list.push({
        key: i,
        name: '胡彦斌***'+i,
        age: 32,
        address: '西湖区湖底公园1号',
      })
    }
    return list
  }

  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <div>
        <div className="page">
          <div className="page-content">
            <Table dataSource={this.dataList()} pagination={false} columns={columns} rowSelection={rowSelection}/>
            <Button onClick={()=>this.setState({number:this.state.number+1})}>{this.state.number}</Button>
          </div>
        </div>
      </div>
    )
  }
}
