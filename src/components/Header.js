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
          <Col xs={24} sm={24} md={24} lg={6} xl={4} xxl={3}>
            <a id="logo" href="/"> 统一调度Demo</a>
          </Col>
          <Col xs={0} sm={0} md={0} lg={18} xl={20} xxl={21} className="lh64">
            <Button.Group className="lh64 mr10">
              <Button className={this.props.statusBtnClass}>{this.props.statusText}</Button>
              <Button>{this.props.time}</Button>
            </Button.Group>
            <Button.Group className="lh64">
              <Button>{this.props.waitNum}</Button>
              <Button>人在等待</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button className="btn-green">签入</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button>整理态</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button className="btn-sunset">示忙</Button>
              <Button className="btn-geekblue">综合接续</Button>
              <Button className="btn-geekblue">密码验证</Button>
              <Button className="btn-dust">结束会话</Button>
              <Button className="btn-geekblue" onClick={this.rest}>休息</Button>
              <Button className="btn-geekblue" >外呼</Button>
              <Button className="btn-geekblue" >保持</Button>
            </Button.Group>
          </Col>
        </Row>
        <RestModal visible={this.state.restVisible}></RestModal>
      </header>
    )
  }

}

export default Header;