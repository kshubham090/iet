import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, Globe, Users } from "lucide-react"
import Link from "next/link"

export default function BenefitsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Student Member Benefits</h1>
            <p className="text-lg text-purple-100">
              Discover the exclusive advantages and opportunities available to IET student members.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700 text-lg">
              IET supports the students to take their career as they wish to. IET links the students to the best minds
              (Subject Matter Experts) in Science, Engineering & Technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<Award className="h-10 w-10 text-purple-700" />}
              title="Scholarships & Awards"
              description="Apply for scholarships which reward individual excellence at undergraduate and postgraduate levels."
            />
            <BenefitCard
              icon={<BookOpen className="h-10 w-10 text-purple-700" />}
              title="Professional Development"
              description="Access IET courses that develop professional skills relevant for the working environment."
            />
            <BenefitCard
              icon={<Briefcase className="h-10 w-10 text-purple-700" />}
              title="Career Support"
              description="Get support in searching for the right international job & getting noticed by potential employers."
            />
            <BenefitCard
              icon={<Users className="h-10 w-10 text-purple-700" />}
              title="Present Around the World"
              description="Participate in PATW, an international technical presentation competition to showcase your skills and win cash prizes."
            />
            <BenefitCard
              icon={<GraduationCap className="h-10 w-10 text-purple-700" />}
              title="Professional Qualification"
              description="Access training, development, peer recognition & mentoring to become among the brightest minds in engineering."
            />
            <BenefitCard
              icon={<Globe className="h-10 w-10 text-purple-700" />}
              title="Global Recognition"
              description="Stand out from the crowd & present your achievements to national & global engineering audiences."
            />
          </div>
        </div>
      </section>

      {/* Detailed Benefits List */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Comprehensive Benefits</h2>
            <div className="grid gap-6 mt-8">
              {[
                "Can apply for Scholarship which rewards for individual excellence (UG/ PG).",
                "IET Courses develop professional skills relevant for the working environment.",
                "Support them in searching for the right international job & getting them noticed by the Potential Employer.",
                "S.M. can participate in Present around the World (PATW), an international Technical Presentation Competition where they can present their Individual Skills & also win cash prize.",
                "IET's professional qualification, training & development, peer recognition & mentoring equips the student members to become brightest & the most inspiring minds in the field of Engineering & Technology.",
                "IET's Scholarship helps in bring together engineering talent globally to share knowledge, develop engineers & also help Industry and Academia. Scholarship has been designed to reward, celebrate creativity, innovation, excellence & leadership",
                "Stand out from the Crowd & present your achievements to national & global engineering audience.",
                "IET has also designed an Advantage Programme (Graduate Advantage / Career Advantage/ Professional Advantage) which help young engineering professionals reach their professional goals faster & more effectively.",
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start p-6 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{benefit}</p>
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
            Become a part of our global engineering community and access all these benefits and more.
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-100">
            <Link href="/join">
              Join IET Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

