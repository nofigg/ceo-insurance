'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { serviceNames } from './data'
import { CheckIcon } from '@heroicons/react/24/outline'

const BookingContent = () => {
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
                <div className="block size-2.5 rounded-full bg-indigo-600">
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : step.status === 'current' ? (
                <div className="relative flex items-center justify-center" aria-current="step">
                  <span aria-hidden="true" className="absolute flex size-5 p-px">
                    <span className="size-full rounded-full bg-indigo-200" />
                  </span>
                  <span aria-hidden="true" className="relative block size-2.5 rounded-full bg-indigo-600" />
                  <span className="sr-only">{step.name}</span>
                </div>
              ) : (
                <div className="block size-2.5 rounded-full bg-gray-300">
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
              className={`relative rounded-xl border-2 p-6 cursor-pointer transition-all bg-white ${
                formData.services.includes(key) ? 'border-indigo-600' : 'border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => handleServiceToggle(key)}
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 mt-1">
                      {service.description}
                    </p>
                  </div>
                  {formData.services.includes(key) && (
                    <div className="flex-shrink-0">
                      <div className="size-6 rounded-full bg-indigo-600 flex items-center justify-center">
                        <CheckIcon className="h-4 w-4 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  )}
                </div>
                {service.features.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex gap-2 items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-semibold leading-6 text-gray-900">
            Age
          </label>
          <div className="mt-2.5">
            <input
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="maritalStatus" className="block text-sm font-semibold leading-6 text-gray-900">
            Marital Status
          </label>
          <div className="mt-2.5">
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Children
          </label>
          <div className="mt-2.5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="hasChildren"
                checked={formData.hasChildren}
                onChange={handleChange}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            Homeowner Status
          </label>
          <div className="mt-2.5">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isHomeowner"
                checked={formData.isHomeowner}
                onChange={handleChange}
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <span className="ml-2">Are you a homeowner?</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="annualIncome" className="block text-sm font-semibold leading-6 text-gray-900">
            Annual Income
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="annualIncome"
              id="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="employmentStatus" className="block text-sm font-semibold leading-6 text-gray-900">
            Employment Status
          </label>
          <div className="mt-2.5">
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="employed">Employed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="retired">Retired</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold leading-6 text-gray-900">
            Preferred Date
          </label>
          <div className="mt-2.5">
            <input
              type="date"
              name="preferredDate"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold leading-6 text-gray-900">
            Preferred Time
          </label>
          <div className="mt-2.5">
            <input
              type="time"
              name="preferredTime"
              id="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Add a message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </form>
  )

  const renderReviewStep = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-6">
        <h3 className="text-lg font-semibold mb-4">Selected Services</h3>
        <ul className="space-y-3">
          {formData.services.map((service) => (
            <li key={service} className="flex items-start gap-2">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">{serviceNames[service].name}</p>
                <p className="text-gray-500">{serviceNames[service].description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-500">Name</p>
            <p className="mt-1">{formData.name}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Email</p>
            <p className="mt-1">{formData.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Phone</p>
            <p className="mt-1">{formData.phone}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Age</p>
            <p className="mt-1">{formData.age}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Marital Status</p>
            <p className="mt-1">{formData.maritalStatus}</p>
          </div>
          {formData.hasChildren && (
            <div>
              <p className="font-medium text-gray-500">Number of Children</p>
              <p className="mt-1">{formData.numberOfChildren}</p>
            </div>
          )}
          <div>
            <p className="font-medium text-gray-500">Homeowner Status</p>
            <p className="mt-1">{formData.isHomeowner ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Annual Income</p>
            <p className="mt-1">{formData.annualIncome}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Employment Status</p>
            <p className="mt-1">{formData.employmentStatus}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-6">
        <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>
        <div className="grid grid-cols-1 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-500">Preferred Date</p>
            <p className="mt-1">{formData.preferredDate}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Preferred Time</p>
            <p className="mt-1">{formData.preferredTime}</p>
          </div>
        </div>
      </div>

      {formData.message && (
        <div className="bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5 p-6">
          <h3 className="text-lg font-semibold mb-4">Additional Message</h3>
          <p className="text-gray-600 whitespace-pre-wrap">{formData.message}</p>
        </div>
      )}
    </div>
  )

  const renderConfirmation = () => (
    <div className="text-center">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Application submitted!</h3>
      <div className="mt-2 text-sm text-gray-500">
        <p>Thank you for your interest. We'll be in touch soon!</p>
      </div>
      <div className="mt-6">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go home
        </button>
      </div>
    </div>
  )

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {currentStep === 1 ? 'Select Services' : currentStep === 2 ? 'Give Us Your Info' : 'Review Your Information'}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {currentStep === 1 
            ? "Choose the insurance services you're interested in."
            : currentStep === 2
            ? 'Tell us a bit about yourself so we can better assist you.'
            : 'Please review your information before submitting.'
          }
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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-6 py-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={currentStep === 1 ? () => router.push('/') : handleBack}
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            {currentStep === 1 ? 'Cancel' : 'Back'}
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === 1 && formData.services.length === 0}
            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
              currentStep === 1 && formData.services.length === 0
                ? 'bg-indigo-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-500'
            }`}
          >
            {currentStep === 3 ? 'Submit' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Book() {
  return (
    <div className="min-h-screen relative isolate">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <BookingContent />
      </div>
    </div>
  )
}
