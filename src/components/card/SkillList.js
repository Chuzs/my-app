import React from 'react';
import { Button, Form, Tabs, Input, Tooltip, Icon } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global';
const { TabPane } = Tabs;

class SkillList extends React.Component {
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
    postMsg(this.props, this.props.form.getFieldsValue(), "/ccbcs/rs/agents/query/1/1");
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="工号查询座席的技能列表 AP03" key="1">
          <Form {...formItemLayout}>
            <Form.Item label="URL">
              <Input name="URL" value="/ccbcs/rs/agents/query/1/1" disabled />
            </Form.Item>
            <Form.Item label={
              <span>
                工号列表&nbsp;
                <Tooltip title='格式为：["1111","2222"]'>
                  <Icon type="question-circle" />
                </Tooltip>
              </span>
            }>
              <Tooltip
                trigger={['focus']}
                title={'格式为：["1111","2222"]'}
                placement="top"
                overlayClassName="numeric-input"
              >
                {getFieldDecorator('ids', {rules: [{ required: true, }],})(
                  <Input name="ids" placeholder='Please input your ids!' />
                )}
              </Tooltip>
            </Form.Item>
            <Form.Item label="系统编码">
              {getFieldDecorator('systemCode', {})(
                <Input name="systemCode" placeholder="Please input your systemCode!" />
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
const SkillListCard = Form.create({ onValuesChange })(SkillList);
export default SkillListCard