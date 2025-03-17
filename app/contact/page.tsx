import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-purple-100">Have questions or want to join IET? Reach out to our team.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to us with any questions, suggestions, or if you're interested in joining the IET
                Student Chapter at AUUP. Our team is here to help you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">skdubey1@amity.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+91 8826035766</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      IET On Campus Student Chapter
                      <br />
                      Amity University Uttar Pradesh
                      <br />
                      Sector 125, Noida, UP, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-purple-700 hover:bg-purple-800">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Members */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Contact Team Members</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ContactCard
              name="Dr. S.K. Dubey"
              position="Faculty Coordinator"
              phone="+91 8826035766"
              email="skdubey1@amity.edu"
              image="/placeholder.svg?height=200&width=200&text=SKD"
            />
            <ContactCard
              name="Uzair Sabir"
              position="Publicity Head"
              phone="+91 9315115642"
              email="uzairsabir730@gmail.com"
              image="/placeholder.svg?height=200&width=200&text=US"
            />
            <ContactCard
              name="Kislay Dubey"
              position="Publicity Head"
              phone="+91 8287378801"
              email="dubey.industries07@gmail.com"
              image="/placeholder.svg?height=200&width=200&text=KD"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Find Us</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Map Location"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "How can I join the IET Student Chapter?",
                  answer:
                    "To join the IET Student Chapter at AUUP, you can fill out the membership form available on our website or contact our team members directly. We'll guide you through the registration process.",
                },
                {
                  question: "What are the benefits of joining IET?",
                  answer:
                    "IET membership offers numerous benefits including access to technical resources, networking opportunities, professional development programs, scholarships, and the chance to participate in various events and competitions.",
                },
                {
                  question: "How often do you organize events?",
                  answer:
                    "We organize events regularly throughout the academic year, including technical workshops, guest lectures, industry visits, competitions, and networking sessions. Check our Event Calendar for upcoming activities.",
                },
                {
                  question: "Can I volunteer for IET activities?",
                  answer:
                    "Yes, we welcome student volunteers who are passionate about engineering and technology. Volunteering is a great way to gain leadership experience and contribute to the engineering community.",
                },
                {
                  question: "Is there a membership fee?",
                  answer:
                    "Yes, there is a nominal membership fee to join the IET Student Chapter. The fee contributes to organizing events and activities throughout the year. Contact us for current membership rates.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-purple-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
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
          <Button className="bg-white text-purple-900 hover:bg-gray-100">
            <Link href="/join">Join IET Today</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function ContactCard({
  name,
  position,
  phone,
  email,
  image,
}: {
  name: string
  position: string
  phone: string
  email: string
  image: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm text-center">
      <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-4 border-purple-100">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="font-bold text-purple-900 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4">{position}</p>
      <div className="flex items-center justify-center text-gray-700 mb-2">
        <Phone className="h-4 w-4 mr-2 text-purple-700" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center justify-center text-gray-700">
        <Mail className="h-4 w-4 mr-2 text-purple-700" />
        <span>{email}</span>
      </div>
    </div>
  )
}

