import { createFileRoute, notFound } from '@tanstack/react-router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { MonitorLayout } from '../components/MonitorLayout'
import { getProjects } from '../data/projects'
import { IconHeader } from '@/components/IconHeader'

export const Route = createFileRoute('/my-projects_/$project')({
  loader: ({ params }) => {
    // Validate the slug exists using base English data; locale content is loaded in the component
    const exists = getProjects('en').some((p) => p.slug === params.project)
    if (!exists) throw notFound()
    return { slug: params.project }
  },
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { slug } = Route.useLoaderData()
  const { t, i18n } = useTranslation()
  const project = getProjects(i18n.language).find((p) => p.slug === slug)

  if (!project) throw notFound()

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
            <p>{t('projects.noContent')}</p>
          )}
        </div>
      </main>
    </MonitorLayout>
  )
}
