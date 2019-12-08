import React from 'react';
import { Button, Card, Form, Input } from 'antd';
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
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
class SetEnvirment extends React.Component {
    componentDidMount() {
        onValuesChange(this.props, "", this.props.form.getFieldsValue());
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Card type="inner" title="环境设置">
                <Form {...formItemLayout}>
                    <Form.Item label="统一调度地址">
                        {getFieldDecorator('tyddURL', {
                            rules: [{ required: true, message: 'Please input your tyddURL!' }],
                        })(<Input />)}
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
                    <Form.Item label="Warning">
                        <Input placeholder="Warning" />
                    </Form.Item>
                    <Form.Item label="Fail">
                        <Input placeholder="unavailable choice" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Card>
        )
    }
}
const SetEnvirmentCard = Form.create({ onValuesChange })(SetEnvirment);
export default SetEnvirmentCard