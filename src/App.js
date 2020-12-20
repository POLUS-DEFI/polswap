import React,{Component, Fragment} from 'react';
import {HashRouter as Router} from 'react-router-dom'
import HeaderNav from './component/headerNav'
import RouterMap from './routers/router'
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import './style/style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <HeaderNav></HeaderNav>
          <RouterMap></RouterMap>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
