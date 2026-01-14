import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Layout } from "antd"

import { HeroSection } from "./components/HeroSection"
import { SpecializationsSection } from "./components/SpecializationsSection"
import { TimelineSection } from "./components/TimelineSection"
import { type SocialLink, bio, formationTagColors, formations, historyEntries } from "./data/profile"

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.github.com/rafaelmanfrim',
    label: 'GitHub',
    icon: <BsGithub />,
  },
  {
    href: 'https://www.linkedin.com/in/rafael-manfrim/',
    label: 'LinkedIn',
    icon: <BsLinkedin />,
  },
  {
    href: 'https://www.instagram.com/rafamanfrim/',
    label: 'Instagram',
    icon: <BsInstagram />,
  },
]

export function Portifolio() {
  
  return (
    <Layout>
      <HeroSection
        name="Rafael Manfrim"
        bio={bio}
        socialLinks={socialLinks}
        scrollTargetId="timeline-container"
      />
      <TimelineSection
        id="timeline-container"
        entries={historyEntries}
        imageSrc="/rafael-manfrim.jpeg"
        imageAlt="Foto Rafael Manfrim"
      />
      <SpecializationsSection formations={formations} tagColors={formationTagColors} />
    </Layout>
  )
}