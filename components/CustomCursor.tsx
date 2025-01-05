'use client'

import { useEffect, useState, useCallback } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const checkMobile = useCallback(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.matchMedia('(max-width: 768px)').matches
    )
  }, [])

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [checkMobile])

  useEffect(() => {
    if (isMobile) return

    let timeoutId: NodeJS.Timeout
    let isThrottled = false

    const updateCursor = (e: MouseEvent) => {
      if (isThrottled) return
      isThrottled = true

      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
        setIsMoving(true)
        isThrottled = false
      })
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setIsMoving(false), 100)
    }

    window.addEventListener('mousemove', updateCursor)
    return () => {
      window.removeEventListener('mousemove', updateCursor)
      clearTimeout(timeoutId)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 hidden md:block"
      style={{ cursor: 'none' }}
    >
      <div
        className={`absolute h-8 w-8 rounded-full border-2 border-[#FCA311] transition-[transform,opacity] duration-75 ${
          isMoving ? 'scale-75 opacity-50' : 'scale-100 opacity-100'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`
        }}
      />
    </div>
  )
}
