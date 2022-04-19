import { Col, Row, Card, Divider, Button, List } from "antd";
import Layout, { Content } from "antd/lib/layout/layout";
import React from "react";
import { WorkCard } from "../../components/Experience/WorkCard";
import Work from "./Work";
import "./Experience.css";
import { Link } from "react-router-dom";

export const Experience: React.FC = () => {
  const Fade = require("react-reveal/Fade");
  const projects = Work.projects;
  return (
    <Layout>
      <Content style={{ backgroundColor: "#222222" }}>
        <Row className="experiencecover" style={{ height: "30vh" }} />

        <Row>
          <Col lg={4} md={2} sm={1} xs={1} />
          <Col lg={16} md={20} sm={22} xs={22}>
            <Fade>
              <Row style={{ marginTop: "6%", textAlign: "left" }}>
                <h1 style={{ fontSize: "2em" }}>
                  Work Experience
                  <br />
                  <div
                    style={{
                      height: "4px",
                      backgroundColor: "#00c2c2",
                      width: "60%",
                    }}
                  />
                </h1>
                <h3>
                  I specialise in working in creating end-to-end Full Stack web
                  applications with Machine Learning models backed by the modern
                  technologies of React JS and Django. I am also known for my
                  versatile skills in game development in the freelancing
                  market.
                </h3>
                <Card bordered={false} hoverable style={{ width: "100%" }}>
                  <Row>
                    <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={4} lg={8} md={8} sm={8} xs={20}>
                      <a
                        href="https://bsmbharat.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ width: "85%", margin: "auto" }}
                      >
                        <img
                          src="https://ai4bharat.org/images/logo.png"
                          style={{ width: "100% " }}
                          alt="bsm bharat"
                        />
                      </a>
                    </Col>
                    <Col xl={1} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={19} lg={16} md={16} sm={24} xs={24}>
                      <h2 style={{ float: "left" }}>
                        <b>
                          Software Developer Intern at AI4Bharat, IIT Madras
                        </b>
                      </h2>
                      <h3 style={{ float: "right" }}>Feb 2022- April 2022</h3>
                      <Divider />
                      <h2>
                        Technologies Used:
                        <img
                          alt="react"
                          src="https://img.icons8.com/color/48/000000/react-native.png"
                        />{" "}
                        <img
                          alt="django"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEcUlEQVRoge2Wf4hUVRTHP+fNrLrm7K4LapiB5R9Fu82kM6ubBrUUEUpiLRrYDyVKa6NsVoq0kE0lqGhnTMl+EIYUhRn2QyKSsF+abjOyvnWLMEo2wQJjnXVtdXbePf0xd9Qxdx1/1R+9Dwz33XPPvfd77j3nzQMfHx8fHx8fHx8fn/8rcjpjJN18l6q+B+DGEhJJPb5OkfmF/r8p8Ew4/7WA8yVYipNRcQU+u9hizoWSAuioSySAxEXWck4cD2DirsXXGKO3GXSUMTpOTsr0yPfNa1R0LoAbS1TXdDaNcI4OnSuGOxDGAyGQPUa8J/dEV7nh1KIp4MxGiKFcChoC6UL0i56eqpX7GlqOFtaubWueKgFzn6jUAdUAAhmFvUZ0WZl4B3Mm8JQg04ExQLeKbpF+b6Vbv3p/EEXC6XjSM+ZRIK/7lDI16HCBkYW+89fQehFeK/bTyxx1RgOTRAP3qugjaGFMAMaiUl8RyoSARWiLE05nVoM2ocUb5qfpKDyn13Nkp8AVJw2PFJWFBIOzJu5aPMWJpOMLgcfsLl2gaxG+GuzaAmgf6HqEmQHHqUE1aYeuPsXVoDJPhDuB/dbWCBBOZx4CmvLh6RZUZwOfWp/DiNPoOGYJJ8S/isj1wCu2P8Yz3nJH4WFr6C7DibqxZJMgawcLoL0uuc2NJuerR4+nZoYINXao/BRXdeta1++OJjaJHhc3xrYP2va3kYerprt1yY1AF4CCutHWHSC3W59DXnnlIjfausMrr4wDh/JmuTUIXGU7benYSwcHE16gNvXEBCfd/yEOtSjo6f9OijAixySfHIW6s/uy68uGlhyACDlVkBM+hWAPdNa0ZAE6a1qy4VT8AFAFVDuALSgdNdDmjhQnqYi3FKQW2IvKPBXuP2ME/0C7AQTGH7cYzdnHMgCFwoGOi6YWDAew7eXWvj8IbAOmA5OuTcWfUYLvov2jT65kxRlqS8vWl16Z31zaMr0VG6pCh242JdxCMdIOjFWIhFPNbyi6VeE6KQSgiKTZTD7VQlkuWRdOx9/OKvcIjLDCPnAco08DvfY0Vjjkflbk5eLD0hH26QiAI9KWn693V4QyfQbZfJbqAbOcE7f/gMA7AjfZwWMI6pngMuBXq20OyscCc6yPW+7lVjrtk5Pt4klUlXXAPiAL9AFdCp/nD6uQi9oDENTeZ1GeA3YAe227WdC3AIzon8Av9pdfQkyRzY2t2gk6TWED0An6LdBh3bsBOie/+LuXJabICpTv7NxvBJZQFpi6s351zxnvvWZ7vDowhD+AICpfu3WtN5Z4xGdNOB3fgnIL4LqxRKSUOYN+Sozf2jIsOKTnTUWDACJ8dAF0AhBJNW8y0CGqP6iIJ5gGKx5EPyl1nQEDiKYWlGXJbFSYASDC9tywijXnrdyi6ASBWQjkX6/5ZBDYfbRvyPOlrjPg53Q69np/R7Rypog2gizNDatsKLyLLwSCvg/8SP7FcAToUFiuZYFpP93wwuELtY+Pj4+Pj4+Pj4+Pz4D8DUmtqDiE44CsAAAAAElFTkSuQmCC"
                        />{" "}
                        <img
                          alt="postgres"
                          src="https://img.icons8.com/color/48/000000/postgreesql.png"
                        />{" "}
                        <img
                          alt="docker"
                          src="https://img.icons8.com/color/48/000000/docker.png"
                        />
                      </h2>
                      <ul>
                        <li>
                          <h2>
                            Developed a data-collection and annotation platform
                            for the organization which is used by over 300
                            annotators across India to collect different types
                            of data for enabling ML engineers to train India
                            specific models.
                          </h2>
                        </li>
                      </ul>
                      <a
                        href="https://github.com/Rugz007/RfRf_project"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button shape="round" style={{ float: "right" }}>
                          <img
                            alt="github"
                            style={{ width: "20px", marginRight: "3%" }}
                            src="github.png"
                          />{" "}
                          Visit GitHub
                        </Button>
                      </a>
                    </Col>
                  </Row>
                  <br />
                  <Row style={{ marginBottom: "1%" }}>
                    <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={4} lg={8} md={8} sm={8} xs={20}>
                      <a
                        href="https://fossee.in/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ width: "85%", margin: "auto" }}
                      >
                        <img
                          src="fossee.png"
                          style={{ width: "100% " }}
                          alt="fossee"
                        />
                      </a>
                    </Col>
                    <Col xl={1} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={19} lg={16} md={16} sm={24} xs={24}>
                      <h2 style={{ float: "left" }}>
                        <b>
                          Full Stack Development Intern at FOSSEE, IIT Bombay
                        </b>
                      </h2>
                      <h3 style={{ float: "right" }}>
                        April 2021 - August 2021
                      </h3>
                      <Divider />
                      <h2>
                        Technologies Used:
                        <img
                          alt="react"
                          src="https://img.icons8.com/color/48/000000/react-native.png"
                        />{" "}
                        <img
                          alt="redux"
                          src="https://img.icons8.com/color/48/000000/redux.png"
                        />{" "}
                        <img
                          alt="django"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEcUlEQVRoge2Wf4hUVRTHP+fNrLrm7K4LapiB5R9Fu82kM6ubBrUUEUpiLRrYDyVKa6NsVoq0kE0lqGhnTMl+EIYUhRn2QyKSsF+abjOyvnWLMEo2wQJjnXVtdXbePf0xd9Qxdx1/1R+9Dwz33XPPvfd77j3nzQMfHx8fHx8fHx8fn/8rcjpjJN18l6q+B+DGEhJJPb5OkfmF/r8p8Ew4/7WA8yVYipNRcQU+u9hizoWSAuioSySAxEXWck4cD2DirsXXGKO3GXSUMTpOTsr0yPfNa1R0LoAbS1TXdDaNcI4OnSuGOxDGAyGQPUa8J/dEV7nh1KIp4MxGiKFcChoC6UL0i56eqpX7GlqOFtaubWueKgFzn6jUAdUAAhmFvUZ0WZl4B3Mm8JQg04ExQLeKbpF+b6Vbv3p/EEXC6XjSM+ZRIK/7lDI16HCBkYW+89fQehFeK/bTyxx1RgOTRAP3qugjaGFMAMaiUl8RyoSARWiLE05nVoM2ocUb5qfpKDyn13Nkp8AVJw2PFJWFBIOzJu5aPMWJpOMLgcfsLl2gaxG+GuzaAmgf6HqEmQHHqUE1aYeuPsXVoDJPhDuB/dbWCBBOZx4CmvLh6RZUZwOfWp/DiNPoOGYJJ8S/isj1wCu2P8Yz3nJH4WFr6C7DibqxZJMgawcLoL0uuc2NJuerR4+nZoYINXao/BRXdeta1++OJjaJHhc3xrYP2va3kYerprt1yY1AF4CCutHWHSC3W59DXnnlIjfausMrr4wDh/JmuTUIXGU7benYSwcHE16gNvXEBCfd/yEOtSjo6f9OijAixySfHIW6s/uy68uGlhyACDlVkBM+hWAPdNa0ZAE6a1qy4VT8AFAFVDuALSgdNdDmjhQnqYi3FKQW2IvKPBXuP2ME/0C7AQTGH7cYzdnHMgCFwoGOi6YWDAew7eXWvj8IbAOmA5OuTcWfUYLvov2jT65kxRlqS8vWl16Z31zaMr0VG6pCh242JdxCMdIOjFWIhFPNbyi6VeE6KQSgiKTZTD7VQlkuWRdOx9/OKvcIjLDCPnAco08DvfY0Vjjkflbk5eLD0hH26QiAI9KWn693V4QyfQbZfJbqAbOcE7f/gMA7AjfZwWMI6pngMuBXq20OyscCc6yPW+7lVjrtk5Pt4klUlXXAPiAL9AFdCp/nD6uQi9oDENTeZ1GeA3YAe227WdC3AIzon8Av9pdfQkyRzY2t2gk6TWED0An6LdBh3bsBOie/+LuXJabICpTv7NxvBJZQFpi6s351zxnvvWZ7vDowhD+AICpfu3WtN5Z4xGdNOB3fgnIL4LqxRKSUOYN+Sozf2jIsOKTnTUWDACJ8dAF0AhBJNW8y0CGqP6iIJ5gGKx5EPyl1nQEDiKYWlGXJbFSYASDC9tywijXnrdyi6ASBWQjkX6/5ZBDYfbRvyPOlrjPg53Q69np/R7Rypog2gizNDatsKLyLLwSCvg/8SP7FcAToUFiuZYFpP93wwuELtY+Pj4+Pj4+Pj4+Pz4D8DUmtqDiE44CsAAAAAElFTkSuQmCC"
                        />{" "}
                        <img
                          alt="postgres"
                          src="https://img.icons8.com/color/48/000000/postgreesql.png"
                        />{" "}
                        <img
                          alt="docker"
                          src="https://img.icons8.com/color/48/000000/docker.png"
                        />{" "}
                      </h2>
                      <ul>
                        <li>
                          <h2>
                            Developed an online circuit and Arduino simulator w/
                            dyanamic workflows and LTI support.
                          </h2>
                        </li>
                      </ul>
                      <a
                        href="https://github.com/frg-fossee/eSim-Cloud"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button shape="round" style={{ float: "right" }}>
                          <img
                            alt="github"
                            style={{ width: "20px", marginRight: "3%" }}
                            src="github.png"
                          />{" "}
                          Visit GitHub
                        </Button>
                      </a>
                    </Col>
                  </Row>

                  <br />
                  <Row style={{ marginBottom: "1%" }}>
                    <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={4} lg={8} md={8} sm={8} xs={20}>
                      <img
                        src="logo-nobg.png"
                        style={{ width: "100% " }}
                        alt="prepiit"
                      />
                    </Col>
                    <Col xl={1} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={19} lg={16} md={16} sm={24} xs={24}>
                      <h2 style={{ float: "left" }}>
                        <b>Website Development Intern at PrepiiT</b>
                      </h2>
                      <h3 style={{ float: "right" }}>
                        January 2021 - June 2021
                      </h3>
                      <Divider />
                      <h2>
                        Technologies Used:
                        <img
                          alt="react"
                          src="https://img.icons8.com/color/48/000000/react-native.png"
                        />{" "}
                        <img
                          alt="postgres"
                          src="https://img.icons8.com/color/48/000000/postgreesql.png"
                        />{" "}
                        <img
                          alt="typescript"
                          src="https://img.icons8.com/color/48/000000/typescript.png"
                        />{" "}
                        <img
                          alt="docker"
                          src="https://img.icons8.com/color/48/000000/docker.png"
                        />
                      </h2>
                      <ul>
                        <li>
                          <h2>
                            Developing a MCQ platform for PrepiiT institute with
                            advanced analysis, blog system and main website.
                          </h2>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                  <Row>
                    <Col xl={0} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={4} lg={8} md={8} sm={8} xs={20}>
                      <a
                        href="https://bsmbharat.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ width: "85%", margin: "auto" }}
                      >
                        <img
                          src="logo_BSM.png"
                          style={{ width: "100% " }}
                          alt="bsm bharat"
                        />
                      </a>
                    </Col>
                    <Col xl={1} lg={0} md={0} sm={8} xs={2} />
                    <Col xl={19} lg={16} md={16} sm={24} xs={24}>
                      <h2 style={{ float: "left" }}>
                        <b>
                          Front-end Developer Intern at Bhartiya Shikshan Mandal
                        </b>
                      </h2>
                      <h3 style={{ float: "right" }}>July 2020-January 2021</h3>
                      <Divider />
                      <h2>
                        Technologies Used:
                        <img
                          alt="react"
                          src="https://img.icons8.com/color/48/000000/react-native.png"
                        />{" "}
                        <img
                          alt="mongo"
                          src="https://img.icons8.com/color/48/000000/mongodb.png"
                        />{" "}
                        <img
                          alt="docker"
                          src="https://img.icons8.com/color/48/000000/docker.png"
                        />
                      </h2>
                      <ul>
                        <li>
                          <h2>
                            Developed the website for digitalizing the
                            functioning of Bhartiya Shikshan Mandal using modern
                            technologies.
                          </h2>
                        </li>
                      </ul>
                      <a
                        href="https://github.com/Rugz007/RfRf_project"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Button shape="round" style={{ float: "right" }}>
                          <img
                            alt="github"
                            style={{ width: "20px", marginRight: "3%" }}
                            src="github.png"
                          />{" "}
                          Visit GitHub
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </Card>
              </Row>
            </Fade>
          </Col>
          <Col lg={4} md={2} sm={1} xs={1} />
        </Row>
        <Row
          style={{
            marginTop: "2%",
            backgroundColor: "white",
            color: "black",
            paddingTop: "2%",
          }}
        >
          <Col span={4} />
          <Col span={16}>
            <Fade>
              <Row style={{ textAlign: "left" }}>
                <h1 style={{ color: "black", fontSize: "2em" }}>
                  Personal Projects
                  <br />{" "}
                  <div
                    style={{
                      height: "4px",
                      backgroundColor: "#00c2c2",
                      width: "60%",
                    }}
                  />
                </h1>
                <List
                  grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 3,
                    xxl: 3,
                  }}
                  style={{ width: "100%", margin: "auto" }}
                  dataSource={projects}
                  renderItem={(item) => (
                    <List.Item>
                      <WorkCard
                        title={item.title}
                        icon={item.icon}
                        description={item.description}
                        stack={item.stack}
                      ></WorkCard>
                    </List.Item>
                  )}
                ></List>
              </Row>
            </Fade>
          </Col>
          <Col span={4} />
        </Row>
        <Row style={{ paddingBottom: "3%", width: "100%", textAlign: "left" }}>
          <Col span={4} />
          <Col span={16}>
            <Fade>
              <Row
                style={{ textAlign: "center", marginTop: "3%", width: "100%" }}
              >
                <Col span={24}>
                  <h1 style={{ fontSize: "2em" }}>
                    Interested in my work or need help? Let's talk
                  </h1>
                </Col>
                <Col span={24}>
                  <Button
                    size="large"
                    type="primary"
                    style={{ color: "black" }}
                    shape="round"
                  >
                    <Link to="/contact">Contact Me</Link>
                  </Button>
                </Col>
              </Row>
            </Fade>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    </Layout>
  );
};
