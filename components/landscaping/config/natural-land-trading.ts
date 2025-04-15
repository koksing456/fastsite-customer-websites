import {
  CompanyInfo,
  Service,
  Review,
  WhyChooseUsData,
  FAQItem,
  SocialProofData,
} from "../types";
import { Award, Clock, Leaf, Shield, ThumbsUp, Users } from "lucide-react";
import {
  services as sharedServices,
  whyChooseUs as sharedWhyChooseUs,
  faqs as sharedFaqs,
  socialProof as sharedSocialProof,
  images as sharedImages,
} from "./shared";

export const companyInfo: CompanyInfo = {
  name: "Natural Land Trading",
  description:
    "Professional general contractor in Taman Melawati, Kuala Lumpur.",
  phone: "03-4162 0617",
  email: "info@naturallandtrading.com",
  address: {
    street: "No 318C, Lorong Selangor, Pusat, Jln Bandar Melawati",
    city: "Taman Melawati",
    state: "Kuala Lumpur",
    postcode: "53100",
    country: "Malaysia",
  },
  businessHours: {
    Monday: "8:30 AM – 5:00 PM",
    Tuesday: "8:30 AM – 5:00 PM",
    Wednesday: "8:30 AM – 5:00 PM",
    Thursday: "8:30 AM – 5:00 PM",
    Friday: "8:30 AM – 5:00 PM",
    Saturday: "8:30 AM – 5:00 PM",
    Sunday: "Closed",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
  },
};

export const services = sharedServices;

export const reviews: Review[] = [
  {
    name: "Jagjit S",
    role: "Local Guide",
    timestamp: "2 years ago",
    rating: 5,
    quote:
      "Great place for all your landscape needs. They also have a very cosy cafe with tasty selections.",
  },
  {
    name: "Ruviantie Roslan",
    role: "Customer",
    timestamp: "2 years ago",
    rating: 5,
    quote:
      "Positive. Responsiveness, Punctuality, Quality, Professionalism, Value.",
  },
  {
    name: "Hazura Hassan",
    role: "Local Guide",
    timestamp: "2 years ago",
    rating: 5,
    quote: "The food is all delicious.. tip top menu.. the best services",
  },
];

export const images = sharedImages;

export const whyChooseUs: WhyChooseUsData = {
  title: "Why Choose Us",
  description:
    "With years of experience in construction and landscaping, we deliver excellence in every project",
  features: [
    {
      icon: Clock,
      title: "Years of Experience",
      description:
        "Extensive experience in construction and landscaping across Kuala Lumpur.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description:
        "We use sustainable methods and environmentally conscious materials in all our projects.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our skilled team brings expertise and craftsmanship to every project.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with comprehensive quality assurance.",
    },
    {
      icon: Award,
      title: "Top-Rated Service",
      description:
        "Known for excellence in customer satisfaction and project delivery.",
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description:
        "Hundreds of happy customers and positive reviews across Malaysia.",
    },
  ],
  stats: [
    {
      value: "100+",
      label: "Projects Completed",
    },
    {
      value: "95%",
      label: "Satisfaction Rate",
    },
    {
      value: "10+",
      label: "Years Experience",
    },
  ],
};

export const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive services including landscape design, garden construction, hardscaping, plant supply, garden maintenance, and commercial landscaping solutions tailored to meet your specific needs.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all projects. Our team will assess your property and requirements before providing a detailed estimate.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. Small projects may take a few days, while larger transformations can take several weeks. We'll provide a specific timeline during the consultation phase.",
  },
  {
    question: "Do you offer maintenance services after project completion?",
    answer:
      "Yes, we offer regular maintenance services to keep your landscape looking its best. We can create a customized maintenance schedule based on your garden's specific needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Kuala Lumpur and surrounding areas, including Taman Melawati and other nearby locations. Contact us to confirm if we service your specific area.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Simply contact us by phone at 03-4162 0617 or through our website to schedule an initial consultation. We'll discuss your vision, assess your property, and provide recommendations and a free quote.",
  },
];

export const socialProof = sharedSocialProof;