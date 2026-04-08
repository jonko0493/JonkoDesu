import type { Project } from './project-types'

type ProjectData = Omit<Project, 'slug' | 'markdown'>

const modules = import.meta.glob<{ default: ProjectData }>('./projects/*.ts', { eager: true })
const markdownModules = import.meta.glob<string>('./projects/*.md', { query: '?raw', import: 'default', eager: true })

export const projects: Project[] = Object.entries(modules)
  .map(([path, m]) => {
    const slug = path.replace('./projects/', '').replace('.ts', '')
    const markdownPath = `./projects/${slug}.md`
    return {
      ...m.default,
      slug,
      markdown: markdownModules[markdownPath],
    }
  })
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
