import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class MakeCall extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/call/makecall");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="视频外呼" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
              <Input name="URL" value="/ccacs/ws/call/makecall" disabled />
            </Form.Item>
            <Form.Item label="callerDigits">
              {getFieldDecorator('callerDigits', {
                rules: [{ required: true, }],
              })(<Input name="callerDigits" placeholder="Please input your callerDigits!" />)}
            </Form.Item>
            <Form.Item label="calledDigits">
              {getFieldDecorator('calledDigits', {
                rules: [{ required: true, }],
              })(<Input name="calledDigits" placeholder="Please input your calledDigits!" />)}
            </Form.Item>
            <Form.Item label="mediaIDType">
              {getFieldDecorator('mediaIDType', {
                rules: [{ required: true, }],
              })(<Input name="mediaIDType" placeholder="Please input your mediaIDType!" />)}
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
const MakeCallCard = Form.create({ onValuesChange })(MakeCall);
export default MakeCallCard