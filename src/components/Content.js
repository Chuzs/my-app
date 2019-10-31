import React from 'react';
import { Button, Card, Row, Col, } from 'antd';
import { Switch, Route } from "react-router-dom";
import { Login, ResetAgentSkills } from './CardList';


class Content extends React.Component {

    render() {
        return (
            <Row>
                <Col xs={0} sm={0} md={0} lg={9} xl={10} xxl={10} offset={1}>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/resetAgentSkills" component={ResetAgentSkills} />
                    </Switch>
                </Col>
                <Col xs={0} sm={0} md={0} lg={9} xl={11} xxl={11} offset={1}>
                    <Card type="inner" title="请求报文"></Card>
                    <Card type="inner" title="响应报文" extra={<Button>清除</Button>} style={{ marginTop: "20px" }}>

                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Content;