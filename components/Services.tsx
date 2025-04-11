import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const services = [
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
];

export function Services() {
  return (
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
          {services.map((service, index) => (
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
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
  );
}
