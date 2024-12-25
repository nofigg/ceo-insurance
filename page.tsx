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
      <header className="border-b">
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

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556742393-d75f5e02b654?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
          alt="Family enjoying financial security"
          width={1470}
          height={980}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">
              El Paso's Top Insurance Benefit Providers
            </h1>
            <p className="mt-4 text-lg max-w-2xl">
              Discover the best insurance and benefit coverage options in the El Paso, Texas area. Compare our top-rated local providers to find the perfect fit for your needs and secure your future.
            </p>
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 px-4 max-w-[250px] w-full">
              Connect Agent
            </Button>
          </div>
        </div>
      </section>


      {/* Detailed Rankings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_300px] gap-8">
            <div className="space-y-6">
              {/* Fidelity & Guaranty Detailed Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-6xl font-bold">1</div>
                      <Badge className="mt-2 bg-blue-600">BEST OVERALL</Badge>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">Fidelity & Guaranty</h3>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Wide range of annuity options with participation rates</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Downside protection of retirement</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Growth potential & guaranteed income for life</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <Trophy className="h-8 w-8 text-yellow-400 mx-auto" />
                          <div className="mt-2">
                            <div className="text-3xl font-bold">9.8</div>
                            <div className="text-sm font-semibold text-blue-600">EXCELLENT</div>
                            <div className="flex text-yellow-400 justify-center">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                            See Plans <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* American National Detailed Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-6xl font-bold">2</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">American National</h3>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Life, retirement, & business solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Lifetime income solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Living benefits rider included at no extra cost</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="mt-2">
                            <div className="text-3xl font-bold">9.6</div>
                            <div className="text-sm font-semibold text-blue-600">VERY GOOD</div>
                            <div className="flex text-yellow-400 justify-center">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                            See Plans <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* National Life Group Detailed Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-6xl font-bold">3</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">National Life Group</h3>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Variety of life insurance products</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Retirement & advanced market products</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Living benefits rider included at no extra cost</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="mt-2">
                            <div className="text-3xl font-bold">9.5</div>
                            <div className="text-sm font-semibold text-blue-600">EXCELLENT</div>
                            <div className="flex text-yellow-400 justify-center">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                            See Plans <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Foresters Financial Detailed Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-6xl font-bold">4</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">Foresters Financial</h3>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Variety of life insurance products</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Exclusive member benefits included</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Living benefits rider included at no extra cost</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="mt-2">
                            <div className="text-3xl font-bold">9.4</div>
                            <div className="text-sm font-semibold text-blue-600">VERY GOOD</div>
                            <div className="flex text-yellow-400 justify-center">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                            See Plans <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mutual of Omaha Detailed Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="text-6xl font-bold">5</div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold">Mutual of Omaha</h3>
                          <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Variety of life insurance solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Long-term care, cancer, & stroke insurance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-500" />
                              <span>Express underwriting</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="mt-2">
                            <div className="text-3xl font-bold">9.3</div>
                            <div className="text-sm font-semibold text-blue-600">VERY GOOD</div>
                            <div className="flex text-yellow-400 justify-center">
                              {"★".repeat(5)}
                            </div>
                          </div>
                          <Button className="mt-4 bg-emerald-500 hover:bg-emerald-600">
                            See Plans <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Benefit Guides</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Life Insurance Explained</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-600">
                        Read More
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Understanding Annuities</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-600">
                        Read More
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Living Benefits Overview</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-600">
                        Read More
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Asset Protection & Accumulation Basics</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-600">
                        Read More
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-medium">Planning for Retirement</h4>
                      <Button variant="link" className="p-0 h-auto text-blue-600">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                We provide comprehensive comparisons of insurance and benefit providers to help you make informed decisions about your financial future.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-blue-600 hover:underline">Home</a></li>
                <li><a href="#" className="text-sm text-blue-600 hover:underline">Our Providers</a></li>
                <li><a href="#" className="text-sm text-blue-600 hover:underline">Benefit Guides</a></li>
                <li><a href="#" className="text-sm text-blue-600 hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-sm text-gray-600">Email: info@benefitsadvisor.com</p>
              <p className="text-sm text-gray-600">Phone: (555) 123-4567</p>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-gray-600">
            © 2024 Benefits Advisor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

