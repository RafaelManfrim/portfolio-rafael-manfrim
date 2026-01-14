import { useMemo } from "react"
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { Layout } from "antd"

import { HeroSection } from "./components/HeroSection"
import { LanguageSwitcher } from "./components/LanguageSwitcher"
import { SpecializationsSection } from "./components/SpecializationsSection"
import { TimelineSection } from "./components/TimelineSection"
import {
  type SocialLink,
  contentByLanguage,
  formationTagColors,
} from "./data/profile"
import { useLanguageContext } from "./contexts/LanguageContext"
import { Header } from "./components/Header"

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
  const { language } = useLanguageContext()

  const content = useMemo(() => contentByLanguage[language], [language])

  return (
    <Layout>
      <Header />
      <HeroSection
        name="Rafael Manfrim"
        bio={content.bio}
        socialLinks={socialLinks}
        scrollTargetId="timeline-container"
      />
      <TimelineSection
        id="timeline-container"
        entries={content.historyEntries}
        imageSrc="/rafael-manfrim.jpeg"
        imageAlt={content.imageAlt}
        title={content.timelineTitle}
      />
      <SpecializationsSection
        formations={content.formations}
        tagColors={formationTagColors}
        title={content.specializationsTitle}
        certificateLabel={content.certificateLabel}
      />
    </Layout>
  )
}