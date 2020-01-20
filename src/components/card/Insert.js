import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class Insert extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/quality/insert");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="插入" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="targetAgentId">
              {getFieldDecorator('targetAgentId', { rules: [{ required: true, message: 'Please input your targetAgentId!' }] })(
                <Input name="targetAgentId" placeholder="Please input your targetAgentId!" />
              )}
            </Form.Item>
            <Form.Item label="flag">
              {getFieldDecorator('flag', {
                rules: [{ required: true }], initialValue: "0"
              })(<Select name="flag">
                <Option value="0">开始插入</Option>
                <Option value="1">停止插入</Option>
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
const InsertCard = Form.create({ onValuesChange })(Insert);
export default InsertCard;