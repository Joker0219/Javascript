import React, { Component } from 'react'
import { Button, Row, Col, Input } from 'antd'

import TotalSalaryPage from './TotalSalaryPage'

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      monthlySalary: 0,
      bonus: 0
    }
  }

  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  handleSalaryChange = (e) => {
    this.setState({ monthlySalary: e.target.value })
  }
  handleBonusChange = (e) => {
    this.setState({ bonus: e.target.value })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={12}>
            monthlySalary is : <Input value={this.state.monthlySalary} onChange={this.handleSalaryChange.bind(this)} />
          </Col>
          <Col span={12}>
            bonus is : <Input value={this.state.bonus} onChange={this.handleBonusChange.bind(this)} />
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <TotalSalaryPage
              monthlySalary={this.state.monthlySalary}
              bonus={this.state.bonus}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
