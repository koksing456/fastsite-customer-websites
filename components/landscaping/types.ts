import { LucideIcon } from "lucide-react";

export interface CompanyInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  businessHours: {
    [key: string]: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Service {
  title: string;
  description: string;
  image: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  quote: string;
  timestamp: string;
}

export interface MenuItem {
  category: string;
  items: string[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stats {
  label: string;
  value: string;
}

export interface WhyChooseUsData {
  features: Feature[];
  stats: Stats[];
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
