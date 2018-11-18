import React, { Component } from 'react';
//CSS层叠样式表引入
import './style/App.css';
import { Layout } from 'antd';
//子组件引入
import HeaderPage from './HeaderPage';
import SiderPage from './SiderPage';
import ContentPage from './component/ContentPage';

class App extends Component {

  handleClose = () => {
    console.log("this is callback")
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <HeaderPage />
          <Layout>
            <SiderPage />
            <ContentPage />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
