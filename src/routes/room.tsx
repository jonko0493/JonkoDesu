import { createFileRoute } from '@tanstack/react-router'
import { RoomSVG } from '../components/RoomSVG'

export const Route = createFileRoute('/room')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='jonko-room-container'>
      <RoomSVG />
    </div>
  )
}
