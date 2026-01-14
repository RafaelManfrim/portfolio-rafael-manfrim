import { Switch, Tooltip, Typography } from 'antd'
import ReactCountryFlag from 'react-country-flag'

import { useLanguageContext } from '../contexts/LanguageContext'

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguageContext()

  const isEnglish = language === 'en'

  return (
    <div className="language-switcher">
      <Typography.Text className="language-switcher__label">
        {isEnglish ? 'EN' : 'PT'}
      </Typography.Text>
      <Tooltip title={isEnglish ? 'Switch to Portuguese' : 'Mudar para inglês'} placement="bottomLeft">
        <Switch
          checked={isEnglish}
          onChange={(checked) => changeLanguage(checked ? 'en' : 'pt')}
          checkedChildren={<ReactCountryFlag countryCode="US" svg style={{ fontSize: '1em', lineHeight: '1em' }} />}
          unCheckedChildren={<ReactCountryFlag countryCode="BR" svg style={{ fontSize: '1em', lineHeight: '1em' }} />}
        />
      </Tooltip>
    </div>
  )
}
