import React from 'react';
import { Button, Card, Form, Input, Select, Tooltip, Icon } from 'antd';
import fetch from 'isomorphic-fetch';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const onValuesChange = (props, changedValues, allValues) => {
  props.onChange(removeUndefine(allValues));
}

const removeUndefine = (data) => {
  for (let key in data) {
    if (data[key] === undefined) {
      data[key] = "";
    }
  }
  return data;
}
class LoginCard extends React.Component {
  onClick = () => {
    fetch("http://127.0.0.1:8080/abc", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded, multipart/form-data', //发送类型
        'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
      }),
      body: JSON.stringify(removeUndefine(this.props.form.getFieldsValue()))
    }).then((res) => res.json()).then((res) => {
      console.log(res)
    })
  }
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card type="inner" title="签入">
        <Form {...formItemLayout}>
          <Form.Item label="平台工号">
            {getFieldDecorator('agentId', {
              rules: [{ required: true, message: 'Please input your agentId!' }], initialValue: '1006'
            })(<Input name="agentId" />)}
          </Form.Item>
          <Form.Item label="坐席分机号">
            {getFieldDecorator('phoneNum', {
              rules: [{ required: true, message: 'Please input your phoneNum!' }], initialValue: '310000'
            })(<Input name="phoneNum" />)}
          </Form.Item>
          <Form.Item label={
            <span>
              技能队列&nbsp;
              <Tooltip title='格式为：["1111111","222222"]'>
                <Icon type="question-circle" />
              </Tooltip>
            </span>
          }>
            <Tooltip
              trigger={['focus']}
              title={'格式为：["1111111","222222"]'}
              placement="top"
              overlayClassName="numeric-input"
            >
              {getFieldDecorator('skillIds', {})(
                <Input name="skillIds" placeholder='Please input your skillIds!' />
              )}
            </Tooltip>
          </Form.Item>
          <Form.Item label="系统编码">
            {getFieldDecorator('systemCode', {})(<Input name="systemCode" placeholder="Please input your systemCode!" />)}
          </Form.Item>
          <Form.Item label="省份id">
            {getFieldDecorator('provId', {})(<Input name="provId" placeholder="Please input your provId!" />)}
          </Form.Item>
          <Form.Item label="强制签入">
            {getFieldDecorator('isForceLogon', {
              rules: [{ required: true }], initialValue: "true"
            })(<Select name="isForceLogon">
              <Option value="true">true</Option>
              <Option value="false">false</Option>
            </Select>)}
          </Form.Item>
          <Form.Item label="注册软电话">
            <Select defaultValue="true">
              <Option value="true">true</Option>
              <Option value="false">false</Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
            <Button type="primary" htmlType="submit" onClick={this.onClick}>Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

class ResetAgentSkillsCard extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card type="inner" title="环境设置">
        <Form {...formItemLayout}>
          <Form.Item label="统一调度地址">
            {getFieldDecorator('tyddURL', {
              rules: [{ required: true, message: 'Please input your tyddURL!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Warning">
            <Input placeholder="Warning" />
          </Form.Item>
          <Form.Item label="Validating">
            <Input placeholder="I'm the content is being validated" />
          </Form.Item>
          <Form.Item label="Success">
            <Input placeholder="I'm the content" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

class SetEnvirmentCard extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card type="inner" title="环境设置">
        <Form {...formItemLayout}>
          <Form.Item label="统一调度地址">
            {getFieldDecorator('tyddURL', {
              rules: [{ required: true, message: 'Please input your tyddURL!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Warning">
            <Input placeholder="Warning" />
          </Form.Item>
          <Form.Item label="Validating">
            <Input placeholder="I'm the content is being validated" />
          </Form.Item>
          <Form.Item label="Success">
            <Input placeholder="I'm the content" />
          </Form.Item>
          <Form.Item label="Warning">
            <Input placeholder="Warning" />
          </Form.Item>
          <Form.Item label="Fail">
            <Input placeholder="unavailable choice" />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    )
  }
}

SetEnvirmentCard = Form.create({ onValuesChange })(SetEnvirmentCard);
ResetAgentSkillsCard = Form.create({ onValuesChange })(ResetAgentSkillsCard);
LoginCard = Form.create({ onValuesChange })(LoginCard);

export { ResetAgentSkillsCard, LoginCard, SetEnvirmentCard };