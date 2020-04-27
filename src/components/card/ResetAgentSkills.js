import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;
const { Option } = Select;

class ResetAgentSkills extends React.Component {
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
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbms/ws/operate/resetagentskills");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="批量重设技能队列" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbms/ws/operate/resetagentskills" disabled />
                        </Form.Item>
                        <Form.Item label="agentIds">
                            {getFieldDecorator('agentIds', { rules: [{ required: true, message: 'Please input your agentIds!' }] })(
                                <Input name="agentIds" placeholder="Please input your agentIds!" />
                            )}
                        </Form.Item>
                        <Form.Item label="skillPrioritys">
                            {getFieldDecorator('skillPrioritys', { rules: [{ required: true, message: 'Please input your skillPrioritys!' }] })(
                                <Input name="skillPrioritys" placeholder="Please input your skillPrioritys!" />
                            )}
                        </Form.Item>
                        <Form.Item label="systemCode">
                            {getFieldDecorator('systemCode', { 
                                rules: [{ required: true, message: 'Please input your systemCode!' }],
                                initialValue: JSON.parse(localStorage.getItem('config')) ? JSON.parse(localStorage.getItem('config')).systemCode : ''
                            })(
                                <Input name="systemCode" placeholder="Please input your systemCode!" />
                            )}
                        </Form.Item>
                        <Form.Item label="isPermanent">
                            {getFieldDecorator('isPermanent', {
                                rules: [{ required: true }], initialValue: "false"
                            })(<Select name="isPermanent">
                                <Option value="true">true</Option>
                                <Option value="false">false</Option>
                            </Select>)}
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