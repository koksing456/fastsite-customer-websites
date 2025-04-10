import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Leaf, Phone, Mail, MapPin, Clock, CheckCircle, Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">KL Green Garden</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-green-600 transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-green-600 transition-colors">
              Portfolio
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Get a Quote</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Beautiful landscape garden"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your Outdoor Space
              </h1>
              <p className="text-lg md:text-xl">
                KL Green Garden Landscape Work Studio creates beautiful, sustainable landscapes that enhance your
                property and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Our Services
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 text-white border-white hover:bg-white/30 hover:text-white"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Landscaping Services</h2>
              <p className="text-muted-foreground text-lg">
                We offer comprehensive landscaping solutions tailored to your specific needs and preferences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Landscape Design",
                  description:
                    "Custom landscape designs that reflect your style and complement your property's architecture.",
                  image:
                    "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Garden Maintenance",
                  description:
                    "Regular maintenance services to keep your garden looking its best throughout the seasons.",
                  image:
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Hardscaping",
                  description:
                    "Beautiful patios, walkways, retaining walls, and other hardscape elements to enhance your outdoor space.",
                  image:
                    "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Irrigation Systems",
                  description: "Efficient irrigation solutions to keep your landscape healthy while conserving water.",
                  image:
                    "https://images.unsplash.com/photo-1585150841312-c833091e593d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Planting & Softscaping",
                  description: "Expert plant selection and installation to create vibrant, sustainable gardens.",
                  image:
                    "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Outdoor Lighting",
                  description: "Enhance the beauty and security of your property with professional landscape lighting.",
                  image:
                    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Recent Projects</h2>
              <p className="text-muted-foreground text-lg">
                Browse through our portfolio of completed landscape projects to get inspired.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1567748157439-651aca2ff064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              ].map((imgSrc, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={imgSrc || "/placeholder.svg"}
                    alt={`Portfolio project ${index + 1}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">Project {index + 1}</h3>
                      <p className="text-sm text-gray-200">Landscape Design & Installation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="KL Green Garden team"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About KL Green Garden</h2>
                <p className="text-lg text-muted-foreground">
                  KL Green Garden Landscape Work Studio has been creating beautiful outdoor spaces for over 15 years.
                  Our team of experienced landscape designers and horticulturists are passionate about transforming
                  ordinary yards into extraordinary landscapes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Certified Landscape Professionals",
                    "Eco-Friendly Practices",
                    "Award-Winning Designs",
                    "Attention to Detail",
                    "Quality Materials",
                    "Customer Satisfaction",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">Learn More About Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg">
                Don't just take our word for it. Here's what our satisfied clients have to say.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "DII Dream Interior",
                  role: "Customer",
                  time: "2 years ago",
                  quote:
                    "Good recommendation of plants and landscape service. Fast response and happy with their landscape work 👍",
                },
                {
                  name: "Ann Pok",
                  role: "Customer",
                  time: "2 years ago",
                  quote: "Good service and fast response. Happy with the plants I received",
                },
                {
                  name: "Sophia Kaur",
                  role: "Customer",
                  time: "9 months ago",
                  quote: "Excellent landscaping service. Very professional and attentive to details.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background rounded-lg border p-6 shadow-sm">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{testimonial.time}</span>
                    </div>
                    <blockquote className="flex-1 mb-4 italic text-muted-foreground">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to transform your outdoor space? Contact us today for a consultation or to request a quote.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">010-293 3398</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@klgreengarden.com</p>
                      <p className="text-muted-foreground">Website: klgreengarden.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">12-08, Tower 2, 3 Towers, 349, Jln Ampang,</p>
                      <p className="text-muted-foreground">Kampung Berembang, 50450 Kuala Lumpur</p>
                      <p className="text-muted-foreground">Located in: 3 TOWERS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">Monday: 9:30 am–6 pm</p>
                      <p className="text-muted-foreground">Tuesday: 9:30 am–6 pm</p>
                      <p className="text-muted-foreground">Wednesday: 9:30 am–6 pm</p>
                      <p className="text-muted-foreground">Thursday: 9 am–6 pm</p>
                      <p className="text-muted-foreground">Friday: 9:30 am–6 pm</p>
                      <p className="text-muted-foreground">Saturday: 10 am–4 pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="design">Landscape Design</option>
                      <option value="maintenance">Garden Maintenance</option>
                      <option value="hardscaping">Hardscaping</option>
                      <option value="irrigation">Irrigation Systems</option>
                      <option value="planting">Planting & Softscaping</option>
                      <option value="lighting">Outdoor Lighting</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">KL Green Garden</span>
              </div>
              <p className="mb-4">
                Creating beautiful, sustainable landscapes that enhance your property and lifestyle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Garden Maintenance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Hardscaping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Irrigation Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Planting & Softscaping
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-green-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-green-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-green-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-green-400 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>12-08, Tower 2, 3 Towers, 349, Jln Ampang, Kampung Berembang, 50450 Kuala Lumpur</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>010-293 3398</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>info@klgreengarden.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} KL Green Garden Landscape Work Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
