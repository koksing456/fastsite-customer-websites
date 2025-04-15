import { CompanyInfo, Service, Review, MenuItem, SocialProofData } from "../types";
import {
  whyChooseUs as sharedWhyChooseUs,
  faqs as sharedFaqs,
  socialProof as sharedSocialProof,
} from "./shared";

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

// Unique Rent-A-Pot reviews
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

// Unique Rent-A-Pot cafe menu items
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

// Unique Rent-A-Pot image gallery
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

export const faqs = [
  ...sharedFaqs,
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
