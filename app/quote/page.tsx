'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function QuotePage() {
  return (
    <div className="relative">
      <Header />

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

      <Footer />
    </div>
  );
}
