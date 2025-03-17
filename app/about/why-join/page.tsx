import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function WhyJoinPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Why Join IET?</h1>
            <p className="text-lg text-purple-100">
              Discover the compelling reasons to become a part of the Institution of Engineering and Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800&text=IET Community"
                alt="IET Community"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Unlock Your Engineering Potential</h2>
              <p className="text-gray-700 mb-6">
                Joining the IET opens doors to a world of opportunities for engineering students and professionals. From
                career enhancement to global networking, IET membership provides the tools and resources you need to
                excel in your engineering journey.
              </p>
              <p className="text-gray-700">
                Our structured programs, industry connections, and professional development resources are designed to
                give you a competitive edge in the rapidly evolving field of engineering and technology.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">10 Reasons to Join IET</h2>

            <div className="grid gap-6">
              {[
                {
                  title: "Structured Career Enhancement",
                  description:
                    "Access a highly structured career enhancement program designed to accelerate your professional growth.",
                },
                {
                  title: "Professional Guidance",
                  description:
                    "Receive guidance and support from successful engineering professionals who can mentor you on your journey.",
                },
                {
                  title: "Industry Insights",
                  description:
                    "Gain keen insights from industry into how job requirements will change by the time you graduate, the skill sets that recruiters will look for, and how to prepare yourself to have an edge over others.",
                },
                {
                  title: "Curated Internships",
                  description:
                    "Access valuable and curated internships that provide real-world experience and enhance your resume.",
                },
                {
                  title: "Exclusive Events",
                  description:
                    "Participate in a large number of IET events and initiatives created by the Local Network.",
                },
                {
                  title: "Industry Interaction",
                  description:
                    "Enjoy enhanced levels and quality of industry interaction, including industry-guided live projects, problem statements, hackathons, and sessions with subject matter experts.",
                },
                {
                  title: "Practical Experience",
                  description:
                    "Get hands-on exposure to critical job requirements including team building, project creation and execution, working with diverse teams, leadership, public speaking, and more.",
                },
                {
                  title: "Scholarship Advantage",
                  description:
                    "Receive favorable extra weightage when applying for India's largest undergraduate engineering scholarship.",
                },
                {
                  title: "Networking Opportunities",
                  description:
                    "Access intensive opportunities for networking and profile building with a hardcore professional engineering community even before graduation.",
                },
                {
                  title: "Global Exposure",
                  description:
                    "Gain opportunities to interact globally and travel as IET volunteers, expanding your horizons and international connections.",
                },
              ].map((reason, index) => (
                <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students and professionals who have benefited from their IET membership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=S${item}`}
                      alt={`Student ${item}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900">Student {item}</h3>
                    <p className="text-sm text-gray-500">Engineering Student</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Joining IET has been a game-changer for my engineering career. The networking opportunities,
                  technical resources, and professional development programs have given me a significant advantage in my
                  studies and internship applications."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join IET?</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Take the first step towards enhancing your engineering career by becoming an IET member today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/join">
                Join IET Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link href="/about/benefits">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Member Benefits <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

