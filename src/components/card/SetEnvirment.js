import React from 'react';
import { Button, Form, Input, Tabs, Tooltip, Icon, } from 'antd';
const { TabPane } = Tabs;
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
      <Tabs defaultActiveKey="1">
        <TabPane tab="环境设置" key="1">
          <Form {...formItemLayout}>
            <Form.Item label={<span>
              统一调度地址&nbsp;
                <Tooltip title='格式为：http://ip:port'>
                <Icon type="question-circle" />
              </Tooltip>
            </span>}>
              <Tooltip
                trigger={['focus']}
                title={'格式为：http://ip:port'}
                placement="top"
                overlayClassName="numeric-input"
              >
                {getFieldDecorator('tyddURL', {
                  rules: [{ required: true, message: 'Please input your tyddURL!' }],
                })(<Input placeholder="格式为：http://ip:port" />)}
              </Tooltip>
            </Form.Item>
            <Form.Item label="坐席分机号">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your deviceNum!' }],
              })(<Input placeholder="Please input your deviceNum!" />)}
            </Form.Item>
            <Form.Item label="分机密码">
              {getFieldDecorator('userPasswd', {
                rules: [{ required: true, message: 'Please input your password!' }],
              })(<Input placeholder="Please input your password!" />)}
            </Form.Item>
            <Form.Item label="软电话注册地址">
              {getFieldDecorator('domain', {
                rules: [{ required: true, message: 'Please input your address!' }],
              })(<Input placeholder="Please input your address!" />)}
            </Form.Item>
            <Form.Item label="系统编码">
              {getFieldDecorator('systemCode', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
              })(<Input placeholder="Please input your systemCode!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="webRTC配置" key="2">
          <Form {...formItemLayout}>
            <Form.Item label="websocket URL">
              {getFieldDecorator('websocketUrl', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
              })(<Input placeholder="Please input your websocketUrl!" />)}
            </Form.Item>
            <Form.Item label="webRTC 密码">
              {getFieldDecorator('RTCpwd', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
              })(<Input placeholder="Please input your webRTC password!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="ZUC配置" key="3">
          <Form {...formItemLayout}>
            <Form.Item label="ZUC URL">
              {getFieldDecorator('zucUrl', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
              })(<Input placeholder="Please input your zucUrl!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" htmlType="submit" onClick={this.save}>Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const SetEnvirmentCard = Form.create({ onValuesChange })(SetEnvirment);
export default SetEnvirmentCard