import React from 'react';
import { Menu, Icon, Col } from 'antd';
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

class Sider extends React.Component {
  render() {
    let pathname = window.location.pathname.split('/');
    return (
      <Col className='main-menu' xs={24} sm={24} md={24} lg={6} xl={4} xxl={3}>
        <section className="main-menu-inner">
          <Menu mode="inline" defaultOpenKeys={[pathname[1]]} defaultSelectedKeys={[pathname[2] ? pathname[2] : "/"]}>
            <Menu.Item key="/">
              <Link to="/"><Icon type="notification" />环境设置</Link>
            </Menu.Item>
            <SubMenu key="ccacs" title={<span><Icon type="user" />ccacs接口</span>} >
              <Menu.Item key="login"><Link to="/ccacs/login">签入</Link> </Menu.Item>
              <Menu.Item key="resetAgentSkills"><Link to="/ccacs/resetskill">重设坐席技能</Link></Menu.Item>
              <Menu.Item key="setagentautoenteridle"><Link to="/ccacs/setagentautoenteridle">自动空闲</Link></Menu.Item>
              <Menu.Item key="setagentstate"><Link to="/ccacs/setagentstate">修改坐席状态</Link></Menu.Item>
              <Menu.Item key="agentstate"><Link to="/ccacs/agentstate">查询坐席当前状态</Link></Menu.Item>
              <Menu.Item key="callout"><Link to="/ccacs/callout">外呼</Link></Menu.Item>
              <Menu.Item key="transout"><Link to="/ccacs/transout">转出</Link></Menu.Item>
              <Menu.Item key="callinfo"><Link to="/ccacs/callinfo">查询呼叫信息</Link></Menu.Item>
              <Menu.Item key="querycalldata"><Link to="/ccacs/querycalldata">获取随路数据</Link></Menu.Item>
              <Menu.Item key="setcalldata"><Link to="/ccacs/setcalldata">设置随路数据</Link></Menu.Item>
              <Menu.Item key="agentcallidinfo"><Link to="/ccacs/agentcallidinfo">查询座席的呼叫信息</Link></Menu.Item>
              <Menu.Item key="releasecall"><Link to="/ccacs/releasecall">挂机</Link></Menu.Item>
              <Menu.Item key="internalhelp"><Link to="/ccacs/internalhelp">内部求助</Link></Menu.Item>
              <Menu.Item key="conference"><Link to="/ccacs/conference">三方通话</Link></Menu.Item>
              <Menu.Item key="setmute"><Link to="/ccacs/setmute">静音/取消静音</Link></Menu.Item>
              <Menu.Item key="hold"><Link to="/ccacs/hold">保持</Link></Menu.Item>
              <Menu.Item key="unhold"><Link to="/ccacs/unhold">取消保持</Link></Menu.Item>
              <Menu.Item key="agentsenddtmf"><Link to="/ccacs/agentsenddtmf">二次拨号</Link></Menu.Item>
              <Menu.Item key="answer"><Link to="/ccacs/answer">应答</Link></Menu.Item>
              <Menu.Item key="forceresetstate"><Link to="/ccacs/forceresetstate">强制设置坐席状态</Link></Menu.Item>
              <Menu.Item key="autoanswer"><Link to="/ccacs/autoanswer">设置自动应答</Link></Menu.Item>
              <Menu.Item key="supervise"><Link to="/ccacs/supervise">监听</Link></Menu.Item>
              <Menu.Item key="insert"><Link to="/ccacs/insert">插入</Link></Menu.Item>
              <Menu.Item key="intercept"><Link to="/ccacs/intercept">拦截</Link></Menu.Item>
              <Menu.Item key="poll"><Link to="/ccacs/poll">轮询</Link></Menu.Item>
              <Menu.Item key="skillsinfo"><Link to="/ccacs/skillsinfo">查询座席的技能队 AP01</Link></Menu.Item>
              <Menu.Item key="queryacdstatus"><Link to="/ccacs/queryacdstatus">查询排队数 AS01</Link></Menu.Item>
              <Menu.Item key="agentstatinfo"><Link to="/ccacs/agentstatinfo">查询座席接续指标 AP09</Link></Menu.Item>
              <Menu.Item key="setcallnum"><Link to="/ccacs/setcallnum">设置座席同时处理呼叫数</Link></Menu.Item>
              <Menu.Item key="confirmmessagepush"><Link to="/ccacs/confirmmessagepush">确认IM登录成功是否允许消息推送</Link></Menu.Item>
              <Menu.Item key="makecall"><Link to="/ccacs/makecall">视频外呼</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="ccbms" title={<span><Icon type="laptop" />ccbms接口</span>} >
              <Menu.Item key="sendnotes"><Link to="/ccbms/sendnotes">便笺发送</Link></Menu.Item>
              <Menu.Item key="agentstatusinidle"><Link to="/ccbms/agentstatusinidle">查询签入空闲座席的实时监控信息</Link></Menu.Item>
              <Menu.Item key="agentskillstatusinfo"><Link to="/ccbms/agentskillstatusinfo">查询多个技能下的座席实时监控信息 RT_restApI_2</Link></Menu.Item>
              <Menu.Item key="siteagentcallandskillinfobyagentids "><Link to="/ccbms/siteagentcallandskillinfobyagentids">查询呼叫和技能信息</Link></Menu.Item>
              <Menu.Item key="resetagentskills"><Link to="/ccbms/resetagentskills">批量重设技能队列</Link></Menu.Item>
              <Menu.Item key="queryagentStatebyskillids"><Link to="/ccbms/queryagentStatebyskillids">查询技能下坐席状态 RT_restApI_4</Link></Menu.Item>
              <Menu.Item key="agentstatusinfobyagentids"><Link to="/ccbms/agentstatusinfobyagentids">查询多个座席人员活动状态的实时监控信息 AP05</Link></Menu.Item>
              <Menu.Item key="agentcurrentservestatusinfo"><Link to="/ccbms/agentcurrentservestatusinfo">查询多个座席人员当前正在服务的技能和呼叫信息 AP05</Link></Menu.Item>
              <Menu.Item key="skillstatusinfo"><Link to="/ccbms/skillstatusinfo">查询技能队列的实时监控信息 S12</Link></Menu.Item>
              <Menu.Item key="agentidlinknumbyskillsdandstate"><Link to="/ccbms/agentidlinknumbyskillsdandstate">根据技能ID和工号状态查询符合状态的工号、连接数 SXR02</Link></Menu.Item>
              <Menu.Item key="queryagentidstatusbyagentids"><Link to="/ccbms/queryagentidstatusbyagentids">根据平台工号列表，查询工号状态 SXR01</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="ccbcs" title={<span> <Icon type="notification" />ccbcs接口 </span>} >
              <Menu.Item key="skilllist"><Link to="/ccbcs/skilllist">查询座席的技能列表 AP03</Link></Menu.Item>
              <Menu.Item key="queryallskills"><Link to="/ccbcs/queryallskills">查询所有技能 AP04</Link></Menu.Item>
              <Menu.Item key="agentidrange"><Link to="/ccbcs/agentidrange">查询工号区间 RT_restApI_6</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </section>
      </Col>
    )
  }
}

export default Sider;