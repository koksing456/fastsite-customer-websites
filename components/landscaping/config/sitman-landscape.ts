import { CompanyInfo, Service, Review } from "../types";
import {
  services as sharedServices,
  whyChooseUs as sharedWhyChooseUs,
  faqs as sharedFaqs,
  socialProof as sharedSocialProof,
  images as sharedImages,
} from "./shared";

export const companyInfo: CompanyInfo = {
  name: "Sitman Landscape Sdn. Bhd.",
  description:
    "Professional general contractor and landscaping services in Wangsa Melawati, Kuala Lumpur. We provide quality landscaping solutions for residential and commercial properties.",
  phone: "03-4142 5576",
  email: "info@sitmanlandscape.com",
  address: {
    street: "No. 35, Lorong Wangsa Ceria 1d",
    city: "Wangsa Melawati",
    state: "Wilayah Persekutuan Kuala Lumpur",
    postcode: "53300",
    country: "Malaysia",
  },
  businessHours: {
    "Monday - Friday": "9am–6pm",
    Saturday: "9am–5pm",
    Sunday: "Closed",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
  },
};

// Use shared services but customize the first service for this specific business
export const services: Service[] = [
  {
    ...sharedServices[0],
    title: `${companyInfo.name.split(" ")[0]} Landscape Design`, // Customize the title with company name
    description:
      "Our professional landscape design services are tailored specifically for properties in Wangsa Melawati and surrounding areas.",
  },
  ...sharedServices.slice(1),
];

export const reviews: Review[] = [
  {
    name: "Bathmanathan Sithiamparam",
    role: "Customer",
    timestamp: "2 months ago",
    rating: 5,
    quote: "nice, free quote and helpful contractor",
  },
];

export const images = sharedImages;

// Use shared whyChooseUs data but customize the stats for this specific business
export const whyChooseUs = {
  ...sharedWhyChooseUs,
  stats: [
    {
      value: "100+",
      label: "Projects Completed",
    },
    {
      value: "5.0",
      label: "Customer Rating",
    },
    {
      value: "100%",
      label: "Satisfaction Rate",
    },
  ],
};

// Use shared FAQ items but add a company-specific question
export const faqs = [
  ...sharedFaqs,
  {
    question: "Do you serve the Wangsa Melawati area?",
    answer:
      "Yes, Wangsa Melawati is our home base, and we serve all surrounding areas in Kuala Lumpur. We're familiar with the local terrain and climate conditions, which helps us create perfect landscaping solutions for properties in this area.",
  },
];

// Use shared social proof but customize for this company
export const socialProof = {
  ...sharedSocialProof,
  trustBadges: [
    {
      platform: "Google",
      rating: 5.0,
      reviewCount: 1,
      logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
      color: "#4285F4",
    },
  ],
};
