import React from 'react';
import { Button, Form, Input, Tabs, Icon, Tooltip, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { Option } = Select;
const { TabPane } = Tabs;

class AgentIdLinkNumBySkillIdAndState extends React.Component {
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
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbms/ws/monitor/agentIdLinkNumBySkillIdAndState");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="根据技能ID和工号状态查询符合状态的工号、连接数 SXR02" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbms/ws/monitor/agentIdLinkNumBySkillIdAndState" disabled />
                        </Form.Item>
                        <Form.Item label={
                            <span>
                                skillIds&nbsp;
                                <Tooltip title='格式为：'>
                                    <Icon type="question-circle" />
                                </Tooltip>
                            </span>
                        }>
                            <Tooltip
                                trigger={['focus']}
                                title={'格式为：'}
                                placement="top"
                                overlayClassName="numeric-input"
                            >
                                {getFieldDecorator('skillIds', { rules: [{ required: true, message: 'Please input your skillIds!' }] })(
                                    <Input name="skillIds" placeholder='Please input your skillIds!' />
                                )}
                            </Tooltip>
                        </Form.Item>
                        <Form.Item label="agentState">
                            {getFieldDecorator('agentState', {
                                rules: [{ required: true }], initialValue: "1"
                            })(<Select name="agentState">
                                <Option value="1">签入</Option>
                                <Option value="2">签出</Option>
                                <Option value="3">忙碌</Option>
                                <Option value="4">空闲</Option>
                                <Option value="5">整理</Option>
                                <Option value="7">通话</Option>
                                <Option value="8">休息</Option>
                                <Option value="9">学习</Option>
                            </Select>)}
                        </Form.Item>
                        <Form.Item label="systemCode">
                            {getFieldDecorator('systemCode', { rules: [{ required: true, message: 'Please input your systemCode!' }] })(
                                <Input name="systemCode" placeholder="Please input your systemCode!" />
                            )}
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
const AgentIdLinkNumBySkillIdAndStateCard = Form.create({ onValuesChange })(AgentIdLinkNumBySkillIdAndState);
export default AgentIdLinkNumBySkillIdAndStateCard;