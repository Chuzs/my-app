import React from 'react';
import { Button, Form, Input, Tabs } from 'antd';
import { onValuesChange, formItemLayout, postMsg } from '../../assets/js/global'
const { TabPane } = Tabs;

class Intercept extends React.Component {
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
		postMsg(this.props, this.props.form.getFieldsValue(), "/ccacs/ws/quality/insert");
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Tabs defaultActiveKey="1">
				<TabPane tab="拦截" key="1">
					<Form {...formItemLayout}>
						<Form.Item label="targetAgentId">
							{getFieldDecorator('targetAgentId', { rules: [{ required: true, message: 'Please input your targetAgentId!' }] })(
								<Input name="targetAgentId" placeholder="Please input your targetAgentId!" />
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
const InterceptCard = Form.create({ onValuesChange })(Intercept);
export default InterceptCard;