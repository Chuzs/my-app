import React from 'react';
import { Button, Form, Select, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;

class Transout extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/call/transout")
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="转出" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="agentId">
              {getFieldDecorator('agentId', {
                rules: [{ required: true, message: 'Please input your agentId!' }]
              })(<Input name="agentId" placeholder="Please input your agentId!"/>)}
            </Form.Item>
            <Form.Item label="callId">
              {getFieldDecorator('callId', {
                rules: [{ required: true, }],
              })(<Input name="callId" placeholder="无需填写，通话后自动添加"/>)}
            </Form.Item>
            <Form.Item label="attachedData">
              {getFieldDecorator('attachedData', {
                // rules: [{ required: true, message: 'Please input your agentId!' }], initialValue: '1006'
              })(<Input name="attachedData" placeholder="Please input your attachedData!"/>)}
            </Form.Item>
            <Form.Item label="calledDigits">
              {getFieldDecorator('calledDigits', {
                rules: [{ required: true, message: 'Please input your calledDigits!' }],
              })(<Input name="calledDigits" placeholder="Please input your calledDigits!"/>)}
            </Form.Item>
            <Form.Item label="callerDigits">
              {getFieldDecorator('callerDigits', {
              })(<Input name="callerDigits" placeholder="Please input your callerDigits!"/>)}
            </Form.Item>
            <Form.Item label="origedDigits">
              {getFieldDecorator('origedDigits', {
              })(<Input name="origedDigits" placeholder="Please input your origedDigits!"/>)}
            </Form.Item>
            <Form.Item label="deviceType">
              {getFieldDecorator('calledDeviceType', {
                rules: [{ required: true }], initialValue: "1"
              })(<Select name="calledDeviceType">
                <Option value="1">技能队列</Option>
                <Option value="2">坐席</Option>
                <Option value="3">IVR</Option>
                <Option value="4">系统接入码</Option>
                <Option value="5">外呼号码（多媒体不支持）</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="transferMode">
              {getFieldDecorator('transferMode', {
                rules: [{ required: true }], initialValue: "0"
              })(<Select name="transferMode">
                <Option value="0">释放转</Option>
                <Option value="1">挂起转</Option>
                <Option value="2">成功转</Option>
                <Option value="3">指定转（通话转）</Option>
                <Option value="4">合并转（三方转）</Option>
              </Select>)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.Send}>send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const TransoutCard = Form.create({ onValuesChange })(Transout);
export default TransoutCard