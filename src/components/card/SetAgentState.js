import React from 'react';
import { Button, Form, Select, Tabs, Input } from 'antd';
import axios from 'axios';
import { onValuesChange, formItemLayout, removeUndefine, buildRes } from '../../assets/js/global';
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
    axios.post("http://" + localStorage.getItem("tyddURL") + "/ccacs/ws/agent/setagentstate",
      JSON.stringify(removeUndefine(this.props.form.getFieldsValue())), {
      withCredentials: true,
    }).then(res => {
      this.props.onResponse(buildRes('setagentstate', res.data));
    }).catch(error => {
      this.props.onResponse(buildRes('setagentstate', { "message": error.message }));
    })
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
       rest = <div><Form.Item label="reason">
        {getFieldDecorator('reason', {rules: [{ required: true }]})(<Input name="reason" placeholder="Please input your reason!" />)}
      </Form.Item>
        <Form.Item label="restTime">
          {getFieldDecorator('restTime', {rules: [{ required: true }]})(<Input name="restTime" placeholder="Please input your restTime!" />)}
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
            {/* <Form.Item label="reason">
              {getFieldDecorator('reason', {})(<Input name="reason" placeholder="Please input your reason!" />)}
            </Form.Item>
            <Form.Item label="restTime">
              {getFieldDecorator('restTime', {})(<Input name="restTime" placeholder="Please input your restTime!" />)}
            </Form.Item> */}
            {rest}
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const SetAgentStateCard = Form.create({ onValuesChange })(SetAgentState);
export default SetAgentStateCard