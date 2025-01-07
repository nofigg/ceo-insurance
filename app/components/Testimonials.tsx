'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    id: 1,
    quote: "Their expertise in executive insurance solutions helped us create a comprehensive benefits package that truly sets us apart in attracting and retaining top talent. The team's deep understanding of complex insurance needs made all the difference for our executive team.",
    author: "William DeMarco",
    role: "Pharmacy Operations Manager",
    company: "Albertsons USA",
    rating: 5
  },
  {
    id: 2,
    quote: "CEO Insurance made getting coverage so simple. Their team walked me through every step and found me the perfect plan for my business.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Solutions",
    company: "TechStart Solutions",
    rating: 5
  },
  {
    id: 3,
    quote: "The personalized attention I received was exceptional. They truly care about protecting your business and its future.",
    author: "Emily Rodriguez",
    role: "Owner, Creative Design Co",
    company: "Creative Design Co",
    rating: 5
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [key, setKey] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setKey(prev => prev + 1)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setKey(prev => prev + 1)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
    setKey(prev => prev + 1)
  }

  return (
    <section id="testimonials" className="pb-24 sm:pb-32" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 id="testimonials-title" className="text-base font-semibold leading-7 text-[#FCA311]">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#001d3d] sm:text-4xl">
            From Our Clients
          </p>
        </div>

        <div className="mx-auto max-w-2xl mt-10">
          <div className="relative">
            <div key={key} className="animate-fade" aria-live="polite">
              <div className="flex gap-x-1 text-[#FCA311]" role="img" aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}>
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" fill="currentColor" />
                ))}
              </div>

              <blockquote className="mt-4">
                <p className="text-xl font-semibold text-[#001d3d]">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer className="mt-8">
                  <div className="flex items-center gap-x-4">
                    <div className="text-base">
                      <div className="font-semibold text-[#001d3d]">{testimonials[currentIndex].author}</div>
                      <div className="text-[#001d3d]">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className="text-base text-[rgba(0,29,61,0.6)]">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Navigation Controls */}
            <div className="mt-8 flex justify-center items-center gap-4" role="navigation" aria-label="Testimonial Navigation">
              <button
                onClick={handlePrev}
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCA311]"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-[#FCA311] w-4' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                    aria-current={index === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="rounded-full p-2 text-gray-600 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FCA311]"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        :global(.animate-fade) {
          animation: fade 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
