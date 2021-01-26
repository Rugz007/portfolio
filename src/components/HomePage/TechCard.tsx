import React from 'react'
import { Card, Row } from 'antd'
interface TechCardProps {
    title: string,
    description: string,
    icon: Array<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>,
}

export const TechCard: React.FC<TechCardProps> = ({ title, description, icon }) => {
    return (
        <Card hoverable bordered={false}>
            <Row >
                <div style={{width:'100%',margin:'auto'}}>
                {icon.map(item => (item))}
                </div>
            </Row>
            <h2><b>{title}</b></h2>
            <h3>{description}</h3>
        </Card>
    );
}