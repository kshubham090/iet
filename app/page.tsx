import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import EventCountdown from "@/components/event-countdown"
import SponsorTicker from "@/components/sponsor-ticker"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Tech conference background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-purple-900/70"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 py-12 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Engineers, Inspiring Innovators – Welcome to IET On Campus Student Chapter AUUP
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-100">
            Join a vibrant community of tech enthusiasts, industry leaders, and changemakers. Participate in world-class
            events, hackathons, and networking opportunities that shape the future of engineering and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-200">
              <Link href="/join">
                Join Us Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Explore Events <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-16">
            <EventCountdown targetDate="2025-04-15T09:00:00" eventName="Annual Tech Symposium" />
          </div>
        </div>
      </section>

      {/* Sponsors Ticker */}
      <section className="bg-white py-6">
        <div className="container">
          <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">Our Partners & Sponsors</h2>
          <SponsorTicker />
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">About IET</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                The IET (Institution of Engineering and Technology) is a dynamic and influential institution dedicated
                to inspiring, informing, and influencing the global engineering community. Our mission is to drive
                positive change by supporting engineers in their quest to create a better world.
              </p>
              <Link href="/about">
                <Button variant="link" className="text-purple-700 p-0 font-semibold">
                  Learn more about IET <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="IET Community" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Event ${item}`}
                    alt={`Event ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>April {10 + item}, 2025</span>
                    <Clock className="h-4 w-4 ml-4 mr-2" />
                    <span>10:00 AM</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-900">Tech Workshop {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Join us for an exciting workshop on emerging technologies and networking opportunities.
                  </p>
                  <Button variant="outline" className="w-full border-purple-600 text-purple-700 hover:bg-purple-50">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/events">
              <Button className="bg-purple-700 hover:bg-purple-800">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated faculty coordinators and student council members who lead our IET chapter.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Sneha Chandra", "Hardik Bagga", "Chahek Juneja", "Anubhav Anand"].map((name, index) => (
              <div key={index} className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-purple-200">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-semibold text-lg text-purple-900">{name}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0
                    ? "President"
                    : index === 1
                      ? "Vice President"
                      : index === 2
                        ? "Secretary"
                        : "Joint Secretary"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/team">
              <Button className="bg-purple-700 hover:bg-purple-800">
                Meet Our Full Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Gallery</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Explore moments from our past events and activities.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Event Photo ${item}`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button className="bg-purple-700 hover:bg-purple-800">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
            <p className="mt-4 max-w-2xl mx-auto">Have questions or want to join IET? Reach out to our team.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Dr. S.K. Dubey</h3>
              <p className="text-purple-200">Faculty Coordinator</p>
              <p className="mt-2">+91 8826035766</p>
              <p>skdubey1@amity.edu</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Uzair Sabir</h3>
              <p className="text-purple-200">Publicity Head</p>
              <p className="mt-2">+91 9315115642</p>
              <p>uzairsabir730@gmail.com</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Kislay Dubey</h3>
              <p className="text-purple-200">Publicity Head</p>
              <p className="mt-2">+91 8287378801</p>
              <p>dubey.industries07@gmail.com</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact">
              <Button className="bg-white text-purple-900 hover:bg-gray-100">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

