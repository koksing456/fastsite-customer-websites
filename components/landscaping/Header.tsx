"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Leaf, Phone, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyInfo } from "./types";

interface HeaderProps {
  company: CompanyInfo;
}

export function Header({ company }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold">{company.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#cafe"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Café
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${company.phone}`}
            className="hidden md:flex items-center text-gray-700 hover:text-green-600 transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" /> {company.phone}
          </a>
          <Link
            href="#book-consultation"
            className={`relative px-6 py-3 font-bold text-white group ${
              scrolled
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-600 hover:bg-green-700"
            } rounded-lg overflow-hidden transition-all`}
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 to-emerald-600 group-hover:from-green-500 group-hover:to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center">
              <CalendarPlus className="mr-2 h-4 w-4" /> Get a Free Quote
              <span className={`ml-1 ${scrolled ? "animate-pulse" : ""}`}>
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
