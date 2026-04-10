import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import type { ReactNode } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

type ActiveNav = 'home' | 'about' | 'projects'

interface Props {
  title: string
  activeNav: ActiveNav
  children: ReactNode
  scrollable?: boolean
}

export function MonitorLayout({ title, activeNav, children, scrollable }: Props) {
  const { t } = useTranslation()

  return (
    <div className='about-viewport'>
      <div className='monitor'>
        <div className='bezel'>
          <div className={`screen${scrollable ? ' screen-scrollable' : ''}`}>
            <header className='screen-header'>
              <h1>{title}</h1>
              <nav className='top-nav'>
                <Link to='/' className={`pill${activeNav === 'home' ? ' active' : ''}`}>{t('nav.home')}</Link>
                <Link to='/about-me' className={`pill${activeNav === 'about' ? ' active' : ''}`}>{t('nav.about')}</Link>
                <Link to='/my-projects' className={`pill${activeNav === 'projects' ? ' active' : ''}`}>{t('nav.projects')}</Link>
              </nav>
              <LanguageSwitcher />
            </header>
            {children}
          </div>
        </div>
        <div className='monitor-label'>JONKO</div>
      </div>

      <div className='monitor-stand'>
        <div className='stand-neck' />
        <div className='stand-base' />
      </div>
    </div>
  )
}
