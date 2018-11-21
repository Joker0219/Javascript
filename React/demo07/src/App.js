import React, { Component } from 'react';
//CSS层叠样式表引入
import './style/App.css';
import { Layout } from 'antd';
import {BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
//子组件引入

import HeaderPage from './HeaderPage';
import SiderPage from './SiderPage';
import ContentPage from './component/ContentPage';
import IndexPage from './component/IndexPage';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <HeaderPage />
          <Layout>
            <SiderPage />
            <Switch>
                <Route path="/app/index" component={IndexPage} />
                <Route path="/app/books" component={ContentPage} />
            </Switch>
          </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
