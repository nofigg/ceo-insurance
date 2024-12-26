'use client'

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Trophy } from 'lucide-react'
import { Separator } from "@/components/ui/separator"

export default function InsuranceComparison() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Compare Insurance Plans
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find the perfect insurance coverage for your business needs
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for your business
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Basic Plan */}
            <Card className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Basic</h3>
                <Badge variant="secondary" className="rounded-full">
                  Most popular
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Essential coverage for small businesses
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$29</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Button className="mt-6 w-full">Get started</Button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  General Liability Coverage
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Property Insurance
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  24/7 Customer Support
                </li>
              </ul>
            </Card>

            {/* Professional Plan */}
            <Card className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Professional</h3>
                <Badge variant="secondary" className="rounded-full">
                  Recommended
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Comprehensive coverage for growing businesses
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">$99</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </p>
              <Button className="mt-6 w-full" variant="secondary">Get started</Button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Everything in Basic
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Professional Liability
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Cyber Insurance
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Priority Support
                </li>
              </ul>
            </Card>

            {/* Enterprise Plan */}
            <Card className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10">
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Enterprise</h3>
                <Badge variant="secondary" className="rounded-full">
                  Custom
                </Badge>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                Tailored solutions for large organizations
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">Custom</span>
              </p>
              <Button className="mt-6 w-full">Contact sales</Button>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Everything in Professional
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Custom Coverage Limits
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  Dedicated Account Manager
                </li>
                <li className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-indigo-600" />
                  24/7 Premium Support
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
