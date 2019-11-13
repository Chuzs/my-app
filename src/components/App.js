import React from 'react';
import { Row, Col } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <div className="main-wrapper">
          <Row>
            <Router>
              <Col className='main-menu' xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
                <Sider></Sider>
              </Col>
              <Col className="main-content" xs={0} sm={0} md={0} lg={18} xl={20} xxl={20}>
                <Content></Content>
              </Col>
            </Router>
          </Row>
        </div>
      </div>
  );
}

export default App;

