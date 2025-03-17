import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GalleryPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-lg text-purple-100">Explore moments from our events, activities, and celebrations.</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Event Pictures</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="relative aspect-square group overflow-hidden rounded-lg shadow-md">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Event Photo ${index + 1}`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    View Full Size
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-purple-700 hover:bg-purple-800">
              Load More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Previous Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Previous Events</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore our past events and activities from recent academic years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-3">2023-2024</span>
                IET Events and Initiatives
              </h3>

              <div className="grid gap-6">
                {[
                  "Webinar on Emerging 2D Materials and Quantum Technology: A focused session exploring the latest advancements in 2D materials and their integration with quantum technology, offering insights into the future of materials science and quantum computing.",
                  "Generative AI with Large Language Models: A cutting-edge webinar diving into the world of generative AI and large language models, highlighting their transformative applications in various industries, including engineering, healthcare, and technology.",
                  "Tech Visit: Industry Connect: A hands-on industry visit providing participants with the opportunity to connect with leading professionals and experience real-world engineering innovations, fostering a deeper understanding of industry practices.",
                  "IET Orientation Program: An introductory session designed to familiarize new members with the IET's services, resources, and opportunities, helping them navigate their journey within the organization and its professional community.",
                  "Maximizing the Impact of Analytics Through AI Innovation: A webinar or workshop focused on leveraging artificial intelligence to maximize the potential of data analytics, driving innovation and enabling smarter decision-making across industries.",
                  "Amrit Udyan Visit: A guided visit to Amrit Udyan, promoting environmental awareness and showcasing the role of greenery in urban spaces, while connecting nature with engineering and technology solutions for sustainable development.",
                  "Byte Bash: A tech event celebrating the world of digital innovation, where participants engage in coding challenges, hackathons, and discussions on the future of software engineering and digital transformation.",
                  "IET Scholarship Awards Regional Round: A regional competition celebrating the achievements of promising students who have excelled in the IET Scholarship Awards, recognizing their academic excellence and potential in engineering.",
                  "IET Present Around the Network (University Level): A platform for university students to present their innovative projects and research, fostering creativity, collaboration, and networking within the IET community.",
                  "Membership Drives: Targeted initiatives aimed at expanding the IET community by promoting the benefits of membership, connecting professionals with valuable resources, and encouraging students and engineers to join the global network of IET members.",
                ].map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-purple-900 mb-2">{event.split(":")[0]}</h4>
                    <p className="text-gray-700">{event.split(":")[1]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-3">2022-2023</span>
                IET Events and Initiatives
              </h3>

              <div className="grid gap-6">
                {[
                  "IET Half Marathon Event: A fitness and networking event that brings together engineering professionals and enthusiasts to promote health, wellness, and community engagement.",
                  "IET India Scholarship Regional Rounds: Regional competitions for the prestigious IET India Scholarship, offering talented engineering students the opportunity to showcase their skills and secure financial support for their academic journey.",
                  "IET 55th Engineers Day Celebration: A special event commemorating the contributions of engineers, marking the 55th Engineers Day with activities, recognition of achievements, and discussions on engineering's role in shaping the future.",
                  "IET Yamuna Plogging Drive: A community-driven environmental initiative aimed at cleaning the Yamuna river while promoting sustainability and environmental awareness through plogging (picking up litter while jogging).",
                  "IET Present Around the Network (University Level): A platform for university students to present and discuss their innovative ideas, research, and projects within the IET community, fostering creativity and knowledge sharing.",
                  "IET Delegation Visit at University: IET organizes delegations to visit prominent universities, building bridges between academia and industry, and engaging students in discussions on the future of engineering and technology.",
                  "IET India Scholarship Northern Regional Finale: The final round of the IET India Scholarship competition for the northern region, where students compete for top scholarships and recognition for their academic achievements and potential.",
                ].map((event, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-bold text-purple-900 mb-2">{event.split(":")[0]}</h4>
                    <p className="text-gray-700">{event.split(":")[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Event Highlights</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Watch videos from our most memorable events and activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=Video ${item}`}
                    alt={`Video thumbnail ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-purple-900/80 rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-purple-900 mb-1">IET Event Highlights {item}</h3>
                  <p className="text-gray-600 text-sm">Recorded on April {item * 5}, 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Next Event</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Don't miss out on our upcoming events and activities. Join IET today to stay updated.
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

