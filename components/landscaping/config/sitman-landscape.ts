import {
  CompanyInfo,
  Service,
  Review,
  MenuItem,
  WhyChooseUsData,
  FAQItem,
  SocialProofData,
} from "../types";
import { Award, Clock, Leaf, Shield, ThumbsUp, Users } from "lucide-react";

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

export const services: Service[] = [
  {
    title: "Landscape Design",
    description:
      "Professional landscape design services tailored to your property's unique features and your personal preferences.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Garden Construction",
    description:
      "Complete garden construction services from site preparation to planting and finishing touches.",
    image:
      "https://images.unsplash.com/photo-1605117882932-f781df842a57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Hardscaping",
    description:
      "Create beautiful outdoor living spaces with our professional hardscaping services, including patios, walkways, and retaining walls.",
    image:
      "https://images.unsplash.com/photo-1591183109814-b98782d3e633?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Irrigation Systems",
    description:
      "Custom irrigation solutions to keep your landscape healthy and thriving with minimal maintenance.",
    image:
      "https://images.unsplash.com/photo-1611311937504-88a105dcba14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Garden Maintenance",
    description:
      "Comprehensive garden maintenance services to keep your outdoor space looking its best year-round.",
    image:
      "https://images.unsplash.com/photo-1599594494238-30524b0982db?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Commercial Landscaping",
    description:
      "Enhance your business property with professional commercial landscaping services that make a great first impression.",
    image:
      "https://images.unsplash.com/photo-1621243237344-45e4ceac4dac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
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

export const images = {
  hero: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1632162644763-80b2c6c372bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1605117882932-f781df842a57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1591183109814-b98782d3e633?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  ],
};

export const whyChooseUs: WhyChooseUsData = {
  title: "Why Choose Us",
  description:
    "With years of experience in landscaping and construction, we deliver excellence in every project",
  features: [
    {
      icon: Clock,
      title: "Years of Experience",
      description:
        "Extensive experience creating beautiful landscapes across Kuala Lumpur and beyond.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description:
        "We prioritize eco-friendly methods and materials in all our landscaping projects.",
    },
    {
      icon: Users,
      title: "Professional Team",
      description:
        "Our skilled team brings expertise and craftsmanship to every landscape project.",
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
      title: "Free Quotations",
      description:
        "Get detailed, no-obligation quotes for your landscaping projects.",
    },
  ],
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

export const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer comprehensive landscaping services including landscape design, garden construction, hardscaping, irrigation systems, garden maintenance, and commercial landscaping solutions tailored to meet your specific needs.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we provide free, no-obligation quotes for all landscaping projects. Our team will assess your property and requirements before providing a detailed estimate.",
  },
  {
    question: "How long does a typical landscaping project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. Small projects may take a few days, while larger landscaping transformations can take several weeks. We'll provide a specific timeline during the consultation phase.",
  },
  {
    question: "Do you offer maintenance services after project completion?",
    answer:
      "Yes, we offer regular maintenance services to keep your landscape looking its best. We can create a customized maintenance schedule based on your garden's specific needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Kuala Lumpur and surrounding areas, including Wangsa Melawati, Ampang, and other nearby locations. Contact us to confirm if we service your specific area.",
  },
  {
    question: "How do I get started with a landscaping project?",
    answer:
      "Simply contact us by phone at 03-4142 5576 or through our website to schedule an initial consultation. We'll discuss your vision, assess your property, and provide recommendations and a free quote.",
  },
];

export const socialProof: SocialProofData = {
  trustBadges: [
    {
      platform: "Google",
      rating: 5.0,
      reviewCount: 1,
      logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
      color: "#4285F4",
    },
  ],
  clients: [
    {
      name: "Local Resident",
      logo: "https://via.placeholder.com/150x50?text=Client",
    },
    {
      name: "Property Developer",
      logo: "https://via.placeholder.com/150x50?text=Property",
    },
    {
      name: "Commercial Client",
      logo: "https://via.placeholder.com/150x50?text=Commercial",
    },
  ],
};
