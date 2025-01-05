'use client';

import React, { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '' },
  { name: 'Options', href: '/quote' },
  { name: 'Resources', href: 'resources' },
  { name: 'Get Started', href: 'get-started' }
]

export default function QuotePage() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBanner(currentScrollY <= lastScrollY || currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Banner */}
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
        showBanner ? 'top-10' : 'top-0'
      }`}>
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="h-12 w-auto"
                src="/logo.png"
                alt="CEO Insurance"
              />
            </a>
          </div>
          <div className="flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-[#1e3a6d] hover:text-[#FCA311] transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="tel:+1-915-433-2937"
              className="flex items-center justify-center rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D] transition-all duration-300 min-w-[120px]"
            >
              <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              Talk To An Expert
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="relative isolate pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1e3a6d] sm:text-6xl">
              Get Your Free Insurance Quote
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;ll help you find the perfect coverage for your needs. Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          
          {/* Quote Form */}
          <div className="mx-auto max-w-xl mt-16">
            <form className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#1e3a6d]">Personal Information</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1e3a6d] focus:outline-none focus:ring-[#1e3a6d] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1e3a6d] focus:outline-none focus:ring-[#1e3a6d] sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1e3a6d] focus:outline-none focus:ring-[#1e3a6d] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1e3a6d] focus:outline-none focus:ring-[#1e3a6d] sm:text-sm"
                  />
                </div>
              </div>

              {/* Insurance Type */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#1e3a6d]">Insurance Type</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      id="life"
                      name="insurance-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[#1e3a6d] focus:ring-[#1e3a6d]"
                    />
                    <label htmlFor="life" className="ml-3 block text-sm font-medium text-gray-700">
                      Life Insurance
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="health"
                      name="insurance-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[#1e3a6d] focus:ring-[#1e3a6d]"
                    />
                    <label htmlFor="health" className="ml-3 block text-sm font-medium text-gray-700">
                      Health Insurance
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="disability"
                      name="insurance-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[#1e3a6d] focus:ring-[#1e3a6d]"
                    />
                    <label htmlFor="disability" className="ml-3 block text-sm font-medium text-gray-700">
                      Disability Insurance
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="longterm"
                      name="insurance-type"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-[#1e3a6d] focus:ring-[#1e3a6d]"
                    />
                    <label htmlFor="longterm" className="ml-3 block text-sm font-medium text-gray-700">
                      Long Term Care
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-[#1e3a6d]">Additional Information</h2>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#1e3a6d] focus:outline-none focus:ring-[#1e3a6d] sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d] transition-all duration-300"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="tel:+1-915-433-2937" className="text-[#1e3a6d] hover:text-[#FCA311] transition-colors">
              (915) 433-2937
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} CEO Insurance. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
            <a href="/privacy-policy" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Terms Of Service</a>
            <a href="/income-disclosure" className="text-sm text-[#001d3d] hover:text-gray-700 transition-colors text-center">Income Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
