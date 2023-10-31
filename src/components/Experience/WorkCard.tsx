import { Button, Card, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'

interface WorkCardProps {
    title: string,
    description: string,
    icon: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
    stack: Array<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>,
}

export const WorkCard: React.FC<WorkCardProps> = ({ title, description, icon, stack }) => {
    const [visible, setVisible] = useState(false)
    return (
        <Card hoverable bordered={false} style={{ backgroundColor: 'white', color: 'black', textAlign: 'center', height: '300px' }}>
            <div style={{height:'180px'}}>
                {icon}
            </div>
            <h2 style={{ color: 'black' }}><b>{title}</b></h2>
            <Button onClick={() => setVisible(true)}>View More</Button>
            <Modal visible={visible} footer={null} onCancel={() => setVisible(false)}>
                <br />
                <Row>
                    <Col span={12}>
                        {icon}
                    </Col>
                    <Col span={12}>
                        <h2 style={{ color: 'white' }}><b>{title}</b></h2>
                        {stack.map(item => (item))}
                        <h4>{description}</h4>
                    </Col>
                </Row>



            </Modal>
        </Card>
    );
}