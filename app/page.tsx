'use client'

import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  HeartIcon,
  ChartBarIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

const features = [
  {
    name: "Directors & Officers Insurance",
    description: "Protect your company's leadership with comprehensive coverage against claims arising from management decisions."
  },
  {
    name: "Errors & Omissions Insurance",
    description: "Safeguard your business against claims of inadequate work or negligent actions."
  },
  {
    name: "Cyber Insurance",
    description: "Defend against data breaches and cyber attacks with robust digital protection coverage."
  },
  {
    name: "Employment Practices Liability",
    description: "Coverage for claims related to wrongful termination, discrimination, and other employment-related issues."
  }
]

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    router.push('/dashboard')
  }

  return (
    <div className="relative bg-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CEO Insurance</span>
              <img
                className="h-8 w-auto sm:h-10 lg:h-12"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={handleLogin}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Agent Portal <span aria-hidden="true">→</span>
            </button>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">CEO Insurance</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
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
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        scrollToSection(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      handleLogin()
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Agent Portal
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <div className="relative isolate pt-24">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
            <div className="lg:hidden mb-8">
              <ShieldCheckIcon 
                className="mx-auto h-32 w-32 sm:h-40 sm:w-40 fill-transparent stroke-[1.5] [stroke:url(#gradient)]" 
                aria-hidden="true" 
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#ff80b5" />
                    <stop offset="100%" stopColor="#9089fc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                The Southwest's Premier Insurance Benefit Provider
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover unmatched insurance and benefit coverage options across the American Southwest. From Arizona to New Mexico, Texas to Nevada - we're your trusted local partner for comprehensive executive protection and business insurance solutions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
                <button
                  onClick={handleLogin}
                  className="w-full sm:w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Get Coverage
                </button>
                <a 
                  href="mailto:gonzate@yahoo.com?subject=Inquiry%20About%20Executive%20Insurance%20Solutions&body=Hello%20Executive%20Insurance%20Team,%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20executive%20insurance%20solutions.%20Could%20you%20provide%20me%20with%20more%20information?%0A%0ABest%20regards,"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Email Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <ShieldCheckIcon 
                className="mx-auto h-48 w-48 fill-transparent stroke-[1.5] [stroke:url(#gradient-desktop)]" 
                aria-hidden="true" 
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient-desktop" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#ff80b5" />
                    <stop offset="100%" stopColor="#9089fc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-white py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Coverage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Insurance Solutions Tailored for Business Professionals
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Retain and protect key personnel with top business performers backed by specialized insurance benefit packages against business loss and risk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
              {/* Fidelity & Guaranty */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">FutureIncome (Fidelity & Guaranty)</h3>
                    <p className="mt-2 text-base text-gray-700">
                      Comprehensive annuity solutions offering flexible rates, retirement protection, and guaranteed lifetime income.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Wide range of annuity options: fixed and indexed rates with participation rates</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Downside protection of retirement</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Growth potential and guaranteed income for life</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/book?service=fidelity"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Schedule Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* American National */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Comprehensive Insurance Solutions</h3>
                    <p className="mt-2 text-base text-gray-700">
                      Tailored life and retirement solutions with comprehensive benefits and guaranteed lifetime income.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Life, retirement, and business solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Lifetime income</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Living benefits, rider included at no extra costs</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/book?service=american-national"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Schedule Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* National Life Group */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Innovative Life Solutions</h3>
                    <p className="mt-2 text-base text-gray-700">
                      Advanced life insurance products with diverse market solutions and comprehensive living benefits.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Variety of life, retirement, and advanced market products</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Lifetime income</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Living benefits, rider included at no extra costs</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/book?service=national-life"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Schedule Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foresters Financial */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Community-Focused Insurance</h3>
                    <p className="mt-2 text-base text-gray-700">
                      Exclusive life insurance offerings with unique member benefits and comprehensive coverage options.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Variety of life insurance products</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Exclusive member benefits such as Foresters Go, Law Assure, and Foresters Renew</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Living benefits, rider included at no extra costs</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/book?service=foresters"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Schedule Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mutual of Omaha */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">Trusted Insurance Provider</h3>
                    <p className="mt-2 text-base text-gray-700">
                      Comprehensive life insurance solutions with specialized long-term care and expedited underwriting.
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Variety of life insurance solutions</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Long-term care—cancer, heart attack, and stroke insurance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 mr-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        </div>
                        <span>Express underwriting</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a
                        href="/book?service=mutual-omaha"
                        className="text-indigo-600 hover:text-indigo-500 font-medium"
                      >
                        Schedule Consultation →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
          <figure className="mx-auto max-w-2xl">
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-indigo-600">
              <StarIcon aria-hidden="true" className="size-5 flex-none" />
              <StarIcon aria-hidden="true" className="size-5 flex-none" />
              <StarIcon aria-hidden="true" className="size-5 flex-none" />
              <StarIcon aria-hidden="true" className="size-5 flex-none" />
              <StarIcon aria-hidden="true" className="size-5 flex-none" />
            </div>
            <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
              <p>
                "Their expertise in executive insurance solutions helped us create a comprehensive benefits package that truly sets us apart in attracting and retaining top talent. The team's deep understanding of complex insurance needs made all the difference for our executive team."
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
                className="size-12 rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="mt-0.5 text-gray-600">CEO of Global Solutions Inc</div>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* Contact Section */}
        <div id="contact" className="relative isolate bg-gray-50/80 py-16 sm:py-24">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Started</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Be smart and conduct business the right way. Contact us today to find out what it takes to get your business protected!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="tel:+19154332937"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Call Us Now
                </a>
                <a 
                  href="mailto:gonzate@yahoo.com?subject=Inquiry%20About%20Executive%20Insurance%20Solutions&body=Hello%20Executive%20Insurance%20Team,%0A%0AI%20am%20interested%20in%20learning%20more%20about%20your%20executive%20insurance%20solutions.%20Could%20you%20provide%20me%20with%20more%20information?%0A%0ABest%20regards,"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Email Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} CEO Insurance. All rights reserved.
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Terms of Service</a>
            <a href="/income-disclosure" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">Income Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
