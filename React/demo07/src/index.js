import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './NotFound';
import Login from './Login';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';

class RootPage extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/app" component={App} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
} 

ReactDOM.render(<RootPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
