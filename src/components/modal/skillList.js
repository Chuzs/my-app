import React from 'react';
import { Modal, Checkbox } from 'antd'
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange','Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

class skillListModal extends React.Component {

  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  render() {
    return (
      <Modal
        title="技能队列（多选）"
        visible={false}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <div>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Check all
          </Checkbox>
          </div>
          <br />
          <CheckboxGroup
            options={plainOptions}
            value={this.state.checkedList}
            onChange={this.onChange}
          />
        </div>
      </Modal>
    )
  }
}

export default skillListModal