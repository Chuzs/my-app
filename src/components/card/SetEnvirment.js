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
    let config = this.props.form.getFieldsValue();
    localStorage.setItem("tyddURL", config.tyddURL);
    localStorage.setItem("userName", config.userName);
    localStorage.setItem("userPasswd", config.userPasswd);
    localStorage.setItem("domain", config.domain);
    localStorage.setItem("systemCode", config.systemCode);
    localStorage.setItem("websocketUrl", config.websocketUrl);
    localStorage.setItem("RTCpwd", config.RTCpwd);
    localStorage.setItem("zucUrl", config.zucUrl);
    console.log(localStorage.getItem("tyddURL"))
    message.success("保存成功")
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
                  initialValue: localStorage.getItem("tyddURL") === "undefined" || localStorage.getItem("tyddURL") === "null" ? '' : localStorage.getItem("tyddURL")
                })(<Input placeholder="Please input your tyddURL!" />)}
              </Tooltip>
            </Form.Item>
            <Form.Item label="坐席分机号">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your deviceNum!' }],
                initialValue: localStorage.getItem("userName") === "undefined" || localStorage.getItem("userName") === "null" ? '' : localStorage.getItem("userName")
              })(<Input placeholder="Please input your deviceNum!" />)}
            </Form.Item>
            <Form.Item label="分机密码">
              {getFieldDecorator('userPasswd', {
                rules: [{ required: true, message: 'Please input your password!' }],
                initialValue: localStorage.getItem("userPasswd") === "undefined" || localStorage.getItem("userPasswd") === "null" ? '' : localStorage.getItem("userPasswd")
              })(<Input placeholder="Please input your password!" />)}
            </Form.Item>
            <Form.Item label="软电话注册地址">
              {getFieldDecorator('domain', {
                rules: [{ required: true, message: 'Please input your address!' }],
                initialValue: localStorage.getItem("domain") === "undefined" || localStorage.getItem("domain") === "null" ? '' : localStorage.getItem("domain")
              })(<Input placeholder="Please input your address!" />)}
            </Form.Item>
            <Form.Item label="系统编码">
              {getFieldDecorator('systemCode', {
                // rules: [{ required: true, message: 'Please input your systemCode!' }],
                initialValue: localStorage.getItem("systemCode") === "undefined" || localStorage.getItem("systemCode") === "null" ? '' : localStorage.getItem("systemCode")
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
                initialValue: localStorage.getItem("websocketUrl") === "undefined" || localStorage.getItem("websocketUrl") === "null" ? '' : localStorage.getItem("websocketUrl")
              })(<Input placeholder="Please input your websocketUrl!" />)}
            </Form.Item>
            <Form.Item label="webRTC 密码">
              {getFieldDecorator('RTCpwd', {
                initialValue: localStorage.getItem("RTCpwd") === "undefined" || localStorage.getItem("RTCpwd") === "null" ? '' : localStorage.getItem("RTCpwd")
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
                initialValue: localStorage.getItem("zucUrl") === "undefined" || localStorage.getItem("zucUrl") === "null" ? '' : localStorage.getItem("zucUrl")
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