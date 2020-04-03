import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class ConfirmMessagePush extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  componentDidUpdate() {
    const resText = document.getElementsByClassName('resText')[0];
    if (resText) {
      resText.scrollTop = resText.scrollHeight;
    }
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/confirmmessagepush");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="确认IM登录成功是否允许消息推送" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
              <Input name="URL" value="/ccacs/ws/agent/confirmmessagepush" disabled />
            </Form.Item>
            <Form.Item label="callId">
              {getFieldDecorator('callId', {
                rules: [{ required: true, }],
              })(<Input name="callId" placeholder="Please input your callId!" />)}
            </Form.Item>
            <Form.Item label="DSN">
              {getFieldDecorator('DSN', {
                rules: [{ required: true, }],
              })(<Input name="DSN" placeholder="Please input your DSN!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>Send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const ConfirmMessagePushCard = Form.create({ onValuesChange })(ConfirmMessagePush);
export default ConfirmMessagePushCard