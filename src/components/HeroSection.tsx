import { Button, Layout, Space, Typography } from 'antd'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll'
import { BsCaretDownFill } from 'react-icons/bs'
import { SocialLink } from '../data/profile'

type HeroSectionProps = {
  name: string
  bio: string
  socialLinks: SocialLink[]
  scrollTargetId: string
}

export function HeroSection({ name, bio, socialLinks, scrollTargetId }: HeroSectionProps) {
  return (
    <Layout.Content className="presentation-container">
      <Typography.Title>
        <TypeAnimation sequence={[name, 2000]} wrapper="strong" cursor />
      </Typography.Title>
      <p>{bio}</p>
      <Space size="middle">
        {socialLinks.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ir para ${social.label}`}
          >
            {social.icon}
          </a>
        ))}
      </Space>
      <ScrollLink to={scrollTargetId} smooth>
        <Button size="large" type="primary" shape="circle" icon={<BsCaretDownFill />} />
      </ScrollLink>
    </Layout.Content>
  )
}
