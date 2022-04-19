import Layout, { Content } from 'antd/lib/layout/layout';
import { Button, Col, List, Row } from 'antd'
import React from 'react'
import Technologies from './Technologies';
import { TechCard } from '../../components/HomePage/TechCard';
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

interface Technology {
    title: string;
    description: string;
    iconLink: Array<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>,
}
export const HomePage: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    let technologies: Array<Technology> | undefined = Technologies;
    const Fade = require('react-reveal/Fade');
    return (
        <Layout>
            <Content style={{ backgroundColor: "#222222" }}>
                <Row >
                    <Col lg={4} md={2} sm={1} xs={1} />
                    <Col lg={16} md={20} sm={22} xs={22}>
                        <Fade>
                            <Row style={{ marginTop: '6%' }}>
                                <Col lg={0} md={6} sm={1} xs={1} />
                                <Col lg={8} md={12} sm={22} xs={22} style={{ height: "240px" }}>
                                    {isDesktopOrLaptop ?
                                        <img src='mypic.png' alt="my" style={{ boxShadow: '8px 4px 16px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width: '50%', float: 'right', borderWidth: '10%', borderColor: 'black', borderStyle: 'solid', marginRight: '4%' }} />
                                        : <img src='mypic.png' alt="my" style={{ boxShadow: '8px 4px 16px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', height: '100%', borderWidth: '10%', borderColor: 'black', borderStyle: 'solid', marginRight: '4%' }} />
                                    }
                                    <Col lg={0} md={6} sm={1} xs={1} />
                                </Col>
                                <Col lg={0} md={0} sm={2} xs={2} />
                                <Col lg={16} md={24} sm={20} xs={20} style={{ paddingLeft: '2%' }}>
                                    <Row>
                                        <h1 style={{ fontSize: '2.5em', padding: '.2% 1.2%', marginTop: '5%', marginBottom: '0', borderWidth: '5%', borderStyle: 'solid', borderColor: 'white' }}><b>I am Rugved Somwanshi</b></h1>
                                    </Row>
                                    <br></br>
                                    <h1 style={{ fontSize: '1.6em', float: 'left', textAlign: 'left' }}>full stack developer, data scientist and student.</h1>
                                </Col>
                                <Col lg={0} md={0} sm={2} xs={2} />
                            </Row>
                        </Fade>

                    </Col>
                    <Col lg={4} md={2} sm={1} xs={1} />
                </Row>
                <Row style={{ backgroundColor: "white", paddingBottom: '2%', width: '100%', color: "black" }}>
                    <Col lg={4} md={2} sm={3} xs={3} />
                    <Col lg={16} md={20} sm={18} xs={18}>
                        <Fade>
                            <Row style={{ textAlign: 'left', marginTop: "5%" }}>
                                <h1 style={{ color: 'black', fontSize: '2em' }}>About Me<br /> <div style={{ height: '4px', backgroundColor: '#00c2c2', width: '70%' }} /></h1>
                                <h3 style={{ color: 'black' }}>I am a 3rd year IT student at Pune Institute of Computer Technology, currently working in the fields of Website Development and Data Science.
                                A proficient Game Designer and Developer.
                                Skilled at writing well-designed, testable and efficient code using current best practices in Web development.
                                A fast learner, natural leader, hard worker and a team player who is proficient in an array of various technologies.
                                </h3>
                            </Row>
                        </Fade>

                    </Col>
                    <Col lg={4} md={2} sm={3} xs={3} />
                </Row>
                <Row>
                    <Col span={4} />
                    <Col span={16}>
                        <Fade>
                            <Row style={{ textAlign: 'left', marginTop: "5%" }}>
                                <h1 style={{ fontSize: '2em' }}>What I Do<br /> <div style={{ height: '4px', backgroundColor: '#00c2c2', width: '70%' }} /></h1>
                            </Row>
                            <h3 style={{ textAlign: 'left' }}>Below is a quick overview of my main technical skill sets and technologies I use.</h3>
                            <Row style={{ marginTop: "5%" }}>
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
                                    dataSource={technologies}
                                    renderItem={(item: Technology) => (<List.Item><TechCard title={item.title} description={item.description} icon={item.iconLink} /></List.Item>)}
                                />
                            </Row>
                        </Fade>

                    </Col>
                    <Col span={4} />
                </Row>
                <Row style={{ backgroundColor: "white", paddingBottom: '3%', width: '100%', color: "black", textAlign: 'left' }}>
                    <Col span={4} />
                    <Col span={16} >
                        <Fade>
                            <Row style={{ textAlign: 'center', marginTop: '3%', width: '100%' }}>
                                <Col span={24}><h1 style={{ color: 'black', fontSize: '2em' }}>Interested in my work or need help? Let's talk</h1></Col>
                                <Col span={24}><Button size="large" shape='round'><Link to='/contact'>Contact Me</Link></Button></Col>
                            </Row>
                        </Fade>
                    </Col>
                    <Col span={4} />
                </Row>
            </Content>
        </Layout>
    );
}