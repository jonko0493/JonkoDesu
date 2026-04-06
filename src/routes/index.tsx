import { createFileRoute } from '@tanstack/react-router'
import { useState, useRef, useCallback, useEffect } from 'react'
import type { CSSProperties } from 'react'
import { RoomSVG } from '../components/RoomSVG'

export const Route = createFileRoute('/')({ component: App })

type Mode = 'cta' | 'entering' | 'room'

const ROOM_SCALE = 1.6
const ANIM_MS = 650

function getRoomDisplaySize() {
  return Math.max(window.innerWidth * ROOM_SCALE, window.innerHeight * 1.3)
}

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val))
}

function getPanBounds() {
  const size = getRoomDisplaySize()
  const vw = window.innerWidth
  const vh = window.innerHeight
  return {
    minX: -(size / 2 - vw / 2),
    maxX:  (size / 2 - vw / 2),
    minY: -(size / 2 - vh / 2),
    maxY:  (size / 2 - vh / 2),
  }
}

function App() {
  const [mode, setMode] = useState<Mode>('cta')
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [roomSize, setRoomSize] = useState(0)
  const [zoomFrom, setZoomFrom] = useState<{ dx: number; dy: number; s: number } | null>(null)
  const [zoomActive, setZoomActive] = useState(false)
  const dragging = useRef(false)
  const dragOrigin = useRef({ x: 0, y: 0, panX: 0, panY: 0 })
  const imgRef = useRef<HTMLImageElement>(null)

  const goRoom = () => {
    if (mode !== 'cta') return

    const size = getRoomDisplaySize()
    setRoomSize(size)

    const img = imgRef.current
    if (img) {
      const rect = img.getBoundingClientRect()
      const s = rect.width / size
      const dx = (rect.left + rect.width / 2) - window.innerWidth / 2
      const dy = (rect.top + rect.height / 2) - window.innerHeight / 2
      setZoomFrom({ dx, dy, s })
      setZoomActive(false)
    }

    setMode('entering')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setZoomActive(true))
    })

    setTimeout(() => {
      setMode('room')
      setZoomFrom(null)
      setZoomActive(false)
    }, ANIM_MS)
  }

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true
    dragOrigin.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y }
  }, [pan])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current) return
    const bounds = getPanBounds()
    setPan({
      x: clamp(dragOrigin.current.panX + e.clientX - dragOrigin.current.x, bounds.minX, bounds.maxX),
      y: clamp(dragOrigin.current.panY + e.clientY - dragOrigin.current.y, bounds.minY, bounds.maxY),
    })
  }, [])

  const onMouseUp = useCallback(() => { dragging.current = false }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const t = e.touches[0]
    dragging.current = true
    dragOrigin.current = { x: t.clientX, y: t.clientY, panX: pan.x, panY: pan.y }
  }, [pan])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragging.current) return
    e.preventDefault()
    const t = e.touches[0]
    const bounds = getPanBounds()
    setPan({
      x: clamp(dragOrigin.current.panX + t.clientX - dragOrigin.current.x, bounds.minX, bounds.maxX),
      y: clamp(dragOrigin.current.panY + t.clientY - dragOrigin.current.y, bounds.minY, bounds.maxY),
    })
  }, [])

  useEffect(() => {
    if (mode !== 'room') return
    const recalc = () => {
      setRoomSize(getRoomDisplaySize())
      const bounds = getPanBounds()
      setPan(p => ({
        x: clamp(p.x, bounds.minX, bounds.maxX),
        y: clamp(p.y, bounds.minY, bounds.maxY),
      }))
    }
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [mode])

  const scaleWrapperStyle: CSSProperties = (() => {
    if (mode === 'room') return {}
    if (zoomFrom && !zoomActive) {
      return {
        transform: `translate(${zoomFrom.dx}px, ${zoomFrom.dy}px) scale(${zoomFrom.s})`,
        transition: 'none',
      }
    }
    if (zoomFrom && zoomActive) {
      return {
        transform: 'translate(0px, 0px) scale(1)',
        transition: `transform ${ANIM_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }
    }
    return {}
  })()

  const roomOverlayClass = [
    'jonko-room-overlay',
    mode !== 'cta' ? 'active' : '',
    mode === 'room' ? 'panning' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      {mode !== 'room' && (
        <div
          className='jonko-container'
          onClick={goRoom}
          role='link'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') goRoom()
          }}
        >
          <div className={`jonko-cta${mode === 'entering' ? ' exiting' : ''}`}>
            <div className='jonko-cta-header'>Hi, I'm Jonko!</div>
            <div className='jonko-cta-subheader'>Homebrew Developer, ROM Hacker and YouTuber</div>
            <div className='jonko-cta-button'>Click anywhere to start</div>
          </div>

          <div className='jonko-room-start-container'>
            <img
              ref={imgRef}
              src='/room_en.svg'
              className={`jonko-room-start${mode === 'entering' ? ' exiting' : ''}`}
            />
          </div>
        </div>
      )}

      <div
        className={roomOverlayClass}
        onMouseDown={mode === 'room' ? onMouseDown : undefined}
        onMouseMove={mode === 'room' ? onMouseMove : undefined}
        onMouseUp={mode === 'room' ? onMouseUp : undefined}
        onMouseLeave={mode === 'room' ? onMouseUp : undefined}
        onTouchStart={mode === 'room' ? onTouchStart : undefined}
        onTouchMove={mode === 'room' ? onTouchMove : undefined}
        onTouchEnd={mode === 'room' ? onMouseUp : undefined}
      >
        <div className='jonko-room-scale-wrapper' style={scaleWrapperStyle}>
          <div
            className='jonko-room-pan-inner'
            style={{
              ...(roomSize > 0 ? { width: roomSize, height: roomSize } : {}),
              transform: `translate(${pan.x}px, ${pan.y}px)`,
            }}
          >
            <RoomSVG />
          </div>
        </div>
      </div>
    </>
  )
}
