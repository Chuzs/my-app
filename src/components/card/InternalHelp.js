import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class InternalHelp extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  componentDidUpdate() {
    const resText = document.getElementsByClassName('resText')[0]
    if (resText) {
      resText.scrollTop = resText.scrollHeight;
    }
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/call/internalhelp");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="内部求助" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="dialedDigits">
              {getFieldDecorator('dialedDigits', { rules: [{ required: true, message: 'Please input your dialedDigits!' }] })(
                <Input name="dialedDigits" placeholder="Please input your dialedDigits!" />
              )}
            </Form.Item>
            <Form.Item label="deviceType">
              {getFieldDecorator('deviceType', {
                rules: [{ required: true }], initialValue: "1"
              })(<Select name="deviceType">
                <Option value="1">技能组</Option>
                <Option value="2">坐席</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="consultMode">
              {getFieldDecorator('consultMode', {
                rules: [{ required: true }], initialValue: "1"
              })(<Select name="consultMode">
                <Option value="1">两方</Option>
                <Option value="2">三方</Option>
              </Select>)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>Send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}
const InternalHelpCard = Form.create({ onValuesChange })(InternalHelp);
export default InternalHelpCard;