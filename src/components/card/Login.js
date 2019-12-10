import React from 'react';
import { Button, Card, Form, Input, Select, Tooltip, Icon } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { AgentInfo, ServerInfo } from '../global';
const { Option } = Select;
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
const buildRes = (interfaceName, res) => {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '    ' + interfaceName + ': ' + JSON.stringify(res, null, 4) + '\n'
}
const eventpoll = (props) => {
    axios.post("http://192.168.88.8:8080/ccacs/ws/event/poll", '{}', {
        withCredentials: true,
        timeout: 11000,
    }).then((res) => {
        if (res.data.events.length !== 0) {
            props.onResponse(buildRes('eventpoll', res.data));
        }
    })
}
const queryWaitNum = (props) => {
    let params = {
        agentId: AgentInfo.agentId,
        systemCode: AgentInfo.systemCode
    }
    axios.post("http://192.168.88.8:8080/ccacs/ws/query/queryacdstatus", JSON.stringify(params), {
        withCredentials: true,
    }).then((res) => {
        let queueSize = 0;
        if (res.data.result === '0') {
            for (let i in res.data.hwAcdInfos) {
                queueSize += res.data.hwAcdInfos[i].queueSize;
            }
        } else if (res.data.result === '150001') {
            if (ServerInfo.queryWaitNumTimer) {
                clearInterval(ServerInfo.queryWaitNumTimer);
            }
        }
        props.
    })
}
class Login extends React.Component {
    onClick = () => {
        axios.post("http://192.168.88.8:8080/ccacs/ws/agent/login", JSON.stringify(removeUndefine(this.props.form.getFieldsValue())), {
            withCredentials: true,
        }).then((res) => {
            this.props.onResponse(buildRes('login', res.data));
            if (res.data.result === '0') {
                ServerInfo.eventpollTimer = setInterval(eventpoll(this.props), 1000);
            }
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
const LoginCard = Form.create({ onValuesChange })(Login);
export default LoginCard;