import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class AgentCallIdInfo extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/query/agentcallidinfo")
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="查询座席的呼叫信息" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
                <Input name="URL" value="/ccacs/ws/query/agentcallidinfo" disabled/>
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
const AgentCallIdInfoCard = Form.create({ onValuesChange })(AgentCallIdInfo);
export default AgentCallIdInfoCard