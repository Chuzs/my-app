import React from 'react';
import { Button, Form, Tabs, Input } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class SendNotes extends React.Component {
    componentDidMount() {
        onValuesChange(this.props, "", this.props.form.getFieldsValue());
    }
    componentDidUpdate() {
        const resText = document.getElementsByClassName('resText')[0];
        if (resText) {
            resText.scrollTop = resText.scrollHeight;
        }
    }
    send = () => {
        this.props.onReKeyChange('res');
        postMsg(this.props, this.props.form.getFieldsValue(), "/ccbcs/rs/skillqueues/query/1/1");
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="便笺发送" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="URL">
                            <Input name="URL" value="/ccbcs/rs/skillqueues/query/1/1" disabled />
                        </Form.Item>
                        <Form.Item label="agentIds">
                            {getFieldDecorator('agentIds', {
                                rules: [{ required: true, }],
                            })(
                                <Input name="agentIds" placeholder="Please input your agentIds!" />
                            )}
                        </Form.Item>
                        <Form.Item label="message">
                            {getFieldDecorator('message', {
                                rules: [{ required: true, }],
                            })(
                                <Input name="message" placeholder="Please input your message!" />
                            )}
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                            <Button type="primary" onClick={this.send}>Send</Button>
                        </Form.Item>
                    </Form>
                </TabPane>
            </Tabs >
        )
    }
}
const SendNotesCard = Form.create({ onValuesChange })(SendNotes);
export default SendNotesCard