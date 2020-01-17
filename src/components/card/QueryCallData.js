import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class QueryCallData extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/call/querycalldata")
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="获取随路数据" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="callId">
              {getFieldDecorator('callId', {
                rules: [{ required: true, }],
              })(<Input name="callId" placeholder="无需填写，通话后自动添加"/>)}
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
const QueryCallDataCard = Form.create({ onValuesChange })(QueryCallData);
export default QueryCallDataCard