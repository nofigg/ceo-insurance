'use client'

import { useSearchParams } from 'next/navigation'
import { useState, Suspense } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const serviceNames = {
  'fidelity': 'Fidelity & Guaranty',
  'american-national': 'American National',
  'national-life': 'National Life Group',
  'foresters': 'Foresters Financial',
  'mutual-omaha': 'Mutual of Omaha'
}

function BookingContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const service = searchParams.get('service')
  const serviceName = service ? serviceNames[service as keyof typeof serviceNames] : ''
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    // For now, we'll store it in localStorage until we have a backend
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    const newBooking = {
      id: Date.now(),
      clientName: formData.name,
      service: serviceName,
      date: formData.preferredDate,
      time: formData.preferredTime,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    bookings.push(newBooking)
    localStorage.setItem('bookings', JSON.stringify(bookings))
    
    // Redirect to thank you page or show success message
    router.push('/?submitted=true')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative isolate">
          {/* Background gradient */}
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

          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mb-8">
              <nav aria-label="Progress">
                <ol role="list" className="flex items-center justify-center gap-2">
                  <li className="relative">
                    <div className="flex items-center">
                      <span className="h-2 w-16 bg-indigo-600 rounded"></span>
                    </div>
                  </li>
                  <li className="relative">
                    <div className="flex items-center">
                      <span className="h-2 w-16 bg-indigo-600 rounded"></span>
                    </div>
                  </li>
                  <li className="relative">
                    <div className="flex items-center">
                      <span className="h-2 w-16 bg-gray-200 rounded"></span>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="text-indigo-600">Service Selection</span>
                </span>
                <span className="flex items-center">
                  <span className="text-indigo-600 font-medium">Booking Form</span>
                </span>
                <span className="flex items-center">
                  <span>Confirmation</span>
                </span>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Schedule a Consultation</h2>
              {serviceName && (
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  for {serviceName} Services
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
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
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    id="preferredDate"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    id="preferredTime"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Schedule Consultation
                </button>
              </div>
            </form>
          </div>

          {/* Background gradient */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}
