import React from 'react';
import { Button, Form, Input, Select, Tooltip, Icon, Tabs } from 'antd';
import axios from 'axios';
import { AgentInfo, ServerInfo, onValuesChange, formItemLayout, removeUndefine, buildRes, eventpoll, queryWaitNum } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;

class Login extends React.Component {
  onClick = () => {
    this.props.onReKeyChange('req');
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
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
            <Form.Item label={
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
            <Form.Item label="是否登录WebRTC">
              <Select defaultValue="false">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
              <Button type="primary" htmlType="submit" onClick={this.onClick}>Submit</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}
const LoginCard = Form.create({ onValuesChange })(Login);
export default LoginCard;