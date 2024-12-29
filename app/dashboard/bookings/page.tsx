'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon, ClockIcon, UserIcon, HomeIcon, BriefcaseIcon, UserGroupIcon } from '@heroicons/react/24/outline'

type Booking = {
  id: number
  clientName: string
  age: string
  maritalStatus: string
  hasChildren: boolean
  numberOfChildren: string
  isHomeowner: boolean
  annualIncome: string
  employmentStatus: string
  services: string[]
  date: string
  time: string
  email: string
  phone: string
  message: string
  status: string
  createdAt: string
}

// This would typically come from your backend
const mockBookings: Booking[] = [
  {
    id: 1,
    clientName: 'John Smith',
    age: '35',
    maritalStatus: 'Married',
    hasChildren: true,
    numberOfChildren: '2',
    isHomeowner: true,
    annualIncome: '$100,000',
    employmentStatus: 'Employed',
    services: ['Fidelity & Guaranty'],
    date: '2024-01-05',
    time: '10:00 AM',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    message: 'Hello, I would like to schedule a consultation.',
    status: 'pending',
    createdAt: '2024-01-01'
  },
  {
    id: 2,
    clientName: 'Sarah Johnson',
    age: '28',
    maritalStatus: 'Single',
    hasChildren: false,
    numberOfChildren: '',
    isHomeowner: false,
    annualIncome: '$50,000',
    employmentStatus: 'Self-Employed',
    services: ['American National'],
    date: '2024-01-06',
    time: '2:00 PM',
    email: 'sarah.j@example.com',
    phone: '(555) 234-5678',
    message: '',
    status: 'confirmed',
    createdAt: '2024-01-02'
  }
]

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadBookings = () => {
      const storedBookings = localStorage.getItem('bookings')
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings))
      } else {
        setBookings(mockBookings)
        localStorage.setItem('bookings', JSON.stringify(mockBookings))
      }
      setIsLoading(false)
    }

    loadBookings()
  }, [])

  const filteredBookings = selectedStatus === 'all' 
    ? bookings 
    : bookings.filter(booking => booking.status === selectedStatus)

  const updateBookingStatus = (bookingId: number, newStatus: string) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId ? { ...booking, status: newStatus } : booking
    )
    setBookings(updatedBookings)
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </a>
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Consultation Bookings</h1>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            A list of all consultation bookings including client details and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="all">All Bookings</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Client Information
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Services
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Personal Details
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Appointment
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6">
                        <div className="flex items-center">
                          <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{booking.clientName}</div>
                            <div className="text-gray-500">{booking.email}</div>
                            <div className="text-gray-500">{booking.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-1">
                          {booking.services.map((service, index) => (
                            <div key={index} className="text-gray-900">{service}</div>
                          ))}
                          {booking.message && (
                            <div className="mt-2 text-sm text-gray-500">
                              <div className="font-medium">Message:</div>
                              <div className="italic">{booking.message}</div>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <UserIcon className="h-4 w-4 text-gray-400" />
                            <span>Age: {booking.age}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <UserGroupIcon className="h-4 w-4 text-gray-400" />
                            <span>{booking.maritalStatus}</span>
                          </div>
                          {booking.hasChildren && (
                            <div className="flex items-center gap-1">
                              <UserGroupIcon className="h-4 w-4 text-gray-400" />
                              <span>{booking.numberOfChildren} Children</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <HomeIcon className="h-4 w-4 text-gray-400" />
                            <span>{booking.isHomeowner ? 'Homeowner' : 'Not a Homeowner'}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BriefcaseIcon className="h-4 w-4 text-gray-400" />
                            <span>{booking.employmentStatus}</span>
                          </div>
                          <div>Income: {booking.annualIncome}</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          <div className="ml-2">
                            <div>{formatDate(booking.date)}</div>
                            <div>{booking.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <select
                          value={booking.status}
                          onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                          className={classNames(
                            'rounded-md px-2 py-1 text-sm font-semibold',
                            booking.status === 'pending' ? 'bg-yellow-50 text-yellow-700' :
                            booking.status === 'confirmed' ? 'bg-green-50 text-green-700' :
                            booking.status === 'completed' ? 'bg-blue-50 text-blue-700' :
                            'bg-gray-50 text-gray-700'
                          )}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
