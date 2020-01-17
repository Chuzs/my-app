import React from 'react';
import { Row, Col, Button } from 'antd';
import axios from 'axios';
import RestModal from './modal/rest'
import SkillListModal from './modal/skillList'

class Header extends React.Component {
  toggleRestModal = () => {
    if (this.props.restVisible) {
      this.props.onRestVisibleChange(false);
    } else {
      this.props.onRestVisibleChange(true);
    }
  }
  rest = () => {
    axios.post()
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
              <Button className={this.props.statusBtn.className}>{this.props.statusBtn.text}</Button>
              <Button>{this.props.time}</Button>
            </Button.Group>
            <Button.Group className="lh64">
              <Button>{this.props.waitNum}</Button>
              <Button>人在等待</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button className="btn-sunset">{this.props.otherworkBtnText}</Button>
            </Button.Group>
            <Button.Group className="lh64 fr mr10">
              <Button className={this.props.loginBtn.className}>{this.props.loginBtn.text}</Button>
            </Button.Group>
            {/* <Button.Group className="lh64 fr mr10">
              <Button>整理态</Button>
            </Button.Group> */}
            <Button.Group className="lh64 fr mr10">
              <Button className={this.props.setStatusBtn.className}>{this.props.setStatusBtn.text}</Button>
              <Button className="btn-geekblue">综合接续</Button>
              {/* <Button className="btn-geekblue">密码验证</Button> */}
              <Button className="btn-dust">结束会话</Button>
              <Button className="btn-cyan" onClick={this.toggleRestModal}>{this.props.restBtnText}</Button>
              <Button className="btn-daybreak">外呼</Button>
              <Button className="btn-purple">保持</Button>
            </Button.Group>
          </Col>
        </Row>
        <RestModal {...this.props}></RestModal>
        <SkillListModal {...this.props}></SkillListModal>
      </header>
    )
  }

}

export default Header;