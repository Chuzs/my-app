import React from 'react';
import { Button, Form, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class AutoAnswer extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/autoanswer");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="设置自动应答" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="isAutoAnswer">
              {getFieldDecorator('isAutoAnswer', {
                rules: [{ required: true }], initialValue: "false"
              })(<Select name="isAutoAnswer">
                <Option value="false">手动应答</Option>
                <Option value="true">自动应答</Option>
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
const AutoAnswerCard = Form.create({ onValuesChange })(AutoAnswer);
export default AutoAnswerCard;