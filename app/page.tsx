'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

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
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
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
          
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Southwest's Premier Insurance Benefit Providers 2024
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
                <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
                  Our Services <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Comprehensive Coverage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Insurance Solutions for Business Leaders
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We offer specialized insurance solutions designed to protect executives and their companies from modern business risks.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-12">
              {/* Fidelity & Guaranty */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold">1</div>
                      <div className="mt-2 bg-blue-600 text-white text-sm px-3 py-1 rounded">BEST OVERALL</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Fidelity & Guaranty</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Wide range of annuity options with participation rates</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Downside protection of retirement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Growth potential & guaranteed income for life</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 mb-1">🏆</div>
                    <div className="text-3xl font-bold">9.8</div>
                    <div className="text-blue-600 text-sm font-semibold">EXCELLENT</div>
                    <div className="text-yellow-400">★★★★★</div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
                      See Plans
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* American National */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold">2</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">American National</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Life, retirement, & business solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Lifetime income solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Living benefits rider included at no extra cost</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">9.6</div>
                    <div className="text-blue-600 text-sm font-semibold">VERY GOOD</div>
                    <div className="text-yellow-400">★★★★★</div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
                      See Plans
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* National Life Group */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold">3</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">National Life Group</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Variety of life insurance products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Retirement & advanced market products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Living benefits rider included at no extra cost</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">9.5</div>
                    <div className="text-blue-600 text-sm font-semibold">EXCELLENT</div>
                    <div className="text-yellow-400">★★★★★</div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
                      See Plans
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Foresters Financial */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold">4</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Foresters Financial</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Variety of life insurance products</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Exclusive member benefits included</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Living benefits rider included at no extra cost</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">9.4</div>
                    <div className="text-blue-600 text-sm font-semibold">VERY GOOD</div>
                    <div className="text-yellow-400">★★★★★</div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
                      See Plans
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Mutual of Omaha */}
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <div className="text-6xl font-bold">5</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Mutual of Omaha</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Variety of life insurance solutions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Long-term care, cancer, & stroke insurance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="h-5 w-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Express underwriting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">9.3</div>
                    <div className="text-blue-600 text-sm font-semibold">VERY GOOD</div>
                    <div className="text-yellow-400">★★★★★</div>
                    <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
                      See Plans
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ready to protect your business? Contact us today for a consultation with our insurance experts.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
                <a
                  href="tel:+1234567890"
                  className="w-full sm:w-auto rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors text-center"
                >
                  Call Us Now
                </a>
                <a
                  href="mailto:contact@ceo-insurance.com"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  Email Us <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} CEO Insurance. All rights reserved.
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/privacy-policy" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-blue-600 hover:underline">Terms of Service</a>
            <a href="/income-disclosure" className="text-sm text-blue-600 hover:underline">Income Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
