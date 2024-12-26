'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline'

// This would typically come from your backend
const mockBookings = [
  {
    id: 1,
    clientName: 'John Smith',
    service: 'Fidelity & Guaranty',
    date: '2024-01-05',
    time: '10:00 AM',
    email: 'john.smith@example.com',
    phone: '(555) 123-4567',
    status: 'pending'
  },
  {
    id: 2,
    clientName: 'Sarah Johnson',
    service: 'American National',
    date: '2024-01-06',
    time: '2:00 PM',
    email: 'sarah.j@example.com',
    phone: '(555) 234-5678',
    status: 'confirmed'
  },
  // Add more mock bookings as needed
]

export default function BookingsPage() {
  const [bookings, setBookings] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('bookings') || '[]')
    }
    return []
  })
  const [selectedStatus, setSelectedStatus] = useState('all')

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

  useEffect(() => {
    if (bookings.length === 0) {
      setBookings(mockBookings)
      localStorage.setItem('bookings', JSON.stringify(mockBookings))
    }
  }, [bookings])

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">Consultation Bookings</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all consultation bookings including client details and status.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0">
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                      Client
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Service
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Date & Time
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Contact
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
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {booking.clientName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{booking.service}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                          {booking.date}
                          <ClockIcon className="ml-4 mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                          {booking.time}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div>{booking.email}</div>
                        <div>{booking.phone}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <select
                          value={booking.status}
                          onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                          className={`rounded-md text-sm font-medium ${
                            booking.status === 'confirmed'
                              ? 'text-green-700 bg-green-50'
                              : booking.status === 'pending'
                              ? 'text-yellow-700 bg-yellow-50'
                              : booking.status === 'cancelled'
                              ? 'text-red-700 bg-red-50'
                              : 'text-blue-700 bg-blue-50'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button
                          onClick={() => {/* Add view details functionality */}}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View Details
                        </button>
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
