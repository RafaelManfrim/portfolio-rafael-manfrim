import { FloatButton } from 'antd'
import { useLanguageContext } from '../contexts/LanguageContext'
import ReactCountryFlag from 'react-country-flag'


export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguageContext()

  return (
    <FloatButton.Group shape="circle" style={{ right: 24, top: 24 }}>
      <FloatButton
        tooltip="Português"
        icon={
        <ReactCountryFlag countryCode="BR" svg style={{ fontSize: '1em', lineHeight: '1em' }} />
      }
        type={language === 'pt' ? 'primary' : 'default'}
        onClick={() => changeLanguage('pt')}
      />
      <FloatButton
        tooltip="English"
        icon={
        <ReactCountryFlag countryCode="US" svg style={{ fontSize: '1em', lineHeight: '1em' }} />
        }
        type={language === 'en' ? 'primary' : 'default'}
        onClick={() => changeLanguage('en')}
      />
    </FloatButton.Group>
  )
}
