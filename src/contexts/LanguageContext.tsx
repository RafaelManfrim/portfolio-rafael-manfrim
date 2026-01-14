import { createContext, useContext, useEffect, useState } from "react"

export type Language = 'pt' | 'en'

export type LanguageContextType = {
  language: Language
  changeLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType >({} as LanguageContextType)

export const defaultLanguage: Language = 'en'

export function LanguageContextProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  function handleChangeLanguage(lang: Language) {
    setLanguage(lang)
  }

  function detectLanguageFromNavigator(): Language {
    if (typeof navigator === 'undefined') return defaultLanguage
    const browserLang = navigator.language?.toLowerCase()

    if (browserLang?.startsWith('pt')) return 'pt'
    if (browserLang?.startsWith('en')) return 'en'

    return defaultLanguage
  }
  
  useEffect(() => {
    setLanguage(detectLanguageFromNavigator())
  }, [])

  return (
  <LanguageContext.Provider value={{  language, changeLanguage: handleChangeLanguage }}>
    {children}
  </LanguageContext.Provider>
  )
}

export const useLanguageContext = () => useContext(LanguageContext)
