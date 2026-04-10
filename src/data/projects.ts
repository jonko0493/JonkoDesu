import type { Project } from './project-types'

type ProjectData = Omit<Project, 'slug' | 'markdown'>

// Base project data (e.g. haroohie.ts)
const modules = import.meta.glob<{ default: ProjectData }>('./projects/*.ts', { eager: true })
// Locale-specific project data overrides (e.g. haroohie.ja.ts)
const localeModules = import.meta.glob<{ default: Partial<ProjectData> }>('./projects/*.*.ts', { eager: true })
// Base markdown (e.g. haroohie.md)
const markdownModules = import.meta.glob<string>('./projects/*.md', { query: '?raw', import: 'default', eager: true })
// Locale-specific markdown (e.g. haroohie.ja.md)
const localeMarkdownModules = import.meta.glob<string>('./projects/*.*.md', { query: '?raw', import: 'default', eager: true })

// Only base slugs — files with exactly one dot segment after ./projects/ (e.g. haroohie.ts, not haroohie.ja.ts)
const basePathPattern = /^\.\/projects\/([^.]+)\.ts$/

export function getProjects(locale: string = 'en'): Project[] {
  return Object.entries(modules)
    .filter(([path]) => basePathPattern.test(path))
    .map(([path, m]) => {
      const slug = path.replace('./projects/', '').replace('.ts', '')

      const localeDataPath = `./projects/${slug}.${locale}.ts`
      const localeData = localeModules[localeDataPath]?.default

      const localeMarkdownPath = `./projects/${slug}.${locale}.md`
      const baseMarkdownPath = `./projects/${slug}.md`
      const markdown = localeMarkdownModules[localeMarkdownPath] ?? markdownModules[baseMarkdownPath]

      return {
        ...m.default,
        ...(localeData ?? {}),
        slug,
        markdown,
      }
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
}

/** @deprecated Use getProjects(locale) instead */
export const projects = getProjects('en')
