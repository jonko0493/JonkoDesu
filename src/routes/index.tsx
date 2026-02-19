import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const navigate = useNavigate()
  const [exiting, setExiting] = useState(false)
  const ANIM_MS = 360

  const goRoom = () => {
    if (exiting) return
    setExiting(true)
    setTimeout(() => navigate({ to: '/room' }), ANIM_MS)
  }

  return (
    <div
      className='jonko-container'
      onClick={goRoom}
      role='link'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') goRoom()
      }}
    >
      <div className={`jonko-cta${exiting ? ' exiting' : ''}`}>
        <div className='jonko-cta-header'>Hi, I'm Jonko!</div>
        <div className='jonko-cta-subheader'>Homebrew Developer, ROM Hacker and YouTuber</div>
        <div className='jonko-cta-button'>Click anywhere to start</div>
      </div>

      <div className='jonko-room-start-container'>
        <img src='/room_en.svg' className={`jonko-room-start${exiting ? ' exiting' : ''}`} />
      </div>
    </div>
  )
}
