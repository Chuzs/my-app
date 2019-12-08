import React from 'react';
import { Row, Col, Button } from 'antd';
import RestModal from './modal/rest'

class Header extends React.Component {
  state = {
    restVisible: false
  }
  rest = () => {
    this.setState({
      restVisible: true
    })
  }

  render() {
    return (
      <header id="header" className="clearfix">
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={4}>
            <a id="logo" href="/"> 统一调度Demo</a>
          </Col>
          <Col xs={0} sm={0} md={0} lg={18} xl={20} xxl={20} className="lh64">
            <Button.Group className="lh64 mr10">
              <Button value="未签入">未签入</Button>
              <Button value="00:00:00">00:00:00</Button>
            </Button.Group>
            <Button.Group className="lh64">
              <Button value="0">0</Button>
              <Button value="人在等待">人在等待</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button>签入</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button>整理态</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button type="danger" value="示忙">示忙</Button>
              <Button type="primary" value="综合接续">综合接续</Button>
              <Button type="primary" value="密码验证">密码验证</Button>
              <Button type="danger" value="结束会话">结束会话</Button>
              <Button type="primary" value="休息" onClick={this.rest}>休息</Button>
              <Button type="primary" value="外呼">外呼</Button>
              <Button type="primary" value="保持">保持</Button>
            </Button.Group>
          </Col>
        </Row>
        <RestModal visible={this.state.restVisible}></RestModal>
      </header>
    )
  }

}

export default Header;