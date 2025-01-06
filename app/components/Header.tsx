'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  ArrowRightIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { useRouter, usePathname } from 'next/navigation'

const navigation = [
  { name: 'Options', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resources', href: '#resources' },
  { name: 'Get Started', href: '#get-started' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    const element = href === '#top' ? window.document.documentElement : document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLElement>) => {
    if (pathname === '/') {
      scrollToSection(e, '#top')
    } else {
      router.push('/')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setShowBanner(false)
      } else {
        setShowBanner(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [pathname])

  return (
    <header>
      <div className={`flex items-center justify-center bg-[#FCA311] px-6 py-2.5 sm:px-3.5 fixed w-full top-0 z-[60] transition-transform duration-300 ${showBanner ? 'translate-y-0' : '-translate-y-full'}`}>
        <p className="text-sm leading-6 text-white">
          <a href="https://cal.com/gonzalosandate" className="hover:underline">
            Book a free consultation with our team today! &rarr;
          </a>
        </p>
      </div>

      <nav className="flex items-center justify-between p-6 lg:px-8 fixed w-full bg-white z-50 border-b border-gray-200" style={{ top: showBanner ? '41px' : '0' }}>
        <div className="flex lg:flex-1">
          <a 
            href={pathname === '/' ? '#top' : '/'} 
            className="-m-1.5 p-1.5"
            onClick={handleLogoClick}
          >
            <span className="sr-only">CEO Insurance</span>
            <img
              className="h-8 w-auto"
              src="/eagle.png"
              alt="CEO Insurance"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={(e) => scrollToSection(e, '#services')}
            className="text-sm font-semibold leading-6 text-[#001d3d] hover:text-[#FCA311] transition-colors duration-300"
          >
            Options
          </button>
          <button
            onClick={(e) => scrollToSection(e, '#testimonials')}
            className="text-sm font-semibold leading-6 text-[#001d3d] hover:text-[#FCA311] transition-colors duration-300"
          >
            Testimonials
          </button>
          <button
            onClick={(e) => scrollToSection(e, '#resources')}
            className="text-sm font-semibold leading-6 text-[#001d3d] hover:text-[#FCA311] transition-colors duration-300"
          >
            Resources
          </button>
          <button
            onClick={(e) => scrollToSection(e, '#get-started')}
            className="text-sm font-semibold leading-6 text-[#001d3d] hover:text-[#FCA311] transition-colors duration-300"
          >
            Get Started
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <a
            href="tel:915-433-2937"
            className="flex items-center gap-2 rounded-md bg-[#1e3a6d] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] transition-all duration-300"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Talk To An Expert
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)} 
        />
        <Dialog.Panel 
          className={`fixed inset-x-0 z-50 bg-white overflow-hidden transition-all duration-300 ease-in-out ${showBanner ? 'top-[41px]' : 'top-0'}`}
          style={{
            height: mobileMenuOpen ? '100vh' : '0',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="sticky top-0 px-6 py-6 bg-white">
            <div className="flex items-center justify-between">
              <a 
                href={pathname === '/' ? '#top' : '/'} 
                className="-m-1.5 p-1.5"
                onClick={(e) => {
                  handleLogoClick(e);
                  setMobileMenuOpen(false);
                }}
              >
                <span className="sr-only">CEO Insurance</span>
                <img
                  className="h-8 w-auto"
                  src="/eagle.png"
                  alt="CEO Insurance"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      scrollToSection(e, '#services');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Options
                  </a>
                  <a
                    href="#testimonials"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      scrollToSection(e, '#testimonials');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Testimonials
                  </a>
                  <a
                    href="#resources"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      scrollToSection(e, '#resources');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Resources
                  </a>
                  <a
                    href="#get-started"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={(e) => {
                      scrollToSection(e, '#get-started');
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </a>
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="tel:915-433-2937"
                    className="flex items-center justify-center gap-2 rounded-md bg-[#1e3a6d] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                    Talk To An Expert
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
