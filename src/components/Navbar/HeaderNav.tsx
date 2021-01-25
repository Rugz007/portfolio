import Layout, { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { Menu, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
export const HeaderNav: React.FC = () => {
    return (
        <>
            <Layout style={{backgroundColor:'#000000'}}>
                <Header>
                    <Row>
                        <Col lg={4} md={2} sm={1} xs={1}  />
                        <Col lg={16} md={20} sm={22} xs={22} >
                            <img src='logo.gif' alt='logo portfolio' style={{ width: '70px', float: 'left', marginTop: '1%'}} />
                            <Menu style={{ width: '60%',float:'right', textAlign: 'right' }} theme='dark' mode="horizontal" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/education'>Education</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/experience'>Experience</Link></Menu.Item>
                                <Menu.Item key="4"><Link to='/contact'>Contact Me</Link></Menu.Item>
                            </Menu>
                        </Col>
                        <Col lg={4} md={2} sm={1} xs={1}  />
                    </Row>
                </Header>
            </Layout>
        </>
    );
}