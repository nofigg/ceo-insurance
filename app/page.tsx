'use client'

import { useState, memo, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { 
  Bars3Icon, 
  XMarkIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'
import GradientOverlay from '@/components/ui/gradient-overlay'

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Options', href: 'services' },
  { name: 'Resources', href: 'resources' },
  { name: 'Get Started', href: 'get-started' }
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

const serviceNames = {
  "fidelity": {
    name: "Fidelity & Guaranty (Future Income)",
    description: "Comprehensive annuity solutions offering flexible rates, retirement protection, and guaranteed lifetime income.",
    features: [
      "Flexible rates",
      "Retirement protection",
      "Guaranteed lifetime income"
    ]
  },
  "american-national": {
    name: "American National",
    description: "Tailored life and retirement solutions with comprehensive benefits and guaranteed lifetime income.",
    features: [
      "Comprehensive benefits",
      "Guaranteed lifetime income",
      "Tailored solutions"
    ]
  },
  "national-life": {
    name: "National Life Group",
    description: "Advanced life insurance products with diverse market solutions and comprehensive living benefits.",
    features: [
      "Diverse market solutions",
      "Comprehensive living benefits",
      "Advanced life insurance products"
    ]
  },
  "foresters": {
    name: "Foresters Financial",
    description: "Exclusive life insurance offerings with unique member benefits and comprehensive coverage options.",
    features: [
      "Unique member benefits",
      "Comprehensive coverage options",
      "Exclusive life insurance offerings"
    ]
  },
  "mutual-omaha": {
    name: "Mutual of Omaha",
    description: "Comprehensive life insurance solutions with specialized long-term care and expedited underwriting.",
    features: [
      "Specialized long-term care",
      "Expedited underwriting",
      "Comprehensive life insurance solutions"
    ]
  }
}

const faqs = [
  {
    question: "Life Insurance Types",
    answer: "Explore the key types of life insurance, including term, whole life, universal life, and indexed universal life, to make informed financial decisions. Learn their benefits, drawbacks, and suitability for different financial goals.<br/><br/>For more details, check out this video: <a href='https://youtu.be/f5B3uR_fySg?si=UIbO40sZe0Vocp9W' target='_blank' rel='noopener noreferrer' class='text-[#FCA311] hover:text-[#14213D] transition-colors'>Life Insurance Types Explained</a>."
  },
  {
    question: "Understanding Annuities",
    answer: "Understanding annuities can empower your financial decisions by offering tailored options for stability and growth. Learn about key considerations like safeguarding principal investments, guaranteed income, and passing on benefits without probate complications. Additionally, learn about investment options, including banking products, the stock market, and insurance, and explore annuities' two main stages—accumulation and distribution phases.<br/><br/>For more details, check out this video: <a href='https://www.youtube.com/watch?v=zbUFn_FMSzA' target='_blank' rel='noopener noreferrer' class='text-[#FCA311] hover:text-[#14213D] transition-colors'>Annuities Explained</a>."
  },
  {
    question: "Living Benefits Overview",
    answer: "Life insurance policies offer more than death coverage by addressing critical financial needs during your lifetime. From illness or disability support to securing cash value for long-term stability, living benefits provide comprehensive financial solutions for personal and family planning.<br/><br/>For more details, check out this video: <a href='https://www.youtube.com/watch?v=Ta3DDWrQrQc' target='_blank' rel='noopener noreferrer' class='text-[#FCA311] hover:text-[#14213D] transition-colors'>Living Benefits Explained</a>."
  }
]

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, section: string) => {
  e.preventDefault();
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowBanner(false)
      } else if (currentScrollY === 0) {
        setShowBanner(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="relative">
      <div className={`flex items-center justify-center bg-[#FCA311] px-6 py-2.5 sm:px-3.5 fixed w-full top-0 z-[60] transition-transform duration-300 ${
        showBanner ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <p className="text-sm leading-6 text-white text-center">
          <a href="tel:+1-915-433-2937" className="font-semibold hover:text-[#14213D] transition-colors">
            Call Now: (915) 433-2937
            <span aria-hidden="true" className="ml-2">&rarr;</span>
          </a>
        </p>
      </div>
      {/* Header */}
      <header className={`fixed inset-x-0 z-50 bg-white/40 backdrop-blur-xl border-b border-gray-200/30 transition-all duration-300 ${
        showBanner ? 'top-[41px]' : 'top-0'
      }`}>
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">CEO Insurance</span>
              <img 
                className="h-8 w-auto sm:h-10" 
                src="/eagle.png" 
                alt="CEO Insurance"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#14213D]"
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
                href={`#${item.href}`}
                onClick={(e) => scrollToSection(e, item.href)} 
                className="text-sm font-semibold leading-6 text-[#1e3a6d] hover:text-[#FCA311] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="tel:+1-915-433-2937"
              className="flex items-center justify-center rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] transition-all duration-300 min-w-[120px]"
            >
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Talk To An Expert
            </a>
          </div>
        </nav>
        
        {/* Mobile menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out" 
               aria-hidden="true"
               onClick={() => setMobileMenuOpen(false)} />
          <Dialog.Panel className={`fixed inset-x-0 z-50 bg-white transition-[height,opacity] duration-300 ease-in-out overflow-hidden ${
            showBanner ? 'top-[41px]' : 'top-0'
          } ${mobileMenuOpen ? 'h-[100vh] opacity-100' : 'h-0 opacity-0'}`}>
            <div className="sticky top-0 px-6 py-6 bg-white">
              <div className="flex items-center justify-between">
                <a 
                  href="#home" 
                  onClick={(e) => {
                    scrollToSection(e, 'home');
                    setMobileMenuOpen(false);
                  }}
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">CEO Insurance</span>
                  <img 
                    className="h-8 w-auto sm:h-10" 
                    src="/eagle.png" 
                    alt="CEO Insurance"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#14213D]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root px-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={`#${item.href}`}
                      onClick={(e) => {
                        scrollToSection(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#001d3d] hover:bg-gray-50 w-full text-left transition-all duration-300 ease-in-out ${
                        mobileMenuOpen 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-4 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${150 + index * 50}ms`
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a
                    href="/quote"
                    className={`w-full rounded-md bg-[#1e3a6d] py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] text-center block transition-all duration-300 ease-in-out ${
                      mobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${150 + (navigation.length + 1) * 50}ms`
                    }}
                  >
                    Get Your Free Quote
                  </a>
                  <a
                    href="https://cal.com/gonzalosandate"
                    className={`w-full rounded-md border border-[#1e3a6d] py-2.5 text-sm font-semibold text-[#1e3a6d] hover:bg-[#FCA311] hover:border-[#B68A00] hover:text-white transition-all duration-300 text-center block ${
                      mobileMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      transitionDelay: `${150 + (navigation.length + 2) * 50}ms`
                    }}
                  >
                    Book A Consultation
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="bg-transparent">
        {/* Hero Section */}
        <div id="home" className="relative isolate pt-24">
          <GradientOverlay />
          <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-20">
            <div className="lg:hidden mb-8">
              <ShieldCheckIcon 
                className="mx-auto h-32 w-32 sm:h-40 sm:w-40 fill-transparent stroke-[1.5] [stroke:url(#gradient)]" 
                aria-hidden="true" 
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#FCA311" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-[#001d3d] sm:text-6xl">
                The Southwest's Premier Insurance Benefit Provider
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#001d3d]">
                Discover unmatched insurance and benefit coverage options across the American Southwest. From Arizona to California, Colorado to New Mexico, Texas to Nevada — we're your trusted local partner for comprehensive executive protection and business insurance solutions.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-6">
                <a
                  href="/quote"
                  className="w-full rounded-md bg-[#1e3a6d] py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] text-center"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="https://cal.com/gonzalosandate"
                  className="w-full rounded-md border border-[#1e3a6d] py-2.5 text-sm font-semibold text-[#1e3a6d] hover:bg-[#FCA311] hover:border-[#B68A00] hover:text-white transition-all duration-300 text-center"
                >
                  Book A Consultation
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
                    <stop offset="0%" stopColor="#FCA311" />
                    <stop offset="100%" stopColor="#FFD700" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
        </div>
      </div>

        {/* Services Section */}
        <div id="services" className="py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-[#FCA311]">Comprehensive Coverage</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#001d3d] sm:text-4xl">
                Insurance Solutions Tailored for Business Professionals
              </p>
              <p className="mt-6 text-lg leading-8 text-[#001d3d]">
                Retain and protect key personnel with top business performers backed by specialized insurance benefit packages against business loss and risk.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-12">
              {Object.entries(serviceNames).map(([key, service]) => (
                <div key={key} className="rounded-xl p-8 shadow-lg border border-[#E5E5E5] hover:shadow-xl transition-all duration-300 hover:border-[#FCA311]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#001d3d]">{service.name}</h3>
                      <p className="mt-2 text-[#001d3d]">{service.description}</p>
                      <ul className="mt-6 space-y-4">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="flex-shrink-0 mr-3">
                              <CheckCircleIcon className="h-5 w-5 text-[#34D399]" aria-hidden="true" />
                            </div>
                            <span className="text-[#001d3d]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href="/quote"
                          className="text-[#FCA311] hover:text-[#14213D] font-medium inline-flex items-center text-center"
                        >
                          Get Your Free Quote
                          <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <section className="px-6 py-16 sm:py-20 lg:px-8">
          <figure className="mx-auto max-w-2xl">
            <p className="sr-only">5 out of 5 stars</p>
            <div className="flex gap-x-1 text-[#FCA311]">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={`${rating < 5 ? 'text-[#FCA311]' : 'text-[#E5E5E5]'} h-5 w-5 flex-shrink-0`}
                  aria-hidden="true"
                  fill="currentColor"
                />
              ))}
            </div>
            <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-[#001d3d] sm:text-2xl/9">
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
                <div className="font-semibold text-[#001d3d]">Michael Chen</div>
                <div className="mt-0.5 text-[#001d3d]">CEO of Global Solutions Inc</div>
              </div>
            </figcaption>
          </figure>
        </section>

        {/* Resources Section */}
        <div id="resources" className="relative z-10 mb-16">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-4xl font-semibold tracking-tight text-[#001d3d] sm:text-5xl">
                Resources
              </h2>
              <div className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="pt-6 group">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-start justify-between text-left text-[#001d3d] cursor-pointer hover:text-[#FCA311] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FCA311] focus:ring-offset-2 rounded-lg p-2 -m-2"
                      aria-expanded={openFaq === index}
                      type="button"
                    >
                      <span className="text-base font-semibold leading-7 group-hover:text-[#FCA311]">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openFaq === index ? (
                          <MinusSmallIcon className="h-6 w-6 group-hover:text-[#FCA311]" aria-hidden="true" />
                        ) : (
                          <PlusSmallIcon className="h-6 w-6 group-hover:text-[#FCA311]" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="mt-2 pr-12">
                        <p 
                          className="text-base leading-7 text-gray-600"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div id="get-started" className="relative isolate bg-gray-50/80 py-16 overflow-hidden">
          <div
            className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FCA311] to-[#FFD700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#001d3d] sm:text-4xl">
                Get Started
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#001d3d]">
                Be smart and conduct business the right way. Contact us today to find out what it takes to get your business protected!
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-6">
                <a
                  href="/quote"
                  className="w-full flex items-center justify-center rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d] transition-all duration-300 min-w-[120px] text-center"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="https://cal.com/gonzalosandate"
                  className="w-full rounded-md border border-[#1e3a6d] py-2.5 text-sm font-semibold text-[#1e3a6d] hover:bg-[#FCA311] hover:border-[#B68A00] hover:text-white transition-all duration-300 text-center"
                >
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4 py-6">
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
    </div>
  )
}
