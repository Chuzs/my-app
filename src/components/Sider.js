import React from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class Sider extends React.Component {
    render() {
        return (
            <div>
                <section className="main-menu-inner">
                    <Menu
                        mode="inline"
                        defaultOpenKeys={['sub1']}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    ccacs接口
                                    </span>
                            }
                        >
                            <Menu.Item key="1">
                                <a href="/abc">option2</a>
                            </Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="laptop" />
                                    ccbms接口
                                    </span>

                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="notification" />
                                    ccbcs接口
                                    </span>
                            }
                        >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </section>
            </div>
        )
    }
}

export default Sider;