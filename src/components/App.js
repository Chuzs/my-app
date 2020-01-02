import React from 'react';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { updateReqText, updateResText, updateStatusBtn, updateWaitNum, updateTime, updateLoginBtn, updateRestBtn, updateOtherworkBtn, updateSetStatusBtn, updateRestVisible, updateReKey } from '../redux/actions';



class App extends React.Component {
  render() {
    return (
      <Router>
        <Header {...this.props}></Header>
        <div className="main-wrapper">
          <Sider></Sider>
          <Content {...this.props}></Content>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(updateReqText(value));
    },
    onResponse: value => {
      dispatch(updateResText(value));
    },
    onWaitNumChange: value => {
      dispatch(updateWaitNum(value));
    },
    onStatusTextChange: value => {
      dispatch(updateStatusBtn(value));
    },
    onTimeChange: value => {
      dispatch(updateTime(value));
    },
    onRestChange: value => {
      dispatch(updateRestBtn(value));
    },
    onOtherworkChange: value => {
      dispatch(updateOtherworkBtn(value));
    },
    onLoginChange: value => {
      dispatch(updateLoginBtn(value));
    },
    onSetStatusChange: value => {
      dispatch(updateSetStatusBtn(value));
    },
    onRestVisibleChange: value => {
      dispatch(updateRestVisible(value));
    },
    onReKeyChange: value => {
      dispatch(updateReKey(value));
    }
  }
}

const mapStateToProps = state => ({
  reqText: state.reqText,
  resText: state.resText,
  waitNum: state.waitNum,
  statusText: state.statusText,
  statusBtnClass: state.statusBtnClass,
  time: state.time,
  setStatusBtnClass: state.setStatusBtnClass,
  setStatusBtnText: state.setStatusBtnText,
  restBtnText: state.restBtnText,
  otherworkBtnText: state.otherworkBtnText,
  loginBtnText: state.loginBtnText,
  loginBtnClass: state.loginBtnClass,
  restVisible: state.restVisible,
  reKey: state.reKey,
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;

