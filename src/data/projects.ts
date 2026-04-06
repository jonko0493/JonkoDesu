import type { Project } from './project-types'

const modules = import.meta.glob<{ default: Project }>('./projects/*.ts', { eager: true })

export const projects: Project[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
