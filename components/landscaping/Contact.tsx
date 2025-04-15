import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyInfo } from "./types";

interface ContactProps {
  company?: CompanyInfo;
}

// Default contact info when no company is provided
const defaultContactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["012-211 0113"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@rentapot.com"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      "Lot 5704, Jalan Desa Utama,",
      "Taman Desa, 58100 Kuala Lumpur,",
      "Wilayah Persekutuan Kuala Lumpur",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9am–6pm",
      "Saturday: 9am–6pm",
      "Sunday: 9am–6pm",
    ],
  },
];

const defaultServices = [
  "Plant Rentals",
  "Landscape Design",
  "Garden Maintenance",
  "Plant Supply",
  "Event Decorations",
  "Café Visit",
];

export function Contact({ company }: ContactProps) {
  // Generate contact info based on company data if provided
  const contactInfo = company
    ? [
        {
          icon: Phone,
          title: "Phone",
          details: [company.phone],
        },
        {
          icon: Mail,
          title: "Email",
          details: [company.email],
        },
        {
          icon: MapPin,
          title: "Location",
          details: [
            company.address.street,
            `${company.address.city}, ${company.address.postcode} ${company.address.state}`,
            company.address.country,
          ],
        },
        {
          icon: Clock,
          title: "Business Hours",
          details: Object.entries(company.businessHours).map(
            ([day, hours]) => `${day}: ${hours}`
          ),
        },
      ]
    : defaultContactInfo;

  // Get services based on the company if available
  const services = defaultServices;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {company
                ? `Get in touch with us to discuss your landscaping needs or to request a free quote.`
                : `We're located in the heart of Taman Desa, Kuala Lumpur. Come visit our garden center and café!`}
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
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
                  {services.map((service: string, index: number) => (
                    <option
                      key={index}
                      value={service.toLowerCase().replace(" ", "-")}
                    >
                      {service}
                    </option>
                  ))}
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
  );
}
