import React, { Component } from 'react'
import { Select } from 'antd';
import {differenceBy,map,reverse} from 'lodash'

const { Option } = Select;

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
        // list:  [100,"5",40,"st","A",'a',"0","z","B","jj","OO"]
        list: [100,"杭州","5",'杯啊',"北京",40,"st","A",'a',"0","z","B","jj","OO"],
        // list: [100,"5",40,"st","A",'a',"0","z","B","jj","OO"]
    }
  }

  componentDidMount() {
    const regexNum = new RegExp("^[0-9]*$");
    const regexChina = new RegExp("[\u4E00-\u9FA5]+");
    const numberArr = [];
    const chineArr = []
    const otherArr = [];
    const { list } = this.state;
    list.map(item=>{
        if(regexNum.test(item)) {
            numberArr.push(item);
        }else if(regexChina.test(item)) {
            chineArr.push(item);
        }else{
            otherArr.push(item);
        }
    })
    const orderArr = this.handleSort(numberArr).concat(otherArr.sort()).concat(this.handleSort(chineArr))
    document.write(orderArr)
  }

  handleSort = (list,type='up') => {
    const listOrder = list.sort((a,b)=>{
        let aValue = a - 0 ? a - 0 : a,
            bValue = b - 0 ? b - 0 : b;
        if(typeof aValue === 'number' && typeof bValue === 'number') {
            return type === 'up' ? aValue - bValue : bValue - aValue;
        } else {
            return type === 'up' ? (aValue+"").localeCompare((bValue+"")):(bValue+"").localeCompare((aValue+""))
        }
    })
    return listOrder
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}
