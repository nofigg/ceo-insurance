import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/placeholder.svg"
            alt="Benefits Advisor"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
          <Button variant="outline" size="sm">
            Agent Login
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-6 py-12 mt-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: December 25, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              CEO Insurance ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p>We may collect personal information that you provide directly to us, including but not limited to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information</li>
              <li>Date of birth</li>
              <li>Social Security number</li>
              <li>Financial information</li>
              <li>Health information</li>
              <li>Employment information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Process your insurance applications</li>
              <li>Provide customer service</li>
              <li>Send you important information</li>
              <li>Comply with legal obligations</li>
              <li>Improve our services</li>
              <li>Prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Insurance carriers</li>
              <li>Service providers</li>
              <li>Legal authorities when required</li>
              <li>Business partners</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              CEO Insurance<br />
              Email: privacy@ceo-insurance.com<br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
