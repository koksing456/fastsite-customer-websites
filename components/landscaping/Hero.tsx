import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CompanyInfo } from "./types";

interface HeroProps {
  company: CompanyInfo;
  heroImage: string;
}

export function Hero({ company, heroImage }: HeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`${company.name} hero image`}
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Plant Rentals & Landscape Solutions
          </h1>
          <p className="text-lg md:text-xl">{company.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white/30 hover:text-white"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
