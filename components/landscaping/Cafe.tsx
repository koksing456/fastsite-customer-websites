import Image from "next/image";
import { CheckCircle, Coffee, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cafe() {
  return (
    <section id="cafe" className="py-16 bg-green-50/50">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-2xl font-bold">Our Garden Café</h2>
          </div>
          <Link
            href="#cafe-menu"
            className="text-green-600 font-medium text-sm flex items-center gap-1 hover:text-green-800 transition-colors"
          >
            Learn more <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Rent A Pot Café"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm mb-1">
                    Relax and enjoy refreshments while you browse our plants
                  </p>
                  <blockquote className="text-sm italic text-gray-200 border-l-2 border-green-400 pl-3 mt-2">
                    "The food is all delicious.. tip top menu.. the best
                    services"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between h-[300px]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold">Menu Highlights</h3>
              </div>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Specialty coffees and teas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Freshly baked pastries</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Light lunch options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span>Refreshing fruit drinks</span>
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 w-full text-green-600 border-green-600 hover:bg-green-50"
            >
              See Hours & Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
