import React from 'react';
import { Row, Col } from 'antd';

class Header extends React.Component {

    render() {
        return (
            <header id="header" className="clearfix">
                <Row>
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                        <a id="logo" href="/">
                            统一调度Demo
                        </a>
                    </Col>
                    <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}></Col>
                </Row>
            </header>
        )
    }

}

export default Header;