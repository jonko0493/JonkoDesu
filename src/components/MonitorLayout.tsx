import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

type ActiveNav = 'home' | 'about' | 'projects'

interface Props {
  title: string
  activeNav: ActiveNav
  children: ReactNode
  scrollable?: boolean
}

export function MonitorLayout({ title, activeNav, children, scrollable }: Props) {
  return (
    <div className='about-viewport'>
      <div className='monitor'>
        <div className='bezel'>
          <div className={`screen${scrollable ? ' screen-scrollable' : ''}`}>
            <header className='screen-header'>
              <h1>{title}</h1>
              <nav className='top-nav'>
                <Link to='/' className={`pill${activeNav === 'home' ? ' active' : ''}`}>Home</Link>
                <Link to='/about-me' className={`pill${activeNav === 'about' ? ' active' : ''}`}>About</Link>
                <Link to='/my-projects' className={`pill${activeNav === 'projects' ? ' active' : ''}`}>Projects</Link>
              </nav>
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
