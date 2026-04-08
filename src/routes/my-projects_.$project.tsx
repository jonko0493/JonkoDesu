import { createFileRoute, notFound } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Icon } from '@iconify/react'
import { MonitorLayout } from '../components/MonitorLayout'
import { projects } from '../data/projects'
import { IconHeader } from '@/components/IconHeader'

export const Route = createFileRoute('/my-projects_/$project')({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.project)
    if (!project) throw notFound()
    return project
  },
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const project = Route.useLoaderData()

  return (
    <MonitorLayout title={project.title} activeNav='projects' scrollable>
      <main className='monitor-content'>
        {project.image && <img src={project.image} alt={project.title} className='project-header-image' />}
        <div className='markdown-content'>
          {project.markdown ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                icon: ({ id }: { id?: string }) => id ? <Icon icon={id} /> : null,
                iconheader: ({ title, icon, icon2 }: { title: string, icon: string, icon2?: string }) => <IconHeader title={title} icon={icon} icon2={icon2} />,
              }}
            >
              {project.markdown}
            </ReactMarkdown>
          ) : (
            <p>No content available for this project.</p>
          )}
        </div>
      </main>
    </MonitorLayout>
  )
}
