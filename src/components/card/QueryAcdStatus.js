import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class QueryAcdStatus extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/query/queryacdstatus");
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="查询座席所能处理的技能队列的状态信息 AS01" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
              <Input name="URL" value="/ccacs/ws/query/queryacdstatus" disabled />
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
const QueryAcdStatusCard = Form.create({ onValuesChange })(QueryAcdStatus);
export default QueryAcdStatusCard