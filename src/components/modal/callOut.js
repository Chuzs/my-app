import React from 'react';
import { Modal, Radio, Input } from 'antd'
class callOutModal extends React.Component {
    state = { visible: false };

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
        })
    }

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
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        return (
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                    <Radio style={radioStyle} value={1}> Option A</Radio>
                    <Radio style={radioStyle} value={2}>
                        Option B
        </Radio>
                    <Radio style={radioStyle} value={3}>
                        Option C
        </Radio>
                    <Radio style={radioStyle} value={4}>
                        More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                    </Radio>
                </Radio.Group>
            </Modal>
        )
    }
}

export default callOutModal