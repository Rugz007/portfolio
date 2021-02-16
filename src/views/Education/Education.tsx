import { Button, Card, Col, Divider, List, Row } from 'antd';
import Layout, { Content } from 'antd/lib/layout/layout';
import React from 'react'
import { CertCard } from '../../components/Education/CertCard';
import Certifications from './Certifications'
import './Education.css'
import { Link } from 'react-router-dom'

interface Certification {
    title: string,
    author: string,
    icon: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    date: string,
    subCourses?: Array<string>,
    link?: string | null,
    credID?: string | null,
}
export const Education: React.FC = () => {
    const certifications: Array<Certification> | undefined = Certifications;
    const Fade = require('react-reveal/Fade');
    return (
        <Layout>
            <Content style={{ backgroundColor: "#222222" }}>
                <Row className="educationcover" style={{ height: '300px' }} />
                <Row>
                    <Col lg={4} md={2} sm={1} xs={1} />
                    <Col lg={16} md={20} sm={22} xs={22}>
                        <Fade>
                            <Row style={{ marginTop: '6%', textAlign: 'left' }}>
                                <h1 style={{ fontSize: '2em' }}>Institutions<br /> <div style={{ height: '4px', backgroundColor: '#00c2c2', width: '60%' }} /></h1>
                                <Card bordered={false} hoverable style={{ width: '100%' }}>
                                    <Row>
                                        <Col xl={0} lg={0} md={0} sm={2} xs={2} />
                                        <Col xl={4} lg={8} md={8} sm={20} xs={20}><a rel="noopener noreferrer" target="_blank" href='https://pict.edu/' style={{ width: '100%', margin: 'auto' }}><img src="pict_logo.png" alt='pict' style={{ width: "100%" }} /></a></Col>
                                        <Col xl={0} lg={0} md={0} sm={2} xs={2} />
                                        <Col xl={20} lg={16} md={16} sm={24} xs={24}>
                                            <h2 style={{ float: 'left' }}><b>Pune Insitute of Computer Technology</b></h2>
                                            <h3 style={{ float: 'right' }}>2019-Present</h3>
                                            <Divider />
                                            <ul>
                                                <li>
                                                    <h2>Pursuing B.E. in Information Technology</h2>
                                                </li>
                                                <li>
                                                    <h2>Studied basic software engineering subjects like Data Structures, Algorithms, Database Management Systems etc.</h2>
                                                </li>
                                            </ul>
                                            <a rel="noopener noreferrer" target="_blank" href='https://pict.edu/'> <Button shape='round' style={{ float: 'right' }}>Visit Website</Button></a>
                                        </Col>
                                    </Row>
                                </Card>
                            </Row>
                        </Fade>
                    </Col>
                    <Col lg={4} md={2} sm={1} xs={1} />
                </Row>
                <Row style={{ marginTop: '6%', backgroundColor: 'white', color: 'black', paddingTop: '2%' }}>
                    <Col span={4} />
                    <Col span={16}>
                        <Fade>
                            <Row style={{ textAlign: 'left' }}>
                                <h1 style={{ color: 'black', fontSize: '2em' }}>Certifications<br /> <div style={{ height: '4px', backgroundColor: '#00c2c2', width: '60%' }} /></h1>
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
                                    dataSource={certifications}
                                    renderItem={(item: Certification) => (<List.Item><CertCard title={item.title} icon={item.icon} author={item.author} date={item.date} subCourses={item.subCourses} link={item.link}></CertCard></List.Item>)}
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