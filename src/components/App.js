import React from 'react';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <div className="main-wrapper">
        <Sider></Sider>
        <Content></Content>
      </div>
    </Router>
  );
}

export default App;

