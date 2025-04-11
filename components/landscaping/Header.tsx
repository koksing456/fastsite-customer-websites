import Link from "next/link";
import { Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompanyInfo } from "./types";

interface HeaderProps {
  company: CompanyInfo;
}

export function Header({ company }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
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
          <Button variant="outline" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" /> {company.phone}
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
