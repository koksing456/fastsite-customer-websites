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
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BeautifulGardenLandscapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">
              Beautiful Garden Landscape
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
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
              src="https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Beautiful garden landscape"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-6 text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Premium Landscaping Services
              </h1>
              <p className="text-lg md:text-xl">
                Beautiful Garden Landscape creates stunning outdoor environments
                that bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Premium Services
              </h2>
              <p className="text-muted-foreground text-lg">
                We deliver exceptional landscaping solutions tailored to your
                unique vision and requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Garden Design",
                  description:
                    "Creative garden designs that transform your outdoor space into a personal paradise.",
                  image:
                    "https://images.unsplash.com/photo-1585150841312-c833091e593d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Professional Maintenance",
                  description:
                    "Expert care to keep your garden looking its absolute best year-round.",
                  image:
                    "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                },
                {
                  title: "Custom Hardscaping",
                  description:
                    "Beautiful patios, walkways, and other hardscape elements designed to complement your property.",
                  image:
                    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer with back link */}
        <div className="bg-gray-100 py-4 text-center">
          <Link
            href="https://fastsite.my"
            className="text-blue-600 hover:underline"
          >
            ← Back to FastSite
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">
                  Beautiful Garden Landscape
                </span>
              </div>
              <p className="max-w-xs text-gray-400">
                Creating stunning outdoor environments that bring your vision to
                life.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Garden Design</li>
                  <li>Professional Maintenance</li>
                  <li>Custom Hardscaping</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>123 Garden Street, Kuala Lumpur</li>
                  <li>012-345-6789</li>
                  <li>info@beautifulgarden.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Beautiful Garden Landscape. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
