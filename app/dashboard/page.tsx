'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Status = 'pending' | 'in progress' | 'done'

interface Lead {
  id: number
  clientName: string
  email: string
  company: string
  createdAt: string
  location: string
  services: string[]
  message?: string
  status: Status
}

export default function DashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [expandedRows, setExpandedRows] = useState<number[]>([])
  const [visibleDetails, setVisibleDetails] = useState<number[]>([])
  const [stats, setStats] = useState({
    new: 0,
    contacted: 0,
    qualified: 0,
    reviewing: 0,
    proposalSent: 0,
    customer: 0,
    lostDeals: 0
  })

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    setLeads(storedBookings.map((booking: any) => ({
      id: booking.id,
      clientName: booking.clientName || 'Anonymous',
      email: booking.email || '-',
      company: booking.company || '-',
      createdAt: booking.createdAt,
      location: 'United States',
      services: booking.services || [],
      message: booking.message,
      status: booking.status || 'pending'
    })))

    // Calculate stats
    setStats({
      new: storedBookings.length,
      contacted: Math.floor(storedBookings.length * 0.8),
      qualified: Math.floor(storedBookings.length * 0.6),
      reviewing: Math.floor(storedBookings.length * 0.4),
      proposalSent: Math.floor(storedBookings.length * 0.2),
      customer: Math.floor(storedBookings.length * 0.1),
      lostDeals: Math.floor(storedBookings.length * 0.1)
    })
  }, [])

  const toggleDetails = (leadId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setVisibleDetails(prev =>
      prev.includes(leadId)
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    )
  }

  const maskEmail = (email: string) => {
    if (email === '-') return '-'
    const [username, domain] = email.split('@')
    if (!domain) return email
    return `${username[0]}${username.slice(1).replace(/./g, '*')}@${domain}`
  }

  const maskName = (name: string) => {
    if (name === 'Anonymous') return name
    const names = name.split(' ')
    return names.map(n => `${n[0]}${n.slice(1).replace(/./g, '*')}`).join(' ')
  }

  const updateLeadStatus = (leadId: number, newStatus: Status) => {
    const updatedLeads = leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    )
    setLeads(updatedLeads)
    
    // Update localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    const updatedBookings = storedBookings.map((booking: any) =>
      booking.id === leadId ? { ...booking, status: newStatus } : booking
    )
    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
  }

  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in progress':
        return 'bg-blue-100 text-blue-800'
      case 'done':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Less than minute'
    if (diffInMinutes === 1) return '1 minute ago'
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`
    if (diffInMinutes < 120) return '1 hour ago'
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`
    return `${Math.floor(diffInMinutes / 1440)} days ago`
  }

  const toggleRowExpansion = (leadId: number) => {
    setExpandedRows(prev => 
      prev.includes(leadId) 
        ? prev.filter(id => id !== leadId)
        : [...prev, leadId]
    )
  }

  return (
    <div className="min-h-screen bg-[#0F4C41]">
      <header className="bg-[#0F4C41] border-b border-[#1a5d50]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="text-white text-2xl font-semibold">Z</div>
              <nav className="ml-6 flex space-x-4">
                <Link href="/" className="text-white px-3 py-2 text-sm font-medium flex items-center gap-2 hover:bg-[#1a5d50] rounded-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                <Link href="/dashboard" className="text-white px-3 py-2 text-sm font-medium">Dashboard</Link>
                <Link href="/dashboard" className="text-white px-3 py-2 text-sm font-medium">Leads</Link>
                <Link href="/dashboard" className="text-white px-3 py-2 text-sm font-medium">Campaign</Link>
                <Link href="/dashboard" className="text-white px-3 py-2 text-sm font-medium">Analytics</Link>
                <Link href="/dashboard" className="text-white px-3 py-2 text-sm font-medium">Senders</Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="h-8 w-8 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-white">Leads Management</h1>
          <p className="text-[#9CB0AC] mt-1">Organize leads and track their progress effectively here</p>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">New</div>
            <div className="text-2xl font-semibold mt-1">{stats.new}</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Contacted</div>
            <div className="text-2xl font-semibold mt-1">{stats.contacted}</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Qualified</div>
            <div className="text-2xl font-semibold mt-1">{stats.qualified}k</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Reviewing</div>
            <div className="text-2xl font-semibold mt-1">{stats.reviewing}k</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Proposal sent</div>
            <div className="text-2xl font-semibold mt-1">{stats.proposalSent}k</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Customer</div>
            <div className="text-2xl font-semibold mt-1">{stats.customer}k</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-gray-500">Lost deals</div>
            <div className="text-2xl font-semibold mt-1">{stats.lostDeals}</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <button className="text-sm font-medium text-gray-700">Actions</button>
                <div className="text-sm text-gray-500">{leads.length} leads out of {leads.length}</div>
              </div>
              <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                + New lead
              </button>
            </div>

            <div className="px-4 sm:px-0">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-white">Leads</h2>
                <p className="mt-1 text-sm text-gray-300">
                  This dashboard contains sensitive customer information. Please handle all data with care and in accordance with privacy regulations.
                </p>
              </div>
            </div>

            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created at</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leads.map((lead) => (
                  <>
                    <tr 
                      key={lead.id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleRowExpansion(lead.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                          </div>
                          <div className="ml-4 flex items-center gap-2">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {visibleDetails.includes(lead.id) ? lead.clientName : maskName(lead.clientName)}
                              </div>
                              <div className="text-sm text-gray-500">Founder</div>
                            </div>
                            <svg
                              className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                                expandedRows.includes(lead.id) ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {visibleDetails.includes(lead.id) ? lead.email : maskEmail(lead.email)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatTimeAgo(lead.createdAt)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => {
                            e.stopPropagation()
                            updateLeadStatus(lead.id, e.target.value as Status)
                          }}
                          className={`text-sm font-medium rounded-full px-2.5 py-0.5 ${getStatusColor(lead.status)} border-0 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <option value="pending">Pending</option>
                          <option value="in progress">In Progress</option>
                          <option value="done">Done</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex space-x-4">
                          <button 
                            onClick={(e) => toggleDetails(lead.id, e)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            {visibleDetails.includes(lead.id) ? (
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                              </svg>
                            ) : (
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            )}
                          </button>
                          <button onClick={(e) => e.stopPropagation()}>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button onClick={(e) => e.stopPropagation()}>
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {expandedRows.includes(lead.id) && (
                      <tr className="bg-gray-50">
                        <td colSpan={7} className="px-6 py-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">Interested Services</h4>
                              <div className="mt-2 flex flex-wrap gap-2">
                                {lead.services.map((service, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                                  >
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {lead.message && (
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">Message</h4>
                                <p className="mt-1 text-sm text-gray-500">{lead.message}</p>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
