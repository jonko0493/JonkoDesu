import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { MonitorLayout } from '../components/MonitorLayout'
import { ProjectCard } from '../components/ProjectCard'
import { getProjects } from '../data/projects'

export const Route = createFileRoute('/my-projects')({
  component: RouteComponent,
})

function RouteComponent() {
  const { t, i18n } = useTranslation()
  const projects = getProjects(i18n.language)

  return (
    <MonitorLayout title={t('projects.title')} activeNav='projects' scrollable>
      <main className='projects-content'>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </main>
    </MonitorLayout>
  )
}
