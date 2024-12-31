'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { serviceNames } from './data'
import { CheckIcon } from '@heroicons/react/24/outline'

function BookingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    services: [] as string[],
    name: '',
    age: '',
    maritalStatus: 'single',
    hasChildren: false,
    numberOfChildren: '',
    isHomeowner: false,
    annualIncome: '',
    employmentStatus: 'employed',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  // Handle pre-selected service from URL only once on initial load
  useEffect(() => {
    const selectedService = searchParams.get('service')
    if (selectedService && Object.keys(serviceNames).includes(selectedService)) {
      setFormData(prev => ({
        ...prev,
        services: prev.services.includes(selectedService) ? prev.services : [...prev.services, selectedService]
      }))
    }
  }, []) // Empty dependency array means this only runs once on mount

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleNext = () => {
    if (currentStep === 3) {
      setShowConfirmation(true)
    } else {
      setCurrentStep(prev => prev + 1)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNext()
  }

  const renderProgressSteps = () => {
    const steps = [
      { 
        name: 'Select a Service',
        description: 'Choose the services you need',
        status: currentStep > 1 ? 'complete' : currentStep === 1 ? 'current' : 'upcoming'
      },
      { 
        name: 'Contact Info',
        description: 'Your information',
        status: currentStep > 2 ? 'complete' : currentStep === 2 ? 'current' : 'upcoming'
      },
      { 
        name: 'Review',
        description: 'Confirm details',
        status: currentStep > 3 ? 'complete' : currentStep === 3 ? 'current' : 'upcoming'
      }
    ]

    return (
      <nav aria-label="Progress" className="flex items-center justify-center mb-8">
        <ol role="list" className="flex items-center space-x-5">
          {steps.map((step) => (
            <li key={step.name}>
              {step.status === 'complete' ? (
                <div className="block size-2.5 rounded-full bg-[#14213D]">
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : step.status === 'current' ? (
                <div className="relative flex items-center justify-center" aria-current="step">
                  <span aria-hidden="true" className="absolute flex size-5 p-px">
                    <span className="size-full rounded-full bg-[#E5E5E5]" />
                  </span>
                  <span aria-hidden="true" className="relative block size-2.5 rounded-full bg-[#14213D]" />
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : (
                <div className="block size-2.5 rounded-full bg-[#E5E5E5]">
                  <span className="sr-only">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    )
  }

  const renderServiceForm = () => (
    <div>
      <fieldset>
        <legend className="sr-only">Insurance Services</legend>
        <div className="space-y-6 pb-4">
          {Object.entries(serviceNames).map(([key, service]) => (
            <div 
              key={key} 
              className={`relative rounded-xl border p-8 cursor-pointer transition-all duration-300 bg-white shadow-lg ${
                formData.services.includes(key) ? 'border-[#1e3a6d] shadow-xl' : 'border-[#E5E5E5] hover:border-[#FCA311] hover:shadow-xl'
              }`} 
              onClick={() => handleServiceToggle(key)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#001d3d]">
                    {service.name}
                  </h3>
                  <p className="text-[#001d3d] mt-2">
                    {service.description}
                  </p>
                </div>
                {formData.services.includes(key) && (
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-5 w-5 text-[#34D399]" aria-hidden="true" />
                  </div>
                )}
              </div>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-5 w-5 text-[#34D399]" aria-hidden="true" />
                    </div>
                    <span className="text-[#14213D]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )

  const renderContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Age
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="maritalStatus" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Marital Status
          </label>
          <div className="mt-2.5">
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Children
          </label>
          <div className="mt-2.5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="hasChildren"
                checked={formData.hasChildren}
                onChange={handleChange}
                className="rounded border-[#E5E5E5] text-[#001d3d] focus:ring-[#001d3d]"
              />
              <span className="ml-2">Do you have children?</span>
            </label>
          </div>
          {formData.hasChildren && (
            <div className="mt-2.5">
              <input
                type="number"
                name="numberOfChildren"
                value={formData.numberOfChildren}
                onChange={handleChange}
                placeholder="Number of children"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Homeowner Status
          </label>
          <div className="mt-2.5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isHomeowner"
                checked={formData.isHomeowner}
                onChange={handleChange}
                className="rounded border-[#E5E5E5] text-[#001d3d] focus:ring-[#001d3d]"
              />
              <span className="ml-2">Are you a homeowner?</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="annualIncome" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Annual Income
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="annualIncome"
              id="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="employmentStatus" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Employment Status
          </label>
          <div className="mt-2.5">
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            >
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Phone
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Preferred Date
          </label>
          <div className="mt-2.5">
            <input
              type="date"
              name="preferredDate"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold leading-6 text-[#001d3d]">
            Preferred Time
          </label>
          <div className="mt-2.5">
            <input
              type="time"
              name="preferredTime"
              id="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-[#001d3d]">
            Add a message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-[#001d3d] shadow-sm ring-1 ring-inset ring-[#E5E5E5] placeholder:text-[#001d3d] focus:ring-2 focus:ring-inset focus:ring-[#001d3d] sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </form>
  )

  const renderReviewStep = () => (
    <div className="space-y-6">
      <div className="bg-[#FFFFFF] rounded-lg shadow-sm ring-1 ring-[#E5E5E5] p-6">
        <h3 className="text-lg font-semibold mb-4 text-[#001d3d]">Selected Services</h3>
        <ul className="space-y-3">
          {formData.services.map((service) => (
            <li key={service} className="flex items-center gap-2">
              <div className="flex-shrink-0">
                <CheckIcon className="h-5 w-5 text-[#34D399]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-medium text-[#001d3d]">{serviceNames[service].name}</p>
                <p className="text-[#001d3d]">{serviceNames[service].description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#FFFFFF] rounded-lg shadow-sm ring-1 ring-[#E5E5E5] p-6">
        <h3 className="text-lg font-semibold mb-4 text-[#001d3d]">Personal Information</h3>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div>
            <p className="font-medium text-[#001d3d]">Name</p>
            <p className="mt-1 text-[#001d3d]">{formData.name}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Email</p>
            <p className="mt-1 text-[#001d3d]">{formData.email}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Phone</p>
            <p className="mt-1 text-[#001d3d]">{formData.phone}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Age</p>
            <p className="mt-1 text-[#001d3d]">{formData.age}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Marital Status</p>
            <p className="mt-1 text-[#001d3d]">{formData.maritalStatus}</p>
          </div>
          {formData.hasChildren && (
            <div>
              <p className="font-medium text-[#001d3d]">Number of Children</p>
              <p className="mt-1 text-[#001d3d]">{formData.numberOfChildren}</p>
            </div>
          )}
          <div>
            <p className="font-medium text-[#001d3d]">Homeowner Status</p>
            <p className="mt-1 text-[#001d3d]">{formData.isHomeowner ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Annual Income</p>
            <p className="mt-1 text-[#001d3d]">{formData.annualIncome}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Employment Status</p>
            <p className="mt-1 text-[#001d3d]">{formData.employmentStatus}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] rounded-lg shadow-sm ring-1 ring-[#E5E5E5] p-6">
        <h3 className="text-lg font-semibold mb-4 text-[#001d3d]">Appointment Details</h3>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div>
            <p className="font-medium text-[#001d3d]">Preferred Date</p>
            <p className="mt-1 text-[#001d3d]">{formData.preferredDate}</p>
          </div>
          <div>
            <p className="font-medium text-[#001d3d]">Preferred Time</p>
            <p className="mt-1 text-[#001d3d]">{formData.preferredTime}</p>
          </div>
        </div>
      </div>

      {formData.message && (
        <div className="bg-[#FFFFFF] rounded-lg shadow-sm ring-1 ring-[#E5E5E5] p-6">
          <h3 className="text-lg font-semibold mb-4 text-[#001d3d]">Additional Message</h3>
          <p className="text-[#001d3d] whitespace-pre-wrap">{formData.message}</p>
        </div>
      )}
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center">
      <h3 className="text-base font-semibold leading-6 text-[#001d3d]">Application submitted!</h3>
      <div className="mt-2 text-sm text-[#001d3d]">
        <p>Thank you for your interest. We'll be in touch soon!</p>
      </div>
      <div className="mt-6">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="inline-flex items-center rounded-md bg-[#1e3a6d] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d]"
        >
          Go home
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-[#001d3d] sm:text-6xl">
            <Suspense fallback={<div>Loading...</div>}>
              {currentStep === 1 ? 'Get Your Free Quote' : currentStep === 2 ? 'Select Services' : 'Review and Submit'}
            </Suspense>
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#001d3d]">
            <Suspense fallback={<div>Loading...</div>}>
              {currentStep === 1 
                ? "Choose the insurance services you're interested in."
                : currentStep === 2 
                ? "Please provide your contact information and preferences."
                : "Review your information and submit your consultation request."}
            </Suspense>
          </p>
        </div>

        {renderProgressSteps()}

        <div className="flex-1">
          {showConfirmation 
            ? renderConfirmation() 
            : currentStep === 1 
            ? renderServiceForm() 
            : currentStep === 2 
            ? renderContactForm()
            : renderReviewStep()
          }
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] border-t border-[#E5E5E5]">
          <div className="mx-auto max-w-3xl px-6 py-4 flex justify-center gap-4">
            <button
              type="button"
              onClick={currentStep === 1 ? () => router.push('/') : handleBack}
              className="rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d]"
            >
              {currentStep === 1 ? 'Cancel' : 'Back'}
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep === 1 && formData.services.length === 0}
              className="rounded-md bg-[#1e3a6d] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1e3a6d] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentStep === 3 ? 'Submit' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  )
}
