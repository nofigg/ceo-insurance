import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              CEO Insurance provides comprehensive comparisons of insurance and benefit providers to help you make informed decisions about your financial future.
            </p>
          </div>
          
          <div className="hidden md:block absolute h-full w-px bg-gray-200 left-1/4" />
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-blue-600 hover:underline">Home</a></li>
              <li><a href="#providers" className="text-sm text-blue-600 hover:underline">Our Providers</a></li>
              <li><a href="#guides" className="text-sm text-blue-600 hover:underline">Benefit Guides</a></li>
              <li><a href="#contact" className="text-sm text-blue-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="hidden md:block absolute h-full w-px bg-gray-200 left-2/4" />
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm text-gray-600">Email: info@ceo-insurance.com</p>
            <p className="text-sm text-gray-600">Phone: (555) 123-4567</p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/asset-protection" className="text-sm text-blue-600 hover:underline">Asset Protection & Accumulation</a></li>
                <li><a href="/retirement-planning" className="text-sm text-blue-600 hover:underline">Planning for Retirement</a></li>
                <li><a href="/insurance-basics" className="text-sm text-blue-600 hover:underline">Insurance Basics</a></li>
              </ul>
            </div>
          </div>
          
          <div className="hidden md:block absolute h-full w-px bg-gray-200 left-3/4" />
          
          <div className="md:order-last">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="text-sm text-blue-600 hover:underline">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-sm text-blue-600 hover:underline">Terms of Service</a></li>
              <li><a href="/income-disclosure" className="text-sm text-blue-600 hover:underline">Income Disclosure</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="text-center text-sm text-gray-600">
          {new Date().getFullYear()} CEO Insurance. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
