"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40&text=IET"
            alt="IET Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-bold text-xl text-purple-900">IET AUUP</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">Home</NavLink>
          <NavDropdown
            title="About Us"
            links={[
              { href: "/about", label: "What is IET?" },
              { href: "/about/why-join", label: "Why Join IET?" },
              { href: "/about/benefits", label: "Student Member Benefits" },
              { href: "/about/services", label: "Services and Activities" },
            ]}
          />
          <NavDropdown
            title="Our Team"
            links={[
              { href: "/team", label: "Faculty Coordinators" },
              { href: "/team/student-council", label: "Student Council" },
              { href: "/team/core-members", label: "Core Team Members" },
              { href: "/team/student-members", label: "Student Members" },
            ]}
          />
          <NavDropdown
            title="Gallery"
            links={[
              { href: "/gallery", label: "Event Pictures" },
              { href: "/gallery/previous-events", label: "Previous Events" },
            ]}
          />
          <NavLink href="/events">Event Calendar</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        <Button className="hidden md:flex bg-purple-700 hover:bg-purple-800">
          <Link href="/join">Join IET</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-md">
          <nav className="container flex flex-col py-4 px-4">
            <MobileNavLink href="/" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavSection title="About Us">
              <MobileNavLink href="/about" onClick={toggleMenu}>
                What is IET?
              </MobileNavLink>
              <MobileNavLink href="/about/why-join" onClick={toggleMenu}>
                Why Join IET?
              </MobileNavLink>
              <MobileNavLink href="/about/benefits" onClick={toggleMenu}>
                Student Member Benefits
              </MobileNavLink>
              <MobileNavLink href="/about/services" onClick={toggleMenu}>
                Services and Activities
              </MobileNavLink>
            </MobileNavSection>
            <MobileNavSection title="Our Team">
              <MobileNavLink href="/team" onClick={toggleMenu}>
                Faculty Coordinators
              </MobileNavLink>
              <MobileNavLink href="/team/student-council" onClick={toggleMenu}>
                Student Council
              </MobileNavLink>
              <MobileNavLink href="/team/core-members" onClick={toggleMenu}>
                Core Team Members
              </MobileNavLink>
              <MobileNavLink href="/team/student-members" onClick={toggleMenu}>
                Student Members
              </MobileNavLink>
            </MobileNavSection>
            <MobileNavSection title="Gallery">
              <MobileNavLink href="/gallery" onClick={toggleMenu}>
                Event Pictures
              </MobileNavLink>
              <MobileNavLink href="/gallery/previous-events" onClick={toggleMenu}>
                Previous Events
              </MobileNavLink>
            </MobileNavSection>
            <MobileNavLink href="/events" onClick={toggleMenu}>
              Event Calendar
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={toggleMenu}>
              Contact Us
            </MobileNavLink>
            <div className="mt-4">
              <Button className="w-full bg-purple-700 hover:bg-purple-800">
                <Link href="/join">Join IET</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-purple-700 font-medium transition-colors">
      {children}
    </Link>
  )
}

function NavDropdown({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-gray-700 hover:text-purple-700 font-medium transition-colors py-2">{title}</button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-100">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="py-2 text-gray-700 hover:text-purple-700 font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

function MobileNavSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 py-2">
      <button
        className="flex items-center justify-between w-full text-left font-medium py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && <div className="pl-4 mt-2 space-y-2 flex flex-col">{children}</div>}
    </div>
  )
}

