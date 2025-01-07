'use client'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="text-center text-sm text-[#001d3d]">
          &copy; {new Date().getFullYear()} CEO Insurance. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
          <a href="/privacy-policy" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Privacy Policy</a>
          <a href="/terms-of-service" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Terms Of Service</a>
          <a href="/income-disclosure" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Income Disclosure</a>
        </div>
      </div>
    </footer>
  )
}
