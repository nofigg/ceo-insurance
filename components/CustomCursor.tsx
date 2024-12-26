'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [target, setTarget] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let animationId: number

    const updateCursor = (e: MouseEvent) => {
      const newTarget = { x: e.clientX, y: e.clientY }
      setTarget(newTarget)
      setIsMoving(true)
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMoving(false)
        setPosition(newTarget) // Ensure perfect centering when stopped
      }, 100)
    }

    const animate = () => {
      if (isMoving) {
        setPosition(prev => ({
          x: prev.x + (target.x - prev.x) * 0.35,
          y: prev.y + (target.y - prev.y) * 0.35
        }))
      }
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', updateCursor)
    animationId = requestAnimationFrame(animate)
    
    return () => {
      window.removeEventListener('mousemove', updateCursor)
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationId)
    }
  }, [isMoving, target])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{ cursor: 'none' }}
    >
      <div
        className={`absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-indigo-600 transition-transform duration-100 ${
          isMoving ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 100ms ease-out, opacity 100ms ease-out'
        }}
      />
    </div>
  )
}
