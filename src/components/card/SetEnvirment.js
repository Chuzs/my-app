import React from 'react';
import { Button, Form, Input, Tabs, Tooltip, Icon, message } from 'antd';
import { onValuesChange } from '../../assets/js/global';
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
class SetEnvirment extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  save = () => {
    localStorage.setItem("config", JSON.stringify(this.props.form.getFieldsValue()));
    console.log(JSON.parse(localStorage.getItem("config")))
    message.success("保存成功")
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = JSON.parse(localStorage.getItem("config"));
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="环境设置" key="1">
          <Form {...formItemLayout}>
            <Form.Item label={<span>
              统一调度地址&nbsp;
                <Tooltip title='格式为：ip:port'>
                <Icon type="question-circle" />
              </Tooltip>
            </span>}>
              <Tooltip
                trigger={['focus']}
                title={'格式为：ip:port'}
                placement="top"
                overlayClassName="numeric-input"
              >
                {getFieldDecorator('tyddURL', {
                  rules: [{ required: true, message: 'Please input your tyddURL!' }],
                  initialValue: config ? config.tyddURL : ''
                })(<Input placeholder="Please input your tyddURL!" />)}
              </Tooltip>
            </Form.Item>
            <Form.Item label="坐席分机号">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your deviceNum!' }],
                initialValue: config ? config.userName : ''
              })(<Input placeholder="Please input your deviceNum!" />)}
            </Form.Item>
            <Form.Item label="分机密码">
              {getFieldDecorator('userPasswd', {
                rules: [{ required: true, message: 'Please input your password!' }],
                initialValue: config ? config.userPasswd : ''
              })(<Input placeholder="Please input your password!" />)}
            </Form.Item>
            <Form.Item label="软电话注册地址">
              {getFieldDecorator('domain', {
                rules: [{ required: true, message: 'Please input your address!' }],
                initialValue: config ? config.domain : ''
              })(<Input placeholder="Please input your address!" />)}
            </Form.Item>
            <Form.Item label="系统编码">
              {getFieldDecorator('systemCode', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
                initialValue: config ? config.systemCode : ''
              })(<Input placeholder="Please input your systemCode!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.save}>Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="webRTC配置" key="2">
          <Form {...formItemLayout}>
            <Form.Item label="websocket URL">
              {getFieldDecorator('websocketUrl', {
                initialValue: config ? config.websocketUrl : ''
              })(<Input placeholder="Please input your websocketUrl!" />)}
            </Form.Item>
            <Form.Item label="webRTC 密码">
              {getFieldDecorator('RTCpwd', {
                initialValue: config ? config.RTCpwd : ''
              })(<Input placeholder="Please input your webRTC password!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.save}>Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="ZUC配置" key="3">
          <Form {...formItemLayout}>
            <Form.Item label="ZUC URL">
              {getFieldDecorator('zucUrl', {
                initialValue: config ? config.zucUrl : ''
              })(<Input placeholder="Please input your zucUrl!" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.save}>Save</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const SetEnvirmentCard = Form.create({ onValuesChange })(SetEnvirment);
export default SetEnvirmentCard