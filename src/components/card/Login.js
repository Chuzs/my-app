import React from 'react';
import { Button, Card, Form, Input, Select } from 'antd';
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
const Login = () => (
    <Card type="inner" title="请求报文">
        <Form {...formItemLayout}>
            <Form.Item label="Fail">
                <Input placeholder="unavailable choice" id="error" />
            </Form.Item>
            <Form.Item label="Warning">
                <Input placeholder="Warning" id="warning" />
            </Form.Item>
            <Form.Item label="Validating">
                <Input placeholder="I'm the content is being validated" id="validating" />
            </Form.Item>
            <Form.Item label="Success">
                <Input placeholder="I'm the content" id="success" />
            </Form.Item>
            <Form.Item label="Warning">
                <Input placeholder="Warning" id="warning2" />
            </Form.Item>
            <Form.Item label="Fail">
                <Input placeholder="unavailable choice" id="error2" />
            </Form.Item>
            <Form.Item label="Error">
                <Select defaultValue="1">
                    <Option value="1">Option 1</Option>
                    <Option value="2">Option 2</Option>
                </Select>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                                </Button>
            </Form.Item>
        </Form>
    </Card>
)
export default Login;