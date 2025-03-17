import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=40&width=40&text=IET"
                alt="IET Logo"
                width={40}
                height={40}
                className="w-10 h-10 bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">IET AUUP</span>
            </Link>
            <p className="text-purple-200">
              Empowering Engineers, Inspiring Innovators at Amity University Uttar Pradesh.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/events">Event Calendar</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">About IET</h3>
            <ul className="space-y-2">
              <FooterLink href="/about">What is IET?</FooterLink>
              <FooterLink href="/about/why-join">Why Join IET?</FooterLink>
              <FooterLink href="/about/benefits">Member Benefits</FooterLink>
              <FooterLink href="/about/services">Services & Activities</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <address className="not-italic space-y-2 text-purple-200">
              <p>IET On Campus Student Chapter</p>
              <p>Amity University Uttar Pradesh</p>
              <p>Sector 125, Noida, UP, India</p>
              <p className="pt-2">
                <strong className="text-white">Email:</strong> skdubey1@amity.edu
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +91 8826035766
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-300 text-sm">
          <p>© {new Date().getFullYear()} IET On Campus Student Chapter AUUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-purple-200 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="bg-purple-800 p-2 rounded-full hover:bg-purple-700 transition-colors">
      {icon}
    </Link>
  )
}

