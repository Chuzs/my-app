import React from 'react';
import { Button, Form, Input, Tabs, Icon, Tooltip } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;

class AgentCurrentServeStatusInfo extends React.Component {
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
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbms/ws/monitor/agentcurrentservestatusinfo");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="查询多个座席人员当前正在服务的技能和呼叫信息 AP05" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbms/ws/monitor/agentcurrentservestatusinfo" disabled />
                        </Form.Item>
                        <Form.Item label={
                            <span>
                                agentIds&nbsp;
                                <Tooltip title='格式为：[{"agentId":"1006"}}]'>
                                    <Icon type="question-circle" />
                                </Tooltip>
                            </span>
                        }>
                            <Tooltip
                                trigger={['focus']}
                                title={'格式为：[{"agentId":"1006"}}]'}
                                placement="top"
                                overlayClassName="numeric-input"
                            >
                                {getFieldDecorator('agentIds', { rules: [{ required: true, message: 'Please input your agentIds!' }] })(
                                    <Input name="agentIds" placeholder='Please input your agentIds!' />
                                )}
                            </Tooltip>
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
const AgentCurrentServeStatusInfoCard = Form.create({ onValuesChange })(AgentCurrentServeStatusInfo);
export default AgentCurrentServeStatusInfoCard;