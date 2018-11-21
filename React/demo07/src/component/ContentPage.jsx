import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
//导入自组件

import TablePage from './TablePage';

const { Content } = Layout;

export default class componentName extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Row>
            <Col span={24}>
              <div>
                <h2>图书列表</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}><TablePage /></Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}
