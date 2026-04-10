import { createFileRoute } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faBluesky, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTranslation, Trans } from 'react-i18next'
import { MonitorLayout } from '../components/MonitorLayout'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t } = useTranslation()

  return (
    <MonitorLayout title={t('about.title')} activeNav='about'>
      <main className='monitor-content'>
        <section className='card'>
          <div className='card-body'>
            <h2>{t('about.heading')}</h2>
            <p>
              <Trans
                i18nKey='about.bio1'
                components={{
                  haroohieLink: <a href='https://haroohie.club/' />,
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey='about.bio2'
                components={{
                  youtubeLink: <a href='https://youtube.com/@jonko0493' />,
                  blogLink: <a href='https://haroohie.club/author/jonko' />,
                }}
              />
            </p>
          </div>

          <footer className='socials'>
            <a href='https://twitter.com/jonko0493' aria-label={t('about.social.twitter')}><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='https://youtube.com/@jonko0493' aria-label={t('about.social.youtube')}><FontAwesomeIcon icon={faYoutube} /></a>
            <a href='https://bsky.app/profile/jonkode.su' aria-label={t('about.social.bluesky')}><FontAwesomeIcon icon={faBluesky} /></a>
            <a href='https://github.com/jonko0493' aria-label={t('about.social.github')}><FontAwesomeIcon icon={faGithub} /></a>
          </footer>
        </section>
      </main>
    </MonitorLayout>
  )
}
