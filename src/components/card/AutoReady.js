import React from 'react';
import { Button, Form, Select, Tabs } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;

class AutoReady extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/setagentautoenteridle")
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="设置通话结束后是否自动进入空闲态" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="flag">
              {getFieldDecorator('flag', {
                rules: [{ required: true }], initialValue: "0"
              })(<Select name="flag">
                <Option value="1">true</Option>
                <Option value="0">false</Option>
              </Select>)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const AutoReadyCard = Form.create({ onValuesChange })(AutoReady);
export default AutoReadyCard