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
  name: "Rent A Pot Landscape",
  description:
    "Premium plant rentals, landscaping services, and a cozy café with delicious refreshments in Taman Desa, Kuala Lumpur.",
  phone: "012-211 0113",
  email: "info@rentapot.com",
  address: {
    street: "Lot 5704, Jalan Desa Utama",
    city: "Taman Desa",
    state: "Wilayah Persekutuan Kuala Lumpur",
    postcode: "58100",
    country: "Malaysia",
  },
  businessHours: {
    "Monday - Friday": "9am–6pm",
    Saturday: "9am–6pm",
    Sunday: "9am–6pm",
  },
  socialMedia: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
  },
};

export const services: Service[] = [
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

export const menuItems: MenuItem[] = [
  {
    category: "Drinks",
    items: [
      "Specialty coffees",
      "Artisanal teas",
      "Fresh fruit juices",
      "Smoothies",
    ],
  },
  {
    category: "Food",
    items: [
      "Freshly baked pastries",
      "Light lunch options",
      "Local desserts",
      "Healthy snacks",
    ],
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
  cafe: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  gallery: [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1632162644763-80b2c6c372bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1724501286045-41be53df0073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1649037756233-55cf385e4df2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};

export const whyChooseUs: WhyChooseUsData = {
  title: "Why Choose Us",
  description:
    "With over a decade of experience in landscaping excellence, we bring your garden dreams to life",
  features: [
    {
      icon: Clock,
      title: "10+ Years Experience",
      description:
        "A decade of creating beautiful landscapes and happy customers across Malaysia.",
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
        "Our certified landscaping professionals bring creativity and expertise to every project.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "We stand behind our work with comprehensive maintenance and support.",
    },
    {
      icon: Award,
      title: "Award-Winning Designs",
      description:
        "Recognized for innovative and beautiful landscape transformations.",
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

export const faqs: FAQItem[] = [
  {
    question: "How often should I water my plants?",
    answer:
      "Watering frequency depends on the plant type, season, and environmental conditions. Generally, most plants need water when the top inch of soil feels dry. Tropical plants typically need more frequent watering, while succulents and cacti require less. We provide specific care instructions for all our plants and offer garden maintenance services to ensure optimal watering schedules.",
  },
  {
    question: "Do you offer maintenance services after landscape installation?",
    answer:
      "Yes, we offer comprehensive maintenance packages to keep your landscape looking its best. Our maintenance services include regular pruning, fertilizing, pest control, weeding, and seasonal clean-ups. We can set up weekly, bi-weekly, or monthly maintenance schedules depending on your needs.",
  },
  {
    question: "How much does a landscape design cost?",
    answer:
      "Landscape design costs vary based on project size, complexity, and specific requirements. For residential properties, our designs typically start from RM1,500 for basic plans. We offer free initial consultations to understand your needs and provide a detailed quote before starting any work.",
  },
  {
    question: "Can you work with my existing garden layout?",
    answer:
      "Absolutely! We specialize in both new installations and renovations of existing landscapes. Our designers will evaluate your current garden, identify elements to preserve, and suggest enhancements that align with your vision and budget. This approach often saves costs while refreshing your outdoor space.",
  },
  {
    question: "What plants work best in Malaysian climate?",
    answer:
      "Malaysia's tropical climate is ideal for many beautiful plant species. We recommend tropical plants like Heliconia, Bird of Paradise, Frangipani, and various palms. For shaded areas, consider ferns, peace lilies, and philodendrons. We also offer a selection of drought-resistant plants for areas with less rainfall or maintenance.",
  },
  {
    question: "How long does a landscaping project typically take?",
    answer:
      "Project timelines vary based on scope and complexity. Small garden makeovers might take 1-2 weeks, while comprehensive landscape installations can take 4-8 weeks. Factors affecting timeline include weather conditions, material availability, and project size. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you offer plant rental for events?",
    answer:
      "Yes, we offer plant and décor rentals for events of all sizes, from intimate gatherings to large corporate functions. Our rental service includes delivery, arrangement, and pickup. We have a wide selection of decorative plants, pots, and arrangements to match your event theme.",
  },
];

export const socialProof: SocialProofData = {
  trustBadges: [
    {
      platform: "Google",
      rating: 4.8,
      reviewCount: 117,
      logo: "https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png",
      color: "#4285F4",
    },
    {
      platform: "Facebook",
      rating: 4.7,
      reviewCount: 86,
      logo: "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png",
      color: "#1877F2",
    },
    {
      platform: "TripAdvisor",
      rating: 4.9,
      reviewCount: 52,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgOyUkQKg31OI0RJ4F1XXftk_1SnPaUOQQ&s",
      color: "#00aa6c",
    },
  ],
  clients: [
    {
      name: "Four Seasons Hotel",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/four-seasons-hotels-and-resorts-logo-png-transparent.png",
    },
    {
      name: "Shangri-La",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/SLKL-Stacked-EN-RGB.png",
    },
    {
      name: "The Ritz-Carlton",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/the-ritz-carlton-logo-png-transparent.png",
    },
    {
      name: "Petronas",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/petronas-logo-png-transparent.png",
    },
    {
      name: "Sunway",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Sunway_logo.png",
    },
    {
      name: "Pavilion KL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pavilion_KL_Logo.svg/2560px-Pavilion_KL_Logo.svg.png",
    },
    {
      name: "KLCC",
      logo: "https://images.seeklogo.com/logo-png/13/1/suria-klcc-logo-png_seeklogo-134177.png",
    },
    {
      name: "Hilton",
      logo: "https://cdn.worldvectorlogo.com/logos/hilton-international.svg",
    },
    {
      name: "Bank Negara Malaysia",
      logo: "https://mdec.my/static/images/mdcap/resource-bnm-logo.png",
    },
    {
      name: "Maybank",
      logo: "https://seekvectorlogo.com/wp-content/uploads/2020/04/maybank-vector-logo.png",
    },
  ],
};
