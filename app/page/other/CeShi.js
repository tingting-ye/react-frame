import React, { Component } from 'react'
import { Select } from 'antd';
import {differenceBy,map,reverse} from 'lodash'

const { Option } = Select;

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // array : ['白鸽', '麻雀', '大象', '狗', '猫', "鸡"],
      // array1: [
      //   {
      //     key:1,
      //     name:'白鸽'
      //   },
      //   {
      //     key:2,
      //     name:'麻雀'
      //   },
      //   {
      //     key:3,
      //     name:'大象'
      //   },
      //   {
      //     key:4,
      //     name:'狗'
      //   },
      //   {
      //     key:5,
      //     name:'猫'
      //   },
      //   {
      //     key:6,
      //     name:'鸡'
      //   }
      // ]
      newSource: [ {name: 'p1.q1',sex:"女"},{name: 'p1.q2',sex:"女"} ],
      oldSource: [ {name: 'p1.q1',sex:"女"},{name: 'p1.q2',sex:"男"} ]
    }
  }

  componentDidMount() {
    const { oldSource, newSource } = this.state;
    const diff = differenceBy(newSource,oldSource,{ 'sex': '男' });
    console.log(diff)
    // let {array1}=this.state
    // array1 = array1.sort(function compareFunction(item1, item2) {
    //     return item1.name.localeCompare(item2.name);
    // });
    // array1 = reverse(array1);
    // this.setState({array1 : array1})
  }

  render() {
    const {array1}=this.state
    return (
      <div>
        {/* <div className="page">
          <div className="page-content">
            <Select style={{ width: 120 }}>
              {
                map(array1,(item)=>{
                  return (<Option value={item.key}>{item.name}</Option>)
                })
              }
            </Select>
          </div>
        </div> */}
      </div>
    )
  }
}
