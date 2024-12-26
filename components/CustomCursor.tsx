'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [target, setTarget] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.matchMedia('(max-width: 768px)').matches
      )
    }

    // Check initially and on resize
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return // Don't set up mouse tracking on mobile

    let timeoutId: NodeJS.Timeout
    let animationId: number

    const updateCursor = (e: MouseEvent) => {
      const newTarget = { x: e.clientX, y: e.clientY }
      setTarget(newTarget)
      setIsMoving(true)
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMoving(false)
        setPosition(newTarget)
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
  }, [isMoving, target, isMobile])

  if (isMobile) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden md:block" // Hide on mobile using Tailwind
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
