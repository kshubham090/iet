import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About IET</h1>
            <p className="text-lg text-purple-100">
              Learn about the Institution of Engineering and Technology and our mission to inspire, inform, and
              influence the global engineering community.
            </p>
          </div>
        </div>
      </section>

      {/* What is IET Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">What is IET?</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  The IET (Institution of Engineering and Technology) is a dynamic and influential institution dedicated
                  to inspiring, informing, and influencing the global engineering community. Our mission is to drive
                  positive change by supporting engineers in their quest to create a better world.
                </p>
                <p className="text-gray-700 mb-4">
                  As a diverse and inclusive home for professionals across engineering and technology, we provide a
                  platform to share valuable knowledge, enabling individuals to make informed decisions that address the
                  world's most pressing challenges.
                </p>
                <p className="text-gray-700">
                  It is through this commitment to knowledge-sharing and innovation that the IET is uniquely positioned
                  to champion the field of engineering, leading the way toward a brighter, more sustainable future.
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=IET Community"
                alt="IET Community"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join IET Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Why Join IET?</h2>
            <div className="grid gap-6 mt-8">
              {[
                "Highly structured career enhancement program.",
                "Guided and supported by successful engineering professionals.",
                "Keen insights from industry into how job requirements will change by the time the students graduate, the skill sets that recruiters will look for, and how students can prepare themselves to have an edge over others.",
                "Access to valuable and curated internships.",
                "Access to a large number of IET events and initiatives created by the LN.",
                "Enhanced levels and quality of industry interaction, including industry guided live projects, industry problem statements, hackathons, sessions with subject matter experts etc.",
                "Hands on exposure to critical job requirements including team building, project creation and execution, working with strangers, leadership, public speaking and more.",
                "Favourable extra weightage when applying for India's largest undergraduate engineering scholarship.",
                "Intensive opportunities for networking and profile building, with a hardcore professional engineering community even before graduation.",
                "Opportunities to interact globally and travel as IET volunteers",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/about/benefits">
                <Button className="bg-purple-700 hover:bg-purple-800">
                  Learn About Member Benefits <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Other About Sections */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Explore More About IET</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of membership and the services we offer to our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/about/benefits" className="group">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-purple-900 mb-4 group-hover:text-purple-700 transition-colors">
                  Student Member Benefits
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore the exclusive benefits available to IET student members, from scholarships to career
                  development opportunities.
                </p>
                <span className="text-purple-700 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            <Link href="/about/services" className="group">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <h3 className="text-xl font-bold text-purple-900 mb-4 group-hover:text-purple-700 transition-colors">
                  Services and Activities
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the wide range of services, activities, and programs offered by IET to support professional
                  development.
                </p>
                <span className="text-purple-700 font-medium flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

