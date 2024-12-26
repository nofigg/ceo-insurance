'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const handleBackClick = () => {
    window.location.href = '/'
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="flex">
          <button
            onClick={handleBackClick}
            type="button"
            className="flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600 transition-colors cursor-pointer rounded-md px-3 py-2 hover:bg-gray-50"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to Home
          </button>
        </div>
      </nav>
    </header>
  )
}
