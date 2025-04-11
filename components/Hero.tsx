import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Beautiful potted plants and landscape"
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
          <p className="text-lg md:text-xl">
            Rent A Pot Landscape offers premium plant rentals, landscaping
            services, and a cozy café with delicious refreshments in Taman Desa,
            Kuala Lumpur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white/30 hover:text-white"
            >
              Visit Our Café
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
