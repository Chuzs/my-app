import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class Supervise extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/quality/supervise");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="监听" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="被监听工号">
              {getFieldDecorator('targetAgentId', { rules: [{ required: true, message: 'Please input your targetAgentId!' }] })(
                <Input name="targetAgentId" placeholder="Please input your targetAgentId!" />
              )}
            </Form.Item>
            <Form.Item label="flag">
              {getFieldDecorator('flag', {
                rules: [{ required: true }], initialValue: "0"
              })(<Select name="flag">
                <Option value="0">开始监听</Option>
                <Option value="1">停止监听</Option>
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
const SuperviseCard = Form.create({ onValuesChange })(Supervise);
export default SuperviseCard;