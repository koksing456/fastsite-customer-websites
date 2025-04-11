import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function RentAPotLandscapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Rent A Pot Landscape</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#cafe"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Café
            </Link>
            <Link
              href="#reviews"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> 012-211 0113
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Get a Quote
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
              alt="Beautiful potted plants and landscape"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Plant Rentals & Landscape Solutions
              </h1>
              <p className="text-lg md:text-xl">
                Rent A Pot Landscape offers premium plant rentals, landscaping
                services, and a cozy café with delicious refreshments in Taman
                Desa, Kuala Lumpur.
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
                  Visit Our Café
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Landscaping Services
              </h2>
              <p className="text-muted-foreground text-lg">
                From plant rentals to complete landscape solutions, we offer a
                variety of services to meet all your gardening needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Plant Rentals",
                  description:
                    "Rent beautiful potted plants for events, offices, or homes. Perfect for temporary decoration or long-term greenery.",
                  image:
                    "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Landscape Design",
                  description:
                    "Custom landscape designs that reflect your style and complement your property's architecture.",
                  image:
                    "https://images.unsplash.com/photo-1569227997603-33b9f12af927?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                },
                {
                  title: "Garden Maintenance",
                  description:
                    "Regular maintenance services to keep your garden looking its best throughout the seasons.",
                  image:
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Plant Supply",
                  description:
                    "High-quality plants, pots, and gardening supplies for sale. We source the best varieties for the Malaysian climate.",
                  image:
                    "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Event Decorations",
                  description:
                    "Botanical decorations for events, weddings, and corporate functions. Make your special day green and beautiful.",
                  image:
                    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Café & Refreshments",
                  description:
                    "Visit our cozy café with delicious menu options while you browse our plant selection or relax in our garden setting.",
                  image:
                    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Café Section */}
        <section id="cafe" className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Rent A Pot Café"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Our Cozy Café
                </h2>
                <p className="text-lg text-muted-foreground">
                  Take a break and enjoy our delicious refreshments at our
                  on-site café. We offer a variety of drinks and light meals in
                  a relaxing garden environment.
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Menu Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Specialty coffees and teas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Freshly baked pastries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Light lunch options</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Refreshing fruit drinks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Delicious local desserts</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-medium">
                    As mentioned in our reviews:
                  </p>
                  <blockquote className="italic border-l-4 border-green-600 pl-4 mt-2 text-muted-foreground">
                    "Great place for all your landscape needs. They also have a
                    very cosy cafe with tasty selections."
                  </blockquote>
                </div>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  View Full Menu
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Plant Gallery
              </h2>
              <p className="text-muted-foreground text-lg">
                Browse through our collection of plants, garden designs, and
                café ambiance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1632162644763-80b2c6c372bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1724501286045-41be53df0073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1649037756233-55cf385e4df2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ].map((imgSrc, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={imgSrc}
                    alt={`Gallery image ${index + 1}`}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">
                        Plant Collection
                      </h3>
                      <p className="text-sm text-gray-200">
                        View our beautiful selection
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Photos
              </Button>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Read reviews from our satisfied customers who have experienced
                our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jagjit S",
                  role: "Local Guide",
                  time: "2 years ago",
                  rating: 5,
                  quote:
                    "Great place for all your landscape needs. They also have a very cosy cafe with tasty selections.",
                },
                {
                  name: "Ruviantie Roslan",
                  role: "Customer",
                  time: "2 years ago",
                  rating: 5,
                  quote:
                    "Positive. Responsiveness, Punctuality, Quality, Professionalism, Value.",
                },
                {
                  name: "Hazura Hassan",
                  role: "Local Guide",
                  time: "2 years ago",
                  rating: 5,
                  quote:
                    "The food is all delicious.. tip top menu.. the best services",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg border p-6 shadow-sm"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">
                        {review.time}
                      </span>
                    </div>
                    <blockquote className="flex-1 mb-4 italic text-muted-foreground">
                      "{review.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {review.role}
                        </p>
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
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Visit Us
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're located in the heart of Taman Desa, Kuala Lumpur. Come
                  visit our garden center and café!
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone</h3>
                      <p className="text-muted-foreground">012-211 0113</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@rentapot.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Location</h3>
                      <p className="text-muted-foreground">
                        Lot 5704, Jalan Desa Utama,
                      </p>
                      <p className="text-muted-foreground">
                        Taman Desa, 58100 Kuala Lumpur,
                      </p>
                      <p className="text-muted-foreground">
                        Wilayah Persekutuan Kuala Lumpur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am–6pm
                      </p>
                      <p className="text-muted-foreground">Saturday: 9am–6pm</p>
                      <p className="text-muted-foreground">Sunday: 9am–6pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">
                  Send Us a Message
                </h3>
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
                      <option value="rentals">Plant Rentals</option>
                      <option value="design">Landscape Design</option>
                      <option value="maintenance">Garden Maintenance</option>
                      <option value="supply">Plant Supply</option>
                      <option value="events">Event Decorations</option>
                      <option value="cafe">Café Visit</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your requirements"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 relative">
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0032778643344!2d101.677507!3d3.106742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4acf3c4cd80d%3A0xbd2e87d885981b5c!2sLot%205704%2C%20Jalan%20Desa%20Utama%2C%20Taman%20Desa%2C%2058100%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1685504123456!5m2!1sen!2smy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rent A Pot Landscape location map"
              aria-label="Location map for Rent A Pot Landscape in Taman Desa, Kuala Lumpur"
            ></iframe>
          </div>
        </section>

        {/* Back to FastSite link */}
        <div className="bg-gray-100 py-4 text-center">
          <Link
            href="https://fastsite.my"
            className="text-blue-600 hover:underline"
          >
            ← Back to FastSite
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-500" />
                <span className="text-xl font-bold text-white">
                  Rent A Pot Landscape
                </span>
              </div>
              <p className="mb-4">
                Premium plant rentals, landscape design, and a cozy café - all
                in one location.
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
              <h3 className="text-lg font-semibold mb-4 text-white">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    Plant Rentals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    Garden Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    Plant Supply
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cafe"
                    className="hover:text-green-400 transition-colors"
                  >
                    Café
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#gallery"
                    className="hover:text-green-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#reviews"
                    className="hover:text-green-400 transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-green-400 transition-colors"
                  >
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
                  <span>
                    Lot 5704, Jalan Desa Utama, Taman Desa, 58100 Kuala Lumpur
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>012-211 0113</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>info@rentapot.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Rent A Pot Landscape. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
