import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import type { Project } from '../data/project-types'

interface Props {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const { t } = useTranslation()

  return (
    <article className='project-card'>
      <div className='project-card-image'>
        {project.image && <img src={project.image} alt={project.title} />}
      </div>

      <div className='project-card-content'>
        {project.markdown !== undefined && (
          <Link
            to='/my-projects/$project'
            params={{ project: project.slug }}
            className='project-link'
            aria-label={t('projects.viewDetails', { title: project.title })}
          >
            <h2>{project.title}</h2>
          </Link>
        ) || <h2>{project.title}</h2>}
        
        <p>{project.description}</p>

        <div className='project-card-footer'>
          <div className='project-tags'>
            {project.tags.map((tag) => (
              <span key={tag} className='project-tag'>{tag}</span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='project-link-btn'
              aria-label={t('projects.visit', { title: project.title })}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
