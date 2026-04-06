import { createFileRoute } from '@tanstack/react-router'
import { MonitorLayout } from '../components/MonitorLayout'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export const Route = createFileRoute('/my-projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MonitorLayout title='My Projects' activeNav='projects' scrollable>
      <main className='projects-content'>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </main>
    </MonitorLayout>
  )
}
