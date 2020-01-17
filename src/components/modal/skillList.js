import React from 'react';
import { Modal, Checkbox } from 'antd'
import axios from 'axios';
import { buildRes, AgentInfo } from '../../assets/js/global';
const CheckboxGroup = Checkbox.Group;

// const plainOptions = ['Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange'];
// const defaultCheckedList = ["测试技能3", "测试技能4", "测试技能5"];

class skillListModal extends React.Component {
  state = {
    indeterminate: false,
    checkAll: true,
  };
  handleOk = e => {
    this.props.onSkillListVisibleChange(false);
    axios.post("http://" + localStorage.getItem("tyddURL") + "/ccacs/ws/agent/resetskill", "{}", {
      withCredentials: true,
    }).then((res) => {
      this.props.onResponse(buildRes('resetskill', res.data));
    }).catch(error => {
      this.props.onResponse(buildRes('resetskill', { "message": error.message }));
    })
    this.setState({
      indeterminate: false,
      checkAll: true
    })
  };

  handleCancel = () => {
    this.props.onSkillListVisibleChange(false);
    this.setState({
      indeterminate: false,
      checkAll: true
    })
  };

  onChange = checkedList => {
    this.props.onSkillNameListChange(checkedList);
    this.setState({
      indeterminate: !!checkedList.length && checkedList.length < AgentInfo.skillNameList.length,
      checkAll: checkedList.length === AgentInfo.skillNameList.length,
    });
  };

  onCheckAllChange = (e) => {
    this.props.onSkillNameListChange(e.target.checked ? AgentInfo.skillNameList : []);
    this.setState({
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    // let skillNameList = this.props.skillNameList;
    // skillList =[{"skillName":"测试技能3", "skillId":"210316669", "channelId":5}, {"skillName":"测试技能4", "skillId":"210316910", "channelId":5}]
    // skillNameList = this.props.skillNameList ? this.props.skillNameList : defaultCheckedList;
    // console.log(skillNameList)
    if (AgentInfo.skillNameList.length === 0) {
      AgentInfo.skillNameList = this.props.skillNameList;
    }
    return (
      <Modal
        title="技能队列（多选）"
        visible={this.props.skillListVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <div>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={event => { this.onCheckAllChange(event) }}
              checked={this.state.checkAll}
            >
              全选
          </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            options={AgentInfo.skillNameList}
            value={this.props.skillNameList}
            onChange={(checkedList) => { this.onChange(checkedList) }}
          />
        </div>
      </Modal>
    )
  }
}

export default skillListModal