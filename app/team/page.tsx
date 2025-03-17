import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-purple-100">
              Meet the dedicated faculty coordinators and student council members who lead our IET chapter.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Faculty Coordinators</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Ritu Bhatnagar",
                position: "Faculty Coordinator",
                image: "/placeholder.svg?height=300&width=300&text=RB",
              },
              {
                name: "Dr. S.K. Dubey",
                position: "Faculty Coordinator",
                phone: "+91 8826035766",
                email: "skdubey1@amity.edu",
                image: "/placeholder.svg?height=300&width=300&text=SKD",
              },
            ].map((faculty, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-purple-200">
                  <Image src={faculty.image || "/placeholder.svg"} alt={faculty.name} fill className="object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-1">{faculty.name}</h3>
                <p className="text-gray-600 mb-4">{faculty.position}</p>
                {faculty.phone && (
                  <div className="flex items-center text-gray-700 mb-2">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{faculty.phone}</span>
                  </div>
                )}
                {faculty.email && (
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>{faculty.email}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Council Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Student Council</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sneha Chandra", position: "President" },
              { name: "Hardik Bagga", position: "Vice President" },
              { name: "Chahek Juneja", position: "Secretary" },
              { name: "Anubhav Anand", position: "Joint Secretary" },
              {
                name: "Uzair Sabir",
                position: "Publicity Head",
                phone: "+91 9315115642",
                email: "uzairsabir730@gmail.com",
              },
              {
                name: "Kislay Dubey",
                position: "Publicity Head",
                phone: "+91 8287378801",
                email: "dubey.industries07@gmail.com",
              },
              { name: "Swastika Banerjee", position: "Technical Head" },
              { name: "Unnati Bansal", position: "Treasurer" },
              { name: "Subarna Saha", position: "Photography Head" },
              { name: "Srishti Saxena", position: "Event Head" },
              { name: "Shruti Saxena", position: "Event Head" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-purple-100">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${member.name.split(" ")[0][0]}${member.name.split(" ")[1][0]}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-3">{member.position}</p>
                {member.phone && (
                  <div className="flex items-center text-gray-700 text-sm mb-1">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>{member.phone}</span>
                  </div>
                )}
                {member.email && (
                  <div className="flex items-center text-gray-700 text-sm">
                    <Mail className="h-3 w-3 mr-1" />
                    <span>{member.email}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Core Team Members</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              "Aditya Verma",
              "Anirudh Pratap Singh",
              "Shikhar Goel",
              "Shailee Bhattacharyya",
              "Kavisha Goyal",
              "Jhanvi Bhardwaj",
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-purple-100">
                  <Image
                    src={`/placeholder.svg?height=150&width=150&text=${member.split(" ")[0][0]}${member.split(" ").length > 1 ? member.split(" ")[1][0] : ""}`}
                    alt={member}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-center font-semibold text-purple-900">{member}</h3>
                <p className="text-xs text-gray-600">Core Team Member</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Messages From Leadership</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Prof. Dr. K.M. Soni", position: "Director" },
              { name: "Aman Rajput", position: "IET Representative" },
              { name: "Dr. S.K. Dubey", position: "Faculty Coordinator" },
            ].map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-200">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${person.name.split(" ")[0][0]}${person.name.split(" ")[1][0]}`}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-900">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "I am proud to be associated with the IET Student Chapter at AUUP. The dedication and enthusiasm of
                  our students in organizing technical events and promoting engineering excellence is commendable. I
                  encourage all students to actively participate in IET activities to enhance their skills and broaden
                  their horizons."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            Interested in becoming a part of the IET Student Chapter? Join us and contribute to our mission of
            empowering engineers.
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-100">
            <Link href="/join">
              Become a Member <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

