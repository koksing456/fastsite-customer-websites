"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Leaf, Phone } from "lucide-react";
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
      className={`sticky top-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
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
            href={`https://wa.me/60${company.phone.replace(
              /[^0-9]/g,
              ""
            )}?text=Hi, I'm interested in your landscaping services!`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" /> {company.phone}
            </Button>
          </a>
          <Button className="bg-green-600 hover:bg-green-700">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
