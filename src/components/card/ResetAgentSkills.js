import React from 'react';
import { Button, Form, Input, Tabs } from 'antd';
const { TabPane } = Tabs;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
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
class ResetAgentSkills extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="重设坐席技能" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="统一调度地址">
              {getFieldDecorator('tyddURL', {
                rules: [{ required: true, message: 'Please input your tyddURL!' }],
              })(<Input name="tyddURL" />)}
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
        </TabPane>
      </Tabs>
    )
  }
}
const ResetAgentSkillsCard = Form.create({ onValuesChange })(ResetAgentSkills);
export default ResetAgentSkillsCard;