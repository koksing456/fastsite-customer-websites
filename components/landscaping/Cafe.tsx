import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuHighlights = [
  "Specialty coffees and teas",
  "Freshly baked pastries",
  "Light lunch options",
  "Refreshing fruit drinks",
  "Delicious local desserts",
];

export function Cafe() {
  return (
    <section id="cafe" className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Rent A Pot Café"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Cozy Café
            </h2>
            <p className="text-lg text-muted-foreground">
              Take a break and enjoy our delicious refreshments at our on-site
              café. We offer a variety of drinks and light meals in a relaxing
              garden environment.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Menu Highlights</h3>
              <ul className="space-y-2">
                {menuHighlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4">
              <p className="text-lg font-medium">
                As mentioned in our reviews:
              </p>
              <blockquote className="italic border-l-4 border-green-600 pl-4 mt-2 text-muted-foreground">
                "Great place for all your landscape needs. They also have a very
                cosy cafe with tasty selections."
              </blockquote>
            </div>
            <Button className="mt-4 bg-green-600 hover:bg-green-700">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
