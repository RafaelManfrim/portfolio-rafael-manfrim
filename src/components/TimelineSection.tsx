import { Image, Layout, Space, Timeline, Typography } from 'antd'

import { HistoryEntry } from '../data/profile'

type TimelineSectionProps = {
  id?: string
  entries: HistoryEntry[]
  imageSrc: string
  imageAlt: string
}

export function TimelineSection({ id, entries, imageSrc, imageAlt }: TimelineSectionProps) {
  return (
    <Layout.Content className="timeline-container" id={id}>
      <Typography.Title>Linha do Tempo</Typography.Title>
      <Space>
        <Image src={imageSrc} alt={imageAlt} preview={false} />
        <Timeline
          mode="left"
          items={entries.map((entry) => ({
            label: entry.label,
            children: entry.description,
          }))}
        />
      </Space>
    </Layout.Content>
  )
}
