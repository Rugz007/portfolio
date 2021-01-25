import { Button, Card, Row, Col } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'

interface CertCardProps {
    title: string,
    author: string,
    icon: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    date: string,
    subCourses?: Array<string>,
    link?: string | null,
    credID?:string | null,
}

export const CertCard: React.FC<CertCardProps> = ({ title, author, icon, subCourses, link,credID,date }) => {
    const [visible, setVisible] = useState(false);
    return (
        <Card hoverable bordered={false} style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', height: '380px' }}>
            {icon}
            <h2 style={{ color: 'black' }}><b>{title}</b></h2>
            <h3 style={{ color: 'black' }}>- {author}</h3>
            <Button onClick={() => setVisible(true)}>View More</Button>
            <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
                <br />
                <Row>
                    <Col span={10}>
                        {icon}
                    </Col>
                    <Col span={14}>
                        <h2 style={{ color: 'white' }}><b>{title}</b></h2>
                        <h3>Completed on: {date}</h3>
                        {credID!=null && <h3>Credential ID: {credID}</h3>}
                        <h3>Content of Course:</h3>
                        <ul>
                            {subCourses && subCourses.map(item => (<li>{item}</li>))}
                        </ul>
                        {link != null && <a href={link}  rel="noopener noreferrer" target="_blank"><Button type="primary">Check Certification</Button></a>}
                    </Col>
                </Row>
            </Modal>
        </Card>
    );
}