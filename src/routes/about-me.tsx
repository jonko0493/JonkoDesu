import { createFileRoute, Link } from '@tanstack/react-router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faInstagram, faBluesky, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Route = createFileRoute('/about-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='about-viewport'>
      <div className='monitor'>
        <div className='bezel'>
          <div className='screen'>
            <header className='screen-header'>
              <h1>About Me</h1>
              <nav className='top-nav'>
                <button className='pill'>Home</button>
                <button className='pill active'>About</button>
                <button className='pill'>Projects</button>
              </nav>
            </header>

            <main className='monitor-content'>
              <section className='card'>
                <p>I'm Jonko, a ROM hacker and YouTuber!</p>
                <p>
                  My primary work is with the <a href="https://haroohie.club/">Haroohie Translation Club</a>,
                  where I serve as project lead and main ROM hacker.
                </p>
                <p>
                  You may also know me from my <a href="https://youtube.com/@jonko0493">YouTube channel</a> 
                  or my <a href="https://haroohie.club/author/jonko">blogs</a> where I explain how ROM hacking works.
                </p>
                <p>
                  I also have an upcoming (secret) homebrew game that I am developing with a team of talented people.
                </p>

                <div className="socials">
                  <a href="https://twitter.com/jonko0493"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="https://youtube.com/@jonko0493"><FontAwesomeIcon icon={faYoutube} /></a>
                  <a href="https://bsky.app/profile/jonkode.su"><FontAwesomeIcon icon={faBluesky} /></a>
                  <a href="https://github.com/jonko0493"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </section>
            </main>
          </div>
        </div>
        <div>JONKO</div>
      </div>

      <div className='monitor-stand'>
        <div className='stand-neck' />
        <div className='stand-base' />
      </div>
    </div>
  )
}
