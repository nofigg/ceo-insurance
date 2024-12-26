import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: December 25, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using CEO Insurance's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p>
              CEO Insurance provides insurance and financial services information, comparisons, and connections to licensed insurance professionals. We do not directly provide insurance products or financial advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Notify us of any unauthorized use</li>
              <li>Use our services legally and appropriately</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our website are owned by CEO Insurance and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. We do not guarantee the accuracy or completeness of any information on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              CEO Insurance shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              CEO Insurance<br />
              Email: legal@ceo-insurance.com<br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
