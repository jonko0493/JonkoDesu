import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/my-projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/my-projects"!</div>
}
