import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class CallOut extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  componentDidUpdate() {
    const resText = document.getElementsByClassName('resText')[0]
    if (resText) {
      resText.scrollTop = resText.scrollHeight;
    }
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="外呼" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="callerDigits">
              {getFieldDecorator('callerDigits', {rules: [{ required: true, message: 'Please input your callerDigits!' }], initialValue: '10086'})(
                <Input name="callerDigits" placeholder="Please input your callerDigits!" />
              )}
            </Form.Item>
            <Form.Item label="calledDigits">
              {getFieldDecorator('calledDigits', {rules: [{ required: true, message: 'Please input your calledDigits!' }] })(
                <Input name="calledDigits" placeholder="Please input your calledDigits!" />
              )}
            </Form.Item>
            <Form.Item label="是否脱敏">
              <Select defaultValue="false">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary">Send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}
const CallOutCard = Form.create({ onValuesChange })(CallOut);
export default CallOutCard;