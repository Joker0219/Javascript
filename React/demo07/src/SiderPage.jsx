import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';

import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

export default class SiderPage extends Component {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1"><Link to="/app/index">首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/app/books">图书管理</Link></Menu.Item>

        </Menu>
      </Sider>
    );
  }
}
