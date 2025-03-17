import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Services and Activities</h1>
            <p className="text-lg text-purple-100">
              Explore the wide range of services, activities, and programs offered by IET to support your professional
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid gap-16">
            <ServiceCategory
              icon={<BookOpen className="h-12 w-12 text-purple-700" />}
              title="Professional Development"
              description="We offer a variety of learning opportunities designed to enhance your engineering skills and career prospects."
              services={[
                "Courses & Webinars: We offer a variety of online learning opportunities, including webinars and workshops, designed to cater to different engineering disciplines and levels of expertise.",
                "Certifications & Skills Development: Our courses on emerging technologies and leadership training are specifically designed to help engineers enhance their skill sets, equipping them for the future of the industry.",
              ]}
            />

            <ServiceCategory
              icon={<Users className="h-12 w-12 text-purple-700" />}
              title="Networking Opportunities"
              description="Connect with professionals from diverse industries to share insights and foster collaboration."
              services={[
                "Conferences & Events: IET organizes annual conferences, special interest group (SIG) meetings, and exclusive networking events, bringing professionals from diverse industries together to share insights and foster collaboration.",
                "Local Networks & Chapters: With IET's extensive network of local chapters across the globe, members can engage in regional activities, build connections, and participate in area-specific events.",
              ]}
            />

            <ServiceCategory
              icon={<Lightbulb className="h-12 w-12 text-purple-700" />}
              title="Research and Innovation"
              description="Collaborate on cutting-edge research and develop innovative solutions to global challenges."
              services={[
                "Collaboration with Universities: Through strategic partnerships with leading academic institutions, IET fosters collaborative research and the development of cutting-edge solutions.",
                "Innovation Programs: IET supports innovation labs and programs designed to nurture groundbreaking projects and solutions that address global challenges, providing a platform for forward-thinking engineers to lead transformative change.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Activities Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Featured Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Participate in our diverse range of activities designed to enhance your skills and expand your
              professional network.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Technical Competitions"
              title="Technical Competitions"
              description="Showcase your technical skills and innovative ideas in competitions like Present Around the World (PATW)."
            />
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Workshops"
              title="Workshops & Training"
              description="Enhance your practical skills through hands-on workshops and specialized training sessions."
            />
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Industry Visits"
              title="Industry Visits"
              description="Gain real-world insights through organized visits to leading engineering and technology companies."
            />
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Hackathons"
              title="Hackathons"
              description="Collaborate with peers to solve real-world problems in time-bound coding and innovation challenges."
            />
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Guest Lectures"
              title="Guest Lectures"
              description="Learn from industry experts and thought leaders through exclusive lectures and seminars."
            />
            <ActivityCard
              image="/placeholder.svg?height=300&width=400&text=Community Projects"
              title="Community Projects"
              description="Apply your engineering skills to make a positive impact through community service projects."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Join our upcoming events and activities to make the most of your IET membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              <Link href="/join">
                Join IET Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link href="/events">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Upcoming Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCategory({
  icon,
  title,
  description,
  services,
}: {
  icon: React.ReactNode
  title: string
  description: string
  services: string[]
}) {
  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
      <div className="text-center md:text-left">
        <div className="inline-block mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-purple-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex gap-4">
              <div className="bg-purple-100 text-purple-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                •
              </div>
              <p className="text-gray-700">{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ActivityCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  )
}

