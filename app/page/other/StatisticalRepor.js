import React, { Component } from 'react'
import { Row, Col, Input, Button, Table } from 'antd'

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: "" , // 统计任务名称
      triggerType: "", // 触发类型
      description: "", // 描述
      selectedRowKeys: [], //table选择
      dataSource: {
        list: [
          {
            id: 1,
            eventName: 1, // 统计任务名称
            triggerType: 1, // 触发类型
            description: 1, // 描述
          },
          {
            id: 2,
            eventName: 2, // 统计任务名称
            triggerType: 2, // 触发类型
            description: 2, // 描述
          },
          {
            id: 3,
            eventName: 3, // 统计任务名称
            triggerType: 3, // 触发类型
            description: 3, // 描述
          }
        ]
      }
    }
  }

  columns = () => {
    return [
      {
        title: '统计任务名称',
        dataIndex: 'eventName',
        key: 'eventName'
      },
      {
        title: '触发类型',
        dataIndex: 'triggerType',
        key: 'triggerType'
      },
      {
        title: '触发信息',
        dataIndex: 'triggerInfo',
        key: 'triggerInfo'
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: '操作选项',
        dataIndex: 'action',
        key: 'action',
        render: ()=>{
          return (
            <div>
              <Button type="link">编辑</Button>
              <Button type="link">查看</Button>
            </div>
          )
        }
      }
    ]
  }

  render() {
    const { eventName, triggerType, description, dataSource} = this.state;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Row>
          <Col span={6}>
            <div className="searchKey">统计任务名称：</div>
            <div className="searchContent">
              <Input value={eventName} placeholder="请输入统计任务名称"/>
            </div>
          </Col>
          <Col span={6}>
            <div className="searchKey">触发类型：</div>
            <div className="searchContent">
              <Input value={triggerType} placeholder="选择触发类型"/>
            </div>
          </Col>
          <Col span={6}>
            <div className="searchKey">描述：</div>
            <div className="searchContent">
              <Input value={description} placeholder="请输入描述"/>
            </div>
          </Col>
          <Col span={6}>
            <Button>查询</Button>
            <Button>新增</Button>
            <Button>删除</Button>
          </Col>
        </Row>
        <div className="tableContent">
          <Table
            rowSelection={rowSelection}
            dataSource={dataSource.list || []}
            columns={this.columns()}
          />;
        </div>
      </div>
    )
  }
}
