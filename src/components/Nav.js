import React from 'react';
import {Row, Col } from 'antd';
import Header from './Header';
import Sider from './Sider';


function Nav() {
  return (
    <div>
      <Header></Header>
      <div className="main-wrapper">
        <Row>
          <Col className='main-menu' xs={24} sm={24} md={24} lg={6} xl={5} xxl={4}>
            <Sider></Sider>
          </Col>
          <Col xs={0} sm={0} md={0} lg={18} xl={19} xxl={20}>
            
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Nav;