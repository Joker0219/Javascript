import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd';
//导入自组件
import SearchPage from './SearchPage';
import TablePage from './TablePage';

const { Content } = Layout;

export default class componentName extends Component {
  render() {
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          <Row>
            <Col span={24}><SearchPage pageName="搜索图书的界面"/></Col>
          </Row>
          <Row>
            <Col span={24}><SearchPage pageName="搜索用户的界面" /></Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}
