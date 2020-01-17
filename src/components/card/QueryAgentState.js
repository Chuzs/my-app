import React from 'react';
import { Button, Form, Tabs } from 'antd';
import axios from 'axios';
import { onValuesChange, formItemLayout, removeUndefine, buildRes } from '../../assets/js/global';
const { TabPane } = Tabs;

class QueryAgentState extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    axios.post("http://" + localStorage.getItem("tyddURL") + "/ccacs/ws/query/agentstate",
      JSON.stringify(removeUndefine(this.props.form.getFieldsValue())), {
      withCredentials: true,
    }).then(res => {
      this.props.onResponse(buildRes('setagentstate', res.data));
    }).catch(error => {
      this.props.onResponse(buildRes('setagentstate', { "message": error.message }));
    })
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="查询坐席状态" key="1">
          <Form {...formItemLayout}>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const QueryAgentStateCard = Form.create({ onValuesChange })(QueryAgentState);
export default QueryAgentStateCard