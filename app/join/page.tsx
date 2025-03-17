import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

export default function JoinPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-purple-900 text-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Join IET</h1>
            <p className="text-lg text-purple-100">
              Become a part of our vibrant community of tech enthusiasts, industry leaders, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits Summary */}
      <section className="py-12 bg-white">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-purple-900">Why Join IET?</h2>
            <p className="text-gray-600 mt-2">
              Membership offers numerous benefits to enhance your engineering journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <BenefitCard
              title="Professional Development"
              description="Access courses, webinars, and certifications to enhance your skills"
            />
            <BenefitCard
              title="Networking Opportunities"
              description="Connect with industry professionals and fellow engineering enthusiasts"
            />
            <BenefitCard
              title="Career Advancement"
              description="Get support in job searches and stand out to potential employers"
            />
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-purple-900 mb-6">Membership Application Form</h2>

            <form className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-900">Personal Information</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input id="phone" placeholder="Enter your phone number" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">
                    Date of Birth <span className="text-red-500">*</span>
                  </Label>
                  <Input id="dob" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label>
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup defaultValue="male" className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-purple-900">Academic Information</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="university">
                      University/Institution <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="university"
                      placeholder="Enter your university/institution"
                      defaultValue="Amity University Uttar Pradesh"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">
                      Program/Course <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger id="program">
                        <SelectValue placeholder="Select your program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="btech">B.Tech</SelectItem>
                        <SelectItem value="mtech">M.Tech</SelectItem>
                        <SelectItem value="bca">BCA</SelectItem>
                        <SelectItem value="mca">MCA</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="branch">
                      Branch/Specialization <span className="text-red-500">*</span>
                    </Label>
                    <Input id="branch" placeholder="E.g., Computer Science, Electronics" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">
                      Year of Study <span className="text-red-500">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1st Year</SelectItem>
                        <SelectItem value="2">2nd Year</SelectItem>
                        <SelectItem value="3">3rd Year</SelectItem>
                        <SelectItem value="4">4th Year</SelectItem>
                        <SelectItem value="5">5th Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">
                    Student ID/Enrollment Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="studentId" placeholder="Enter your student ID" required />
                </div>
              </div>

              {/* Referral Information */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-purple-900">Referral Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="referred">
                    Who referred you to IET? <span className="text-red-500">*</span>
                  </Label>
                  <Input id="referred" placeholder="Name of the person who referred you" required />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="referrerEmail">Referrer's Email (if known)</Label>
                    <Input id="referrerEmail" type="email" placeholder="Enter referrer's email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="referrerRelation">Relationship with Referrer</Label>
                    <Select>
                      <SelectTrigger id="referrerRelation">
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="faculty">Faculty</SelectItem>
                        <SelectItem value="senior">Senior Student</SelectItem>
                        <SelectItem value="classmate">Classmate</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-purple-900">Areas of Interest</h3>
                <p className="text-sm text-gray-600">Select all that apply</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest1" />
                    <Label htmlFor="interest1">Artificial Intelligence</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest2" />
                    <Label htmlFor="interest2">Robotics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest3" />
                    <Label htmlFor="interest3">IoT & Embedded Systems</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest4" />
                    <Label htmlFor="interest4">Web Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest5" />
                    <Label htmlFor="interest5">Cybersecurity</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest6" />
                    <Label htmlFor="interest6">Renewable Energy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest7" />
                    <Label htmlFor="interest7">Data Science</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest8" />
                    <Label htmlFor="interest8">Blockchain</Label>
                  </div>
                </div>
              </div>

              {/* Why Join */}
              <div className="space-y-4 pt-4 border-t">
                <h3 className="text-lg font-semibold text-purple-900">Why do you want to join IET?</h3>

                <div className="space-y-2">
                  <Label htmlFor="joinReason">
                    Tell us why you're interested in joining IET <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="joinReason"
                    placeholder="Share your motivation for joining IET and what you hope to gain from the membership..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <Link href="#" className="text-purple-700 hover:underline">
                        terms and conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-purple-700 hover:underline">
                        privacy policy
                      </Link>
                      . <span className="text-red-500">*</span>
                    </Label>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="newsletter" />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      I would like to receive newsletters and updates about IET events and activities.
                    </Label>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-purple-700 hover:bg-purple-800">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Membership Fee Information */}
      <section className="py-12 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-purple-900">Membership Fee Information</h2>
              <p className="text-gray-600 mt-2">The following membership fees apply for the academic year 2024-2025</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Student Membership</h3>
                <div className="text-3xl font-bold text-purple-700 mb-4">₹500</div>
                <ul className="text-gray-600 space-y-2 text-left mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Access to all IET events and activities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Participation in workshops and technical sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>IET Student Chapter certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Networking opportunities with industry professionals</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-700 hover:bg-purple-800">Select Plan</Button>
              </div>

              <div className="border rounded-lg p-6 text-center bg-purple-50 border-purple-200">
                <div className="bg-purple-700 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
                  Recommended
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Premium Membership</h3>
                <div className="text-3xl font-bold text-purple-700 mb-4">₹1000</div>
                <ul className="text-gray-600 space-y-2 text-left mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All benefits of Student Membership</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority registration for limited-seat events</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Exclusive access to industry mentorship program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>IET merchandise package</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Leadership opportunities within the chapter</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-700 hover:bg-purple-800">Select Plan</Button>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Payment can be made via online transfer or in person to the IET Treasurer.</p>
              <p className="mt-2">
                For any questions regarding membership fees, please contact{" "}
                <span className="text-purple-700">treasurer@ietauup.org</span>
              </p>
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
                  question: "How long is the membership valid?",
                  answer: "The IET Student Chapter membership is valid for one academic year, from July to June.",
                },
                {
                  question: "Can I upgrade my membership later?",
                  answer:
                    "Yes, you can upgrade from Student to Premium membership at any time by paying the difference in fees.",
                },
                {
                  question: "Is there a deadline for membership application?",
                  answer:
                    "While we accept applications throughout the year, we recommend joining at the beginning of the academic year to maximize your benefits.",
                },
                {
                  question: "How will I receive confirmation of my membership?",
                  answer:
                    "After your application is processed and payment is confirmed, you will receive a confirmation email with your membership details and certificate.",
                },
                {
                  question: "Can I get a refund if I change my mind?",
                  answer:
                    "Membership fees are non-refundable once processed. Please ensure you are committed before applying.",
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
    </main>
  )
}

function BenefitCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <h3 className="text-lg font-bold text-purple-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

