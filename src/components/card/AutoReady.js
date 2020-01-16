import React from 'react';
import { Button, Form, Select, Tabs } from 'antd';
import axios from 'axios';
import { onValuesChange, formItemLayout, removeUndefine, buildRes } from '../../assets/js/global';
const { Option } = Select;
const { TabPane } = Tabs;

class AutoReady extends React.Component {
  componentDidMount() {
    onValuesChange(this.props, "", this.props.form.getFieldsValue());
  }
  send = () => {
    this.props.onReKeyChange('res');
    axios.post("http://" + localStorage.getItem("tyddURL") + "/ccacs/ws/agent/setagentautoenteridle",
        JSON.stringify(removeUndefine(this.props.form.getFieldsValue())), {
        withCredentials: true,
      }).then(res => {
        this.props.onResponse(buildRes('setagentautoenteridle', res.data));
      }).catch(error => {
        this.props.onResponse(buildRes('setagentautoenteridle', { "message": error.message }));
      })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="设置通话结束后是否自动进入空闲态" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="flag">
              {getFieldDecorator('flag', {
                rules: [{ required: true }], initialValue: "0"
              })(<Select name="flag">
                <Option value="1">true</Option>
                <Option value="0">false</Option>
              </Select>)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
              <Button type="primary" onClick={this.send}>send</Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs >
    )
  }
}
const AutoReadyCard = Form.create({ onValuesChange })(AutoReady);
export default AutoReadyCard