import { Col, Row, Card, Divider, Button, List } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React from 'react';
import { WorkCard } from '../../components/Experience/WorkCard';
import Work from './Work';
import './Experience.css';
import { Link } from 'react-router-dom'


export const Experience: React.FC = () => {
    const Fade = require('react-reveal/Fade');
    const projects = Work.projects;
    return (
        <Layout>
            <Content style={{ backgroundColor: "#222222" }}>

                <Row className="experiencecover" style={{ height: '30vh' }} />
                <Row>
                    <Col lg={4} md={2} sm={1} xs={1} />
                    <Col lg={16} md={20} sm={22} xs={22}>
                        <Fade>
                            <Row style={{ marginTop: '6%', textAlign: 'left' }} >
                                <h1 style={{ fontSize: '2em' }}>Work Experience<br /><div style={{ height: '4px', backgroundColor: '#00c2c2', width: '60%' }} /></h1>
                                <h3>I specialise in working in creating end-to-end Full Stack web applications with Machine Learning models backed by the modern technologies
                                of React JS and Django. I am also known for my versatile skills in game development in the freelancing market.
                        </h3>
                                <Card bordered={false} hoverable style={{ width: '100%' }}>
                                    <Row>
                                        <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                                        <Col xl={4} lg={8} md={8} sm={8} xs={20}><a href='https://bsmbharat.org/' rel="noopener noreferrer" target="_blank" style={{ width: '85%', margin: 'auto' }}><img src='logo_BSM.png' style={{ width: '100% ' }} alt='bsm bharat' /></a></Col>
                                        <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                                        <Col xl={20} lg={16} md={16} sm={24} xs={24}>
                                            <h2 style={{ float: 'left' }}><b>Website Development Intern</b></h2>
                                            <h3 style={{ float: 'right' }}>July 2019-January 2021</h3>
                                            <Divider />
                                            <h2>Technologies Used:<img alt='react' src="https://img.icons8.com/color/48/000000/react-native.png" /> <img alt='mongo' src="https://img.icons8.com/color/48/000000/mongodb.png" /> <img alt='docker' src="https://img.icons8.com/color/48/000000/docker.png" /></h2>
                                            <ul>
                                                <li>
                                                    <h2>Developed the website for digitalizing the functioning of Bhartiya Shikshan Mandal using modern technologies.</h2>
                                                </li>
                                            </ul>
                                            <a href='https://bsmmandal.in/' rel="noopener noreferrer" target="_blank"><Button shape='round' style={{ float: 'right' }}>Visit Website</Button></a>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                        </Fade>
                    </Col>
                    <Col lg={4} md={2} sm={1} xs={1} />
                </Row>
                <Row style={{ marginTop: '2%', backgroundColor: 'white', color: 'black', paddingTop: '2%' }}>
                    <Col span={4} />
                    <Col span={16}>
                        <Fade>
                            <Row style={{ textAlign: 'left' }}>
                                <h1 style={{ color: 'black', fontSize: '2em' }}>Personal Projects<br /> <div style={{ height: '4px', backgroundColor: '#00c2c2', width: '60%' }} /></h1>
                                <List grid={{
                                    gutter: 16,
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                    lg: 4,
                                    xl: 3,
                                    xxl: 3,
                                }}
                                    style={{ width: "100%", margin: 'auto' }}
                                    dataSource={projects}
                                    renderItem={(item) => (<List.Item><WorkCard title={item.title} icon={item.icon} description={item.description} stack={item.stack}></WorkCard></List.Item>)}
                                ></List>
                            </Row>
                        </Fade>
                    </Col>
                    <Col span={4} />
                </Row>
                <Row style={{ paddingBottom: '3%', width: '100%', textAlign: 'left' }}>
                    <Col span={4} />
                    <Col span={16} >
                        <Fade>
                            <Row style={{ textAlign: 'center', marginTop: '3%', width: '100%' }}>
                                <Col span={24}><h1 style={{ fontSize: '2em' }}>Interested in my work or need help? Let's Talk</h1></Col>
                                <Col span={24}><Button size="large" type='primary' style={{ color: 'black' }} shape='round'><Link to='/contact'>Contact Me</Link></Button></Col>
                            </Row>
                        </Fade>
                    </Col>
                    <Col span={4} />
                </Row>
            </Content>
        </Layout>
    );
}