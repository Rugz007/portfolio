import { Card, Col, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React from 'react'
import './Contact.css';
export const Contact: React.FC = () => {
    const Fade = require('react-reveal/Fade');
    return (
        <Layout>
            <Content style={{ backgroundColor: "#222222" }}>
                <Row>
                    <Col span={4} />
                    <Col span={16}>
                        <Fade>
                            <Row style={{ marginTop: '6%', textAlign: 'left' }} >
                                <h1 style={{ fontSize: '2em' }}>Contact Me<br /><div style={{ height: '4px', backgroundColor: '#00c2c2', width: '60%' }} /></h1>
                            </Row>
                            <Row>
                                <Row style={{backdropFilter:''}}>
                                <h3>You can contact me on the platforms below and I will respond within 24 hours. Feel free to ask me anything.</h3>
                                </Row>
                            </Row>
                            <Row>
                                <Card bordered={false} style={{ width: '80%', margin: '2% auto' }}>
                                    <Row>
                                        <Col lg={2} xs={1} sm={1} />
                                        <Col lg={12} xs={0} sm={0}>
                                            <img alt='contact svg' src="contact.svg" style={{ width: '100%' }} />
                                        </Col>
                                        <Col lg={8} xs={22} sm={22}>
                                            <h2>Ways to Contact me: </h2>
                                            <a href='mailto:rugvedsomwanshi007@gmail.com'  rel="noopener noreferrer" target="_blank"><img alt='mail' src="https://img.icons8.com/fluent/48/000000/apple-mail.png" /></a>
                                            <a href='https://www.linkedin.com/in/rugved-somwanshi-29078417b/'  rel="noopener noreferrer" target="_blank"><img alt='linkedin' src="https://img.icons8.com/fluent/48/000000/linkedin.png" /></a>
                                            <h2>Other Links: </h2>
                                            <a href='https://github.com/rugz007'  rel="noopener noreferrer" target="_blank"><img alt='github' src="https://img.icons8.com/fluent/48/000000/github.png"/></a>
                                            <a href='https://instagram.com/rugz007'  rel="noopener noreferrer" target="_blank"><img alt='instagram' src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
                                        </Col>
                                        <Col lg={2} xs={1} sm={1} />
                                    </Row>  
                                </Card>
                                *I do not own any logos/images and all the images are property of respective companies/organizations.

                            </Row>
                        </Fade>
                    </Col>
                    <Col span={4} />
                </Row>
            </Content>
        </Layout>
    );
}