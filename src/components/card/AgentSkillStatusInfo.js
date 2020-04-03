import React from 'react';
import { Button, Form, Input, Tabs } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;

class AgentSkillStatusInfo extends React.Component {
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
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbms/ws/monitor/agentskillstatusinfo");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="查询多个技能下的座席实时监控信息 RT_restApI_2" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbms/ws/monitor/agentskillstatusinfo" disabled />
                        </Form.Item>
                        <Form.Item label="skillIds">
                            {getFieldDecorator('skillIds', { rules: [{ required: true, message: 'Please input your skillIds!' }] })(
                                <Input name="skillIds" placeholder="Please input your skillIds!" />
                            )}
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
const AgentSkillStatusInfoCard = Form.create({ onValuesChange })(AgentSkillStatusInfo);
export default AgentSkillStatusInfoCard;