import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IncomeDisclosure() {
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
        <h1 className="text-4xl font-bold mb-8">Income Disclosure Statement</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">Last Updated: December 25, 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              CEO Insurance is committed to providing transparent information about the business opportunity available to our independent insurance agents. This Income Disclosure Statement provides information about the income potential and earnings of our agents.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Income Disclaimer</h2>
            <p>
              The earnings of CEO Insurance agents can vary significantly and are dependent on numerous factors including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Time and effort devoted to the business</li>
              <li>Sales skills and experience</li>
              <li>Market conditions</li>
              <li>Client base</li>
              <li>Individual capabilities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Earnings Distribution</h2>
            <p>The following represents the average annual earnings for active agents in 2023:</p>
            
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Rank</th>
                    <th className="border border-gray-300 px-4 py-2">Average Annual Income</th>
                    <th className="border border-gray-300 px-4 py-2">Percentage of Agents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Top 1%</td>
                    <td className="border border-gray-300 px-4 py-2">$250,000+</td>
                    <td className="border border-gray-300 px-4 py-2">1%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Top 10%</td>
                    <td className="border border-gray-300 px-4 py-2">$100,000 - $250,000</td>
                    <td className="border border-gray-300 px-4 py-2">9%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Top 25%</td>
                    <td className="border border-gray-300 px-4 py-2">$50,000 - $100,000</td>
                    <td className="border border-gray-300 px-4 py-2">15%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Average</td>
                    <td className="border border-gray-300 px-4 py-2">$25,000 - $50,000</td>
                    <td className="border border-gray-300 px-4 py-2">45%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Entry Level</td>
                    <td className="border border-gray-300 px-4 py-2">$0 - $25,000</td>
                    <td className="border border-gray-300 px-4 py-2">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>These figures represent gross income before business expenses</li>
              <li>Earnings can vary significantly based on location and market conditions</li>
              <li>Success requires dedication, hard work, and effective sales skills</li>
              <li>Past performance does not guarantee future results</li>
              <li>These figures are not guarantees or projections of future earnings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Business Expenses</h2>
            <p>
              Agents are responsible for their own business expenses, which may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Licensing and certification fees</li>
              <li>Marketing and advertising costs</li>
              <li>Office expenses</li>
              <li>Travel and transportation</li>
              <li>Professional development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For questions about this Income Disclosure Statement, please contact:
            </p>
            <p className="mt-4">
              CEO Insurance<br />
              Email: compliance@ceo-insurance.com<br />
              Phone: (555) 123-4567
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
