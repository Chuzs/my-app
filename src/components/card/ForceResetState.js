import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class ForceResetState extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/forceresetstate");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="内部求助" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="被监听工号">
              {getFieldDecorator('targetAgentId', { rules: [{ required: true, message: 'Please input your targetAgentId!' }] })(
                <Input name="targetAgentId" placeholder="Please input your targetAgentId!" />
              )}
            </Form.Item>
            <Form.Item label="强制状态">
              {getFieldDecorator('state', {
                rules: [{ required: true }], initialValue: "2"
              })(<Select name="state">
                <Option value="2">签出</Option>
                <Option value="3">忙碌</Option>
                <Option value="4">空闲</Option>
                <Option value="8">休息</Option>
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
const ForceResetStateCard = Form.create({ onValuesChange })(ForceResetState);
export default ForceResetStateCard;