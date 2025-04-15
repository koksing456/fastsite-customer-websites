import Link from "next/link";
import {
  Leaf,
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { CompanyInfo } from "./types";

interface FooterProps {
  company?: CompanyInfo;
}

const defaultServices = [
  "Plant Rentals",
  "Landscape Design",
  "Garden Maintenance",
  "Plant Supply",
  "Café",
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

const defaultSocialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const defaultContactInfo = [
  {
    icon: MapPin,
    text: "Lot 5704, Jalan Desa Utama, Taman Desa, 58100 Kuala Lumpur",
  },
  { icon: Phone, text: "012-211 0113" },
  { icon: Mail, text: "info@rentapot.com" },
];

export function Footer({ company }: FooterProps) {
  // Dynamically generate contact info if company is provided
  const contactInfo = company
    ? [
        {
          icon: MapPin,
          text: `${company.address.street}, ${company.address.city}, ${company.address.postcode} ${company.address.state}`,
        },
        { icon: Phone, text: company.phone },
        { icon: Mail, text: company.email },
      ]
    : defaultContactInfo;

  // Generate social links based on company data if provided
  const socialLinks = company?.socialMedia
    ? [
        {
          name: "Facebook",
          icon: Facebook,
          href: company.socialMedia.facebook || "#",
        },
        {
          name: "Instagram",
          icon: Instagram,
          href: company.socialMedia.instagram || "#",
        },
        ...(company.socialMedia.twitter
          ? [
              {
                name: "Twitter",
                icon: Twitter,
                href: company.socialMedia.twitter,
              },
            ]
          : []),
      ]
    : defaultSocialLinks;

  const services = defaultServices;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold text-white">
                {company?.name || "Rent A Pot Landscape"}
              </span>
            </div>
            <p className="mb-4">
              {company?.description ||
                "Premium plant rentals, landscape design, and a cozy café - all in one location."}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white"
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="hover:text-green-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <info.icon className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {company?.name || "Rent A Pot Landscape"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
