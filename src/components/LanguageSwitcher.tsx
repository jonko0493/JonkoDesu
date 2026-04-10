import { useTranslation } from 'react-i18next'
import { supportedLanguages } from '../i18n'

const labels: Record<string, string> = {
  en: 'EN',
  ja: '日本語',
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language.split('-')[0]

  return (
    <div className='lang-switcher'>
      {supportedLanguages.map((lang) => (
        <button
          key={lang}
          className={`pill${current === lang ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage(lang)}
          aria-label={`Switch to ${labels[lang]}`}
          aria-pressed={current === lang}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  )
}
