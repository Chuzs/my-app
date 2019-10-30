import React from 'react';
import { Row, Col, Menu, Icon, Button, Card, Form, Input, Select } from 'antd';
import Header from './Header';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const { SubMenu } = Menu;

function Nav() {
  return (
    <div>
      <Header></Header>
      <div className="main-wrapper">
        <Row>
          <Col className='main-menu' xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
            <section className="main-menu-inner">
              <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                defaultSelectedKeys={['1']}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      ccacs接口
                                    </span>
                  }
                >
                  <Menu.Item key="1">
                    <a href="/abc">option2</a>
                  </Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
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
                  key="sub3"
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
          <Col xs={0} sm={0} md={0} lg={18} xl={20} xxl={20}>
            <Row>
              <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
                <Card type="inner" title="请求报文">
                  <Form {...formItemLayout}>
                    <Form.Item label="Fail">
                      <Input placeholder="unavailable choice" id="error" />
                    </Form.Item>
                    <Form.Item label="Warning">
                      <Input placeholder="Warning" id="warning" />
                    </Form.Item>
                    <Form.Item label="Validating">
                      <Input placeholder="I'm the content is being validated" id="validating" />
                    </Form.Item>
                    <Form.Item label="Success">
                      <Input placeholder="I'm the content" id="success" />
                    </Form.Item>
                    <Form.Item label="Warning">
                      <Input placeholder="Warning" id="warning2" />
                    </Form.Item>
                    <Form.Item label="Fail">
                      <Input placeholder="unavailable choice" id="error2" />
                    </Form.Item>
                    <Form.Item label="Error">
                      <Select defaultValue="1">
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                                </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
              <Col xs={0} sm={0} md={0} lg={9} xl={11} xxl={11} offset={1}>
                <Card type="inner" title="请求报文"></Card>
                <Card type="inner" title="响应报文" extra={<Button>清除</Button>} style={{ marginTop: "20px" }}>

                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Nav;