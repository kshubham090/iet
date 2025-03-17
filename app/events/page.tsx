import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

export default function EventsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Event Calendar</h1>
            <p className="text-lg text-purple-100">Stay updated with our upcoming events, workshops, and activities.</p>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Technical Workshop: AI in Engineering",
                date: "April 15, 2025",
                time: "10:00 AM - 1:00 PM",
                location: "Engineering Block, Room 302",
                image: "/placeholder.svg?height=300&width=600&text=AI Workshop",
              },
              {
                title: "IET Present Around the World Competition",
                date: "April 22, 2025",
                time: "2:00 PM - 5:00 PM",
                location: "Auditorium",
                image: "/placeholder.svg?height=300&width=600&text=PATW Competition",
              },
              {
                title: "Industry Visit: Tech Innovation Hub",
                date: "May 5, 2025",
                time: "9:00 AM - 4:00 PM",
                location: "Tech Innovation Hub, Noida",
                image: "/placeholder.svg?height=300&width=600&text=Industry Visit",
              },
              {
                title: "Guest Lecture: Future of Renewable Energy",
                date: "May 12, 2025",
                time: "11:00 AM - 12:30 PM",
                location: "Seminar Hall",
                image: "/placeholder.svg?height=300&width=600&text=Guest Lecture",
              },
              {
                title: "Hackathon: Sustainable Solutions",
                date: "May 20-21, 2025",
                time: "9:00 AM onwards",
                location: "Computer Lab Complex",
                image: "/placeholder.svg?height=300&width=600&text=Hackathon",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[2fr_3fr] gap-6 bg-gray-50 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="relative h-48 md:h-auto">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">{event.title}</h3>
                  <div className="grid gap-2 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="h-4 w-4 mr-2 text-purple-700" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock className="h-4 w-4 mr-2 text-purple-700" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="h-4 w-4 mr-2 text-purple-700" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join us for this exciting event where you'll learn, network, and grow your skills. Don't miss this
                    opportunity to engage with industry experts and fellow engineering enthusiasts.
                  </p>
                  <div className="mt-auto flex gap-3">
                    <Button className="bg-purple-700 hover:bg-purple-800">Register Now</Button>
                    <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Past Events</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our previous events and activities from this academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Past Event ${item}`}
                    alt={`Past event ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>March {item * 2}, 2025</span>
                  </div>
                  <h3 className="font-bold text-purple-900 mb-2">Technical Workshop {item}</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    A hands-on workshop focused on emerging technologies and practical applications in engineering.
                  </p>
                  <Link href="/gallery">
                    <Button variant="link" className="p-0 h-auto text-purple-700">
                      View Gallery <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery/previous-events">
              <Button className="bg-purple-700 hover:bg-purple-800">
                View All Past Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Propose an Event Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Have an Event Idea?</h2>
            <p className="text-gray-600 mb-8">
              We welcome suggestions for events, workshops, and activities from our members. If you have an idea for an
              event that would benefit the IET community, we'd love to hear from you.
            </p>
            <Button className="bg-purple-700 hover:bg-purple-800">
              Propose an Event <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Join our mailing list to receive notifications about upcoming events and activities.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border-2 border-white bg-transparent text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-purple-900 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

