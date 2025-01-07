'use client'

import { useState } from 'react'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  StarIcon,
  MinusIcon,
  PlusIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import Header from './components/Header'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

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

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="relative">
      <Header />

      <main>
        {/* Hero Section */}
        <div id="home" className="relative isolate pt-24" role="banner">
          {/* Background gradient */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FCA311] to-[#FFD700] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-6xl px-6 pt-32 sm:pt-48 lg:px-8" style={{ paddingBottom: '8em' }}>
            <div className="flex flex-col-reverse lg:flex lg:flex-row lg:items-center lg:justify-between">
              <div className="mt-10 lg:mt-0 mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                <div className="text-center sm:text-left">
                  <h1 className="text-4xl font-bold tracking-tight !leading-tight text-[#001d3d] sm:text-6xl">
                    The Southwest's Leading Life & Benefits Insurance&nbsp;Partner
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Discover unmatched insurance and benefit coverage options across the American Southwest. From Arizona to California, Colorado to New Mexico, Texas to Nevada — we're your trusted local partner for comprehensive executive protection and business insurance solutions.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-6">
                    <a
                      href="/quote"
                      className="w-full flex items-center justify-center rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d] transition-all duration-300 min-w-[120px] text-center"
                      aria-label="Get your free insurance quote"
                    >
                      Get Your Free Quote
                    </a>
                    <a
                      href="https://cal.com/gonzalosandate"
                      className="w-full rounded-md border border-[#1e3a6d] py-2.5 text-sm font-semibold text-[#1e3a6d] hover:bg-[#FCA311] hover:border-[#B68A00] hover:text-white transition-all duration-300 text-center"
                      aria-label="Schedule a consultation appointment"
                    >
                      Book A Consultation
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:mt-0">
                <ShieldCheckIcon 
                  className="mx-auto h-32 w-32 sm:h-40 sm:w-40 fill-transparent stroke-[1.5] [stroke:url(#gradient)]" 
                  role="img"
                  aria-label="Shield check icon representing insurance protection"
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
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="pb-24 sm:pb-32" aria-labelledby="services-title">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="services-title" className="text-base font-semibold leading-7 text-[#FCA311]">Comprehensive Coverage Options</h2>
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
                      <ul className="mt-6 space-y-4" aria-label={`Features of ${service.name}`}>
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
                          aria-label={`Get a free quote for ${service.name}`}
                        >
                          Get Your Free Quote
                          <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Resources Section */}
        <div id="resources" className="pb-24 sm:pb-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-[#FCA311]">Resources</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#001d3d] sm:text-4xl">
                Tools for Smart Business Leaders
              </p>
            </div>
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
                        <MinusIcon className="h-6 w-6 group-hover:text-[#FCA311]" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6 group-hover:text-[#FCA311]" aria-hidden="true" />
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

        {/* Get Started Section */}
        <section id="get-started" className="relative isolate bg-gray-50/80 py-24 sm:py-32 overflow-hidden" role="region" aria-labelledby="get-started-title">
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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="get-started-title" className="text-base font-semibold leading-7 text-[#FCA311]">Get Started</h2>
              <h3 className="text-3xl font-bold tracking-tight text-[#001d3d] sm:text-4xl mt-2">
                Take The Next Step
              </h3>
              <p className="mt-6 text-lg leading-8 text-[#001d3d]">
                Be smart and conduct business the right way. Contact us today to find out what it takes to get your business protected!
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-6">
                <a
                  href="/quote"
                  className="w-full flex items-center justify-center rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d] transition-all duration-300 min-w-[120px] text-center"
                  aria-label="Get your free insurance quote"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="https://cal.com/gonzalosandate"
                  className="w-full rounded-md border border-[#1e3a6d] py-2.5 text-sm font-semibold text-[#1e3a6d] hover:bg-[#FCA311] hover:border-[#B68A00] hover:text-white transition-all duration-300 text-center"
                  aria-label="Schedule a consultation appointment"
                >
                  Book A Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
