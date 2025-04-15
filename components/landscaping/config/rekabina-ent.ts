import { CompanyInfo, Service, Review } from "../types";
import {
  services as sharedServices,
  images as sharedImages,
  whyChooseUs as sharedWhyChooseUs,
  socialProof as sharedSocialProof,
} from "./shared";

export const companyInfo: CompanyInfo = {
  name: "REKABINA ENT.",
  description:
    "Professional landscape and general contractor services in Taman Melawati, Kuala Lumpur.",
  phone: "016-956 5634",
  email: "info@rekabinaent.com",
  address: {
    street: "Bangunan Damai Setia, Jalan Bandar 11",
    city: "Taman Melawati",
    state: "Kuala Lumpur",
    postcode: "53100",
    country: "Malaysia",
  },
  businessHours: {
    Monday: "8:00 AM – 11:30 PM",
    Tuesday: "8:00 AM – 11:30 PM",
    Wednesday: "12:00 AM – 11:30 PM",
    Thursday: "8:00 AM – 11:30 PM",
    Friday: "8:00 AM – 11:30 PM",
    Saturday: "8:00 AM – 11:30 PM",
    Sunday: "8:00 AM – 1:00 PM",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
  },
};

export const services: Service[] = [
  {
    title: "Landscape Design",
    description:
      "Complete landscape design solutions including planning, installation, and maintenance for properties.",
    image: sharedServices[0].image,
  },
  {
    title: "Garden Maintenance",
    description:
      "Regular garden maintenance services to keep your outdoor spaces looking their best.",
    image: sharedServices[1].image,
  },
  {
    title: "Hardscape Installation",
    description:
      "Professional installation of pathways, patios, and retaining walls.",
    image: sharedServices[2].image,
  },
  {
    title: "Irrigation Systems",
    description:
      "Installation and maintenance of efficient irrigation systems.",
    image: sharedServices[3].image,
  },
  {
    title: "Tree Care Services",
    description: "Professional tree pruning, trimming, and removal services.",
    image: sharedServices[4].image,
  },
  {
    title: "Commercial Landscaping",
    description: "Specialized landscaping services for commercial properties.",
    image: sharedServices[5].image,
  },
];

export const reviews: Review[] = [
  {
    name: "Nik Aida Nik Omar",
    role: "Customer",
    timestamp: "a year ago",
    rating: 5,
    quote:
      "Very good.. The work is also fine.. Now all problems will be found by Rohazlie.. Tq",
  },
];

export const images = sharedImages;

export const whyChooseUs = {
  ...sharedWhyChooseUs,
  description:
    "With over a decade of experience in landscaping excellence, we bring your garden dreams to life",
  features: [
    {
      ...sharedWhyChooseUs.features[0],
      title: "10+ Years Experience",
    },
    ...sharedWhyChooseUs.features.slice(1),
  ],
  stats: [
    {
      value: "500+",
      label: "Projects Completed",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      value: "10+",
      label: "Years Experience",
    },
  ],
};
export const socialProof = sharedSocialProof;