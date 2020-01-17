import React from 'react';
import { Button, Form, Input, Tabs, Select, Row, Col } from 'antd';
import { onValuesChange, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;
const InputGroup = Input.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6, offset: 1 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

let id = 1;
class ResetAgentSkills extends React.Component {
  state = {
    keys: []
  }
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  remove = k => {
    if (this.state.keys.length === 0) {
      return;
    }
    this.state.keys.pop();
    this.setState({
      // keys: this.state.keys.filter(key => key !== k),
      keys: this.state.keys,
    });
    id--
    setTimeout(() => { onValuesChange(this.props, "", this.props.form.getFieldsValue()) }, 10);
  };

  add = () => {
    this.setState({
      keys: this.state.keys.concat(id++),
    });
    setTimeout(() => { onValuesChange(this.props, "", this.props.form.getFieldsValue()) }, 10);
  };

  send = () => {
    this.props.onReKeyChange('res');
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/agent/resetskill");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const rows = this.state.keys.map((k, index) => (
      <Row gutter={5} key={k}>
        <Col span={21}>
          <InputGroup compact>
            {getFieldDecorator(`skills[${k}].skillId`, {
              rules: [{ required: true }]
            })(<Input name="skills.skillId" style={{ width: '33%' }} placeholder="skillId" />)}
            {getFieldDecorator(`skills[${k}].channelId`, {
              rules: [{ required: true }]
            })(<Input name="skills.channelId" style={{ width: '33%' }} placeholder="channelId" />)}
            {getFieldDecorator(`skills[${k}].skillName`, {
              rules: [{ required: true }]
            })(<Input name="skills.skillName" style={{ width: '33%' }} placeholder="skillName" />)}
          </InputGroup>
        </Col>
        <Col span={3}>
          <Button className="btn-dust" shape="circle" size="small" style={{ top: '2px' }} icon="minus" onClick={() => this.remove(k)} />
        </Col>
      </Row>
    ));
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="重设坐席技能" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="isPermanent">
              {getFieldDecorator('isPermanent', {
                rules: [{ required: true }], initialValue: "false"
              })(<Select name="isPermanent">
                <Option value="true">true</Option>
                <Option value="false">false</Option>
              </Select>)}
            </Form.Item>
            <Form.Item label="技能队列" wrapperCol={{ span: 14 }}>
              <Row gutter={5}>
                <Col span={21}>
                  <InputGroup compact>
                    {getFieldDecorator('skills[0].skillId', {
                      rules: [{ required: true }], initialValue: ''
                    })(<Input name="skills.skillId" style={{ width: '33%' }} placeholder="skillId" />)}
                    {getFieldDecorator('skills[0].channelId', {
                      rules: [{ required: true }], initialValue: ''
                    })(<Input name="skills.channelId" style={{ width: '33%' }} placeholder="channelId" />)}
                    {getFieldDecorator('skills[0].skillName', {
                      rules: [{ required: true }], initialValue: ''
                    })(<Input name="skills.skillName" style={{ width: '33%' }} placeholder="skillName" />)}
                  </InputGroup>
                </Col>
                <Col span={3}>
                  <Button className="btn-green" shape="circle" size="small" style={{ top: '2px' }} icon="plus" onClick={() => this.add()} />
                </Col>
              </Row>
              {rows}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>Send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    )
  }
}
const ResetAgentSkillsCard = Form.create({ onValuesChange })(ResetAgentSkills);
export default ResetAgentSkillsCard;