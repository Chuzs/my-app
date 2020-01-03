import React from 'react';
import { Menu, Icon, Col } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

class Sider extends React.Component {
  render() {
    let pathname = window.location.pathname.split('/');
    return (
      <Col className='main-menu' xs={24} sm={24} md={24} lg={6} xl={4} xxl={3}>
        <section className="main-menu-inner">
          <Menu mode="inline" defaultOpenKeys={[pathname[1]]} defaultSelectedKeys={[pathname[2] ? pathname[2] : "/"]}>
            <Menu.Item key="/"><Link to="/"><Icon type="notification" />环境设置</Link></Menu.Item>
            <SubMenu
              key="ccacs"
              title={
                <span>
                  <Icon type="user" />
                  ccacs接口
                </span>
              }
            >
              <Menu.Item key="login">
                <Link to="/ccacs/login">签入</Link>
              </Menu.Item>
              <Menu.Item key="resetAgentSkills"><Link to="/ccacs/resetAgentSkills">重设坐席技能</Link></Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="ccbms"
              title={
                <span>
                  <Icon type="laptop" />
                  ccbms接口
                </span>

              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="ccbcs"
              title={
                <span>
                  <Icon type="notification" />
                  ccbcs接口
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </section>
      </Col>
    )
  }
}

export default Sider;