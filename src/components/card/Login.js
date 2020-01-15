import React from 'react';
import { Button, Form, Input, Select, Tooltip, Icon, Tabs, Row, Col } from 'antd';
import axios from 'axios';
import { AgentInfo, ServerInfo, onValuesChange, formItemLayout, removeUndefine, buildRes, eventpoll, queryWaitNum } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;
const InputGroup = Input.Group;

let id = 1;
class Login extends React.Component {
  state = {
    keys: [],
    userCenter: "false"
  }
  login = () => {
    this.props.onReKeyChange('res');
    axios.post("http://192.168.88.8:8080/ccacs/ws/agent/login",
      JSON.stringify(removeUndefine(this.props.form.getFieldsValue())), {
      withCredentials: true,
    }).then((res) => {
      this.props.onResponse(buildRes('login', res.data));
      if (res.data.result === '0') {
        ServerInfo.eventpollTimer = setInterval(eventpoll(this.props), 1000);
        ServerInfo.queryWaitNumTimer = setInterval(queryWaitNum(this.props), 2000);
        AgentInfo.agentId = this.props.form.getFieldsValue().agentId;
        AgentInfo.systemCode = this.props.form.getFieldsValue().systemCode;
      }
    }).catch(error => {
      this.props.onResponse(buildRes('login', { "message": error.message }));
    })
  }
  toggleUserCenter = (value) => {
    this.setState({
      userCenter: value
    })
  }
  remove = k => {
    if (this.state.keys.length === 0) {
      return;
    }
    this.state.keys.pop()
    this.setState({
      // keys: this.state.keys.filter(key => key !== k),
      keys: this.state.keys,
    });
    id--
    setTimeout(() => { onValuesChange(this.props, "", this.props.form.getFieldsValue()) }, 10);
  };

  add = () => {
    this.setState({
      keys: this.state.keys.concat(id++),
    });
    setTimeout(() => { onValuesChange(this.props, "", this.props.form.getFieldsValue()) }, 10);
  };
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  render() {
    console.log(this.state.userCenter)
    const { getFieldDecorator } = this.props.form;
    const rows = this.state.keys.map((k, index) => (
      <Row gutter={5} key={k}>
        <Col span={21}>
          <InputGroup compact>
            {getFieldDecorator(`skillIds[${k}].skillId`, {
              rules: [{ required: true }]
            })(<Input name="skillIds.skillId" style={{ width: '33%' }} placeholder="skillId" />)}
            {getFieldDecorator(`skillIds[${k}].channelId`, {
              rules: [{ required: true }]
            })(<Input name="skillIds.channelId" style={{ width: '33%' }} placeholder="channelId" />)}
            {getFieldDecorator(`skillIds[${k}].skillName`, {
              rules: [{ required: true }]
            })(<Input name="skillIds.skillName" style={{ width: '33%' }} placeholder="skillName" />)}
          </InputGroup>
        </Col>
        <Col span={3}>
          <Button className="btn-dust" shape="circle" size="small" style={{ top: '2px' }} icon="minus" onClick={() => this.remove(k)} />
        </Col>
      </Row>
    ));
    let SkillId = null;
    if (this.state.userCenter === "true") {
      SkillId = <Form.Item label="技能队列" wrapperCol={{ span: 14 }}>
        <Row gutter={5}>
          <Col span={21}>
            <InputGroup compact>
              {getFieldDecorator('skillIds[0].skillId', {
                rules: [{ required: true }], initialValue: ''
              })(<Input name="skillIds.skillId" style={{ width: '33%' }} placeholder="skillId" />)}
              {getFieldDecorator('skillIds[0].channelId', {
                rules: [{ required: true }], initialValue: ''
              })(<Input name="skillIds.channelId" style={{ width: '33%' }} placeholder="channelId" />)}
              {getFieldDecorator('skillIds[0].skillName', {
                rules: [{ required: true }], initialValue: ''
              })(<Input name="skillIds.skillName" style={{ width: '33%' }} placeholder="skillName" />)}
            </InputGroup>
          </Col>
          <Col span={3}>
            <Button className="btn-green" shape="circle" size="small" style={{ top: '2px' }} icon="plus" onClick={() => this.add()} />
          </Col>
        </Row>
        {rows}
      </Form.Item>
    } else {
      SkillId = <Form.Item label={
        <span>
          技能队列&nbsp;
          <Tooltip title='格式为：["1111111","222222"]'>
            <Icon type="question-circle" />
          </Tooltip>
        </span>
      }>
        <Tooltip
          trigger={['focus']}
          title={'格式为：["1111111","222222"]'}
          placement="top"
          overlayClassName="numeric-input"
        >
          {getFieldDecorator('skillIds', {})(
            <Input name="skillIds" placeholder='Please input your skillIds!' />
          )}
        </Tooltip>
      </Form.Item>
    }

    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="签入" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="平台工号">
              {getFieldDecorator('agentId', {
                rules: [{ required: true, message: 'Please input your agentId!' }], initialValue: '1006'
              })(<Input name="agentId" />)}
            </Form.Item>
            <Form.Item label="坐席分机号">
              {getFieldDecorator('phoneNum', {
                rules: [{ required: true, message: 'Please input your phoneNum!' }], initialValue: '310000'
              })(<Input name="phoneNum" />)}
            </Form.Item>
            { SkillId }
            <Form.Item label="系统编码">
              {getFieldDecorator('systemCode', {})(
                <Input name="systemCode" placeholder="Please input your systemCode!" />
              )}
            </Form.Item>
            <Form.Item label="省份id">
              {getFieldDecorator('provId', {})(
                <Input name="provId" placeholder="Please input your provId!" />
              )}
            </Form.Item>
            <Form.Item label="签入后状态">
              {getFieldDecorator('agentState', {
                rules: [{ required: true }], initialValue: "4"
              })(<Select name="agentState">
                <Option value="4">空闲</Option>
                <Option value="3">忙碌</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="强制签入">
              {getFieldDecorator('isForceLogon', {
                rules: [{ required: true }], initialValue: "true"
              })(<Select name="isForceLogon">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="注册软电话">
              <Select defaultValue="true">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>
            </Form.Item>
            <Form.Item label="登录WebRTC">
              <Select defaultValue="false">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>
            </Form.Item>
            <Form.Item label="登录用户中心">
              <Select defaultValue="false" onChange={this.toggleUserCenter}>
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
              <Button type="primary" htmlType="submit" onClick={this.login}>Submit</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}
const LoginCard = Form.create({ onValuesChange })(Login);
export default LoginCard;