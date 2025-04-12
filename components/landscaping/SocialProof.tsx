"use client";

import Image from "next/image";
import { Star, Leaf, Award, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Client, TrustBadge } from "./types";

interface SocialProofProps {
  trustBadges: TrustBadge[];
  clients: Client[];
}

export default function SocialProof({
  trustBadges,
  clients,
}: SocialProofProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Client Logos */}
        <div>
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500 my-6">
            TRUSTED BY LEADING BUSINESSES
          </h3>
          <div className="relative mt-6">
            <div className="flex overflow-x-auto pb-4 no-scrollbar">
              <div className="flex space-x-8 md:space-x-16 px-4 mx-auto">
                {clients.map((client, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 h-16 flex items-center justify-center"
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-12 w-28 object-contain"
                      />
                    ) : (
                      <span className="text-center text-sm font-medium text-gray-700">
                        {client.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/5 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-white"></div>
            <div className="mt-8 border-b border-gray-200 w-full max-w-4xl mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Add global styles for hiding scrollbar */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
