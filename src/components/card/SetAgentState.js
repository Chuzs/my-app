import React from 'react';
import { Button, Form, Select, Tabs, Input, Tooltip, Icon } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;

class SetAgentState extends React.Component {
  state = {
    rest: "false"
  }
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/setagentstate")
  }
  toggleRest = (value) => {
    if (value === "8") {
      this.setState({
        rest: "true"
      })
    } else {
      this.setState({
        rest: "false"
      })
    }
    setTimeout(() => { onValuesChange(this.props, "", this.props.form.getFieldsValue()) }, 10);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let rest = ""
    if (this.state.rest === "true") {
      rest = <div>
        <Form.Item label={<span>reason&nbsp;<Tooltip title='格式为：'><Icon type="question-circle" /></Tooltip></span>}>
          <Tooltip trigger={['focus']} title={'格式为：'} placement="top" overlayClassName="numeric-input" >
            {getFieldDecorator('reason', { rules: [{ required: true }] })(<Input name="reason" placeholder="Please input your reason!" />)}
          </Tooltip>
        </Form.Item>
        <Form.Item label={<span>restTime&nbsp;<Tooltip title='格式为：'><Icon type="question-circle" /></Tooltip></span>}>
          <Tooltip trigger={['focus']} title={'格式为：'} placement="top" overlayClassName="numeric-input" >
            {getFieldDecorator('restTime', { rules: [{ required: true }] })(<Input name="restTime" placeholder="Please input your restTime!" />)}
          </Tooltip>
        </Form.Item>
      </div>
    }
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="修改坐席状态" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="state">
              {getFieldDecorator('state', {
                rules: [{ required: true }], initialValue: "3"
              })(<Select name="state" onChange={this.toggleRest}>
                <Option value="3">示忙</Option>
                <Option value="4">示闲</Option>
                <Option value="5">整理</Option>
                <Option value="8">休息</Option>
                <Option value="9">学习</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="flag">
              {getFieldDecorator('flag', {
                rules: [{ required: true }], initialValue: "1"
              })(<Select name="flag">
                <Option value="1">进入状态</Option>
                <Option value="0">退出状态</Option>
              </Select>)}
            </Form.Item>
            {rest}
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>Send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const SetAgentStateCard = Form.create({ onValuesChange })(SetAgentState);
export default SetAgentStateCard