import { createFileRoute } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faBluesky, faGithub } from '@fortawesome/free-brands-svg-icons'
import { MonitorLayout } from '../components/MonitorLayout'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MonitorLayout title='About Me' activeNav='about'>
      <main className='monitor-content'>
        <section className='card'>
          <div className='card-body'>
            <h2>Jonko, YouTuber and ROM Hacker</h2>
            <p>
              I'm Jonko — a ROM hacker, homebrew developer, and YouTuber. My primary work is with the{' '}
              <a href="https://haroohie.club/">Haroohie Translation Club</a>, where I serve as project
              lead and main ROM hacker, producing fan translations of Japanese games.
            </p>
            <p>
              You may also know me from my <a href="https://youtube.com/@jonko0493">YouTube channel</a>{' '}
              or my <a href="https://haroohie.club/author/jonko">blogs</a> where I explain how ROM hacking
              works. I also have an upcoming (secret) homebrew game I'm developing with a talented team.
            </p>
          </div>

          <footer className="socials">
            <a href="https://twitter.com/jonko0493" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://youtube.com/@jonko0493" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://bsky.app/profile/jonkode.su" aria-label="Bluesky"><FontAwesomeIcon icon={faBluesky} /></a>
            <a href="https://github.com/jonko0493" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          </footer>
        </section>
      </main>
    </MonitorLayout>
  )
}
