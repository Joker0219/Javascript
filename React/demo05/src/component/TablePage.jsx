import React, { Component } from 'react'
import { Button, Row, Col } from 'antd'

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  handleClick = () => {
    this.setState({
      num: this.state.num+1
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
          <p></p>
            <p>My num is {this.state.num}</p>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button onClick={this.handleClick.bind(this)}>num++</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
