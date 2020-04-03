import React from 'react';
import { Button, Form, Input, Tabs, Select } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;

class SiteAgentCallAndSkillInfoByAgentIds extends React.Component {
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
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbms/ws/monitor/siteagentcallandskillinfobyagentids");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="查询呼叫和技能信息" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbms/ws/monitor/siteagentcallandskillinfobyagentids" disabled />
                        </Form.Item>
                        <Form.Item label="agentIds">
                            {getFieldDecorator('agentIds', { rules: [{ required: true, message: 'Please input your agentIds!' }] })(
                                <Input name="agentIds" placeholder="Please input your skillIds!" />
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
const SiteAgentCallAndSkillInfoByAgentIdsCard = Form.create({ onValuesChange })(SiteAgentCallAndSkillInfoByAgentIds);
export default SiteAgentCallAndSkillInfoByAgentIdsCard;