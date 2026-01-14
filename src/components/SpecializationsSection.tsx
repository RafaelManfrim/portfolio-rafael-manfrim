import { Card, Col, Layout, Row, Tag, Typography } from 'antd'

import { Formation, FormationTag } from '../data/profile'

type SpecializationsSectionProps = {
  formations: Formation[]
  tagColors: Record<FormationTag, string>
  title: string
  certificateLabel: string
}

export function SpecializationsSection({ formations, tagColors, title, certificateLabel }: SpecializationsSectionProps) {
  return (
    <Layout.Content className="specialization-container">
      <Typography.Title>{title}</Typography.Title>
      <Row gutter={16}>
        {formations.map((formation) => (
          <Col xs={24} md={12} xl={8} key={`${formation.title}-${formation.school}`}>
            <Card
              title={formation.title}
              extra={<Tag color={tagColors[formation.tag]}>{formation.tag}</Tag>}
              bordered={false}
            >
              <p>{formation.description}</p>
              <span>#{formation.school}</span>
              <a href={formation.certificate} target="_blank" rel="noreferrer">
                {certificateLabel}
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </Layout.Content>
  )
}
