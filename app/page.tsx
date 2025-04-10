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
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  const customerSites = [
    {
      name: "KL Green Garden",
      slug: "kl-green-garden",
      description:
        "Landscape work studio creating beautiful, sustainable gardens.",
      image:
        "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    },
    {
      name: "Beautiful Garden Landscape",
      slug: "beautiful-garden-landscape",
      description:
        "Premium landscaping services for residential and commercial properties.",
      image:
        "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">
              FastSite Customer Websites
            </span>
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
              href="#portfolio"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              About
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
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Get a Quote
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Customer Websites
              </h1>
              <p className="text-muted-foreground text-lg">
                Browse through our showcase of customer websites built by
                FastSite.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customerSites.map((site) => (
                <Link key={site.slug} href={`/${site.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={site.image}
                        alt={site.name}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2">
                        {site.name}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {site.description}
                      </p>
                      <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                        Visit website
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
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
                <span className="text-xl font-bold text-white">
                  KL Green Garden
                </span>
              </div>
              <p className="mb-4">
                Creating beautiful, sustainable landscapes that enhance your
                property and lifestyle.
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
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Landscape Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Garden Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Hardscaping
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Irrigation Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-green-400 transition-colors"
                  >
                    Planting & Softscaping
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
                    href="#about"
                    className="hover:text-green-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="hover:text-green-400 transition-colors"
                  >
                    Portfolio
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
                    12-08, Tower 2, 3 Towers, 349, Jln Ampang, Kampung
                    Berembang, 50450 Kuala Lumpur
                  </span>
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
            <p>
              &copy; {new Date().getFullYear()} FastSite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
