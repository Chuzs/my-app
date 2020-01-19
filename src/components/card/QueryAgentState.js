import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class QueryAgentState extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/query/agentstate");
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="查询坐席状态" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
              <Input name="URL" value="/ccacs/ws/query/agentstate" disabled />
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
const QueryAgentStateCard = Form.create({ onValuesChange })(QueryAgentState);
export default QueryAgentStateCard