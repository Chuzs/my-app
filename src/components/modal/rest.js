import React from 'react';
import { Modal, Radio } from 'antd';

class RestModal extends React.Component {

  state = {
    value: 30
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleOk = e => {
      this.props.onRestVisibleChange(false);
  };

  handleCancel = e => {
    this.props.onRestVisibleChange(false);
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
      marginLeft: '135px'
    };
    return (
      <Modal
        title="休息"
        visible={this.props.restVisible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width="400px"
      >
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} value={30}>半分钟</Radio>
          <Radio style={radioStyle} value={60}>一分钟</Radio>
          <Radio style={radioStyle} value={300}>五分钟</Radio>
          {/* <Radio style={radioStyle} value={4}>
            More...{this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio> */}
        </Radio.Group>
      </Modal>
    )
  }
}

export default RestModal;