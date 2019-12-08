import React from 'react';
import { Button, Card, Row, Col, Input } from 'antd';
import { Switch, Route } from "react-router-dom";
import { LoginCard, ResetAgentSkillsCard, SetEnvirmentCard } from './card'
import { connect } from 'react-redux';
import { updateReqText, updateResText } from '../redux/actions';
const { TextArea } = Input;
class Content extends React.Component {
  onClick = () => {
    this.props.onResponse('');
  }
  render() {
    const reqText = JSON.stringify(this.props.reqText, null, 4);
    const resText = this.props.resText;
    return (
      <Col className="main-content" xs={0} sm={0} md={0} lg={18} xl={20} xxl={20}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
            <Switch>
              <Route path="/login" >
                <LoginCard onChange={this.props.onChange} onResponse={this.props.onResponse} />
              </Route>
              <Route path="/resetAgentSkills">
                <ResetAgentSkillsCard onChange={this.props.onChange} onResponse={this.props.onResponse} />
              </Route>
              <Route path="/">
                <SetEnvirmentCard onChange={this.props.onChange} />
              </Route>
            </Switch>
          </Col>
          <Col xs={0} sm={0} md={0} lg={9} xl={11} xxl={11} offset={1}>
            <Card type="inner" title="请求报文" id="reqTextCard">
              <TextArea style={{ "border": "none", "resize": "none" }} autoSize={{ minRows: 1 }} value={ reqText }></TextArea>
            </Card>
            <Card type="inner" title="响应报文" id="resTextCard" extra={<Button onClick={this.onClick}>清除</Button>} style={{ marginTop: "20px" }}>
              <TextArea style={{ "border": "none", "resize": "none" }} autoSize={{ minRows: 8 }} value={ resText } disabled></TextArea>
            </Card>
          </Col>
        </Row>
      </Col>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(updateReqText(value))
    },
    onResponse: value => {
      dispatch(updateResText(value))
    }
  }
}

const mapStateToProps = state => ({
  reqText: state.reqText,
  resText: state.resText
})

Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)

export default Content;