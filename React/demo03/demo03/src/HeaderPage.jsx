import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

export default class HeaderPage extends Component {
  render() {
    return (
        <Header className="header">
        <div className="logo" />
       <div style={{color:"#fff", fontSize:'36px'}}>Jokerrr的图书管理系统</div> 
      </Header>
    )
  }
}
