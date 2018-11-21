import React, { Component } from 'react'
import { Button, Row, Col, Input, Table} from 'antd'

// import TotalSalaryPage from './TotalSalaryPage'
import {getAllBooks} from '../fetch/index';

const columns = [{
  title:"ID",
  dataIndex:"id",
  key:"id"
},{
  title:"名称",
  dataIndex:"name",
  key:"name"
},,{
  title:"作者",
  dataIndex:"author",
  key:"author"
},,{
  title:"出版社",
  dataIndex:"publish",
  key:"publish"
}];

let dataSource = [];

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      dataSource : []
    }
  }

  //获取所有的图书信息
  componentDidMount = () => {
    getAllBooks()
    .then(res => {
      console.log(res)
      this.setState({
        dataSource : res
      })
    })
  }
  

  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
  }


  render() {
    return (
      <div>
        <Row>
          <Col xl={24}>
            <Table columns={columns} dataSource={this.state.dataSource}/>
          </Col>
        </Row>
      </div>
    )
  }
}
