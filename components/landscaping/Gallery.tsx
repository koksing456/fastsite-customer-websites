"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterImage {
  id: number;
  title: string;
  before: {
    src: string;
    alt: string;
  };
  after: {
    src: string;
    alt: string;
  };
}

const transformations: BeforeAfterImage[] = [
  {
    id: 1,
    title: "Modern Garden Makeover",
    before: {
      src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Overgrown garden before renovation",
    },
    after: {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Beautiful modern garden after renovation",
    },
  },
  {
    id: 2,
    title: "Zen Garden Transformation",
    before: {
      src: "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Empty space before zen garden",
    },
    after: {
      src: "https://images.unsplash.com/photo-1632162644763-80b2c6c372bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Peaceful zen garden after transformation",
    },
  },
  {
    id: 3,
    title: "Landscape Design Project",
    before: {
      src: "https://images.unsplash.com/photo-1724501286045-41be53df0073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Basic landscape before redesign",
    },
    after: {
      src: "https://images.unsplash.com/photo-1649037756233-55cf385e4df2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Stunning landscape after redesign",
    },
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1616281677557-a40d9d9ece5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1632162644763-80b2c6c372bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1724501286045-41be53df0073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1649037756233-55cf385e4df2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === transformations.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? transformations.length - 1 : current - 1
    );
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Before & After Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Transformation Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            See the incredible transformations we've achieved for our clients
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-24">
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
            aria-label="Previous transformation"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
            aria-label="Next transformation"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Before/After Container */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 h-full">
              {/* Before Image */}
              <div className="relative">
                <Image
                  src={transformations[activeIndex].before.src}
                  alt={transformations[activeIndex].before.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  Before
                </div>
              </div>

              {/* After Image */}
              <div className="relative">
                <Image
                  src={transformations[activeIndex].after.src}
                  alt={transformations[activeIndex].after.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                  After
                </div>
              </div>
            </div>

            {/* Project Title */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full shadow-lg">
              <h3 className="text-lg font-semibold">
                {transformations[activeIndex].title}
              </h3>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            {transformations.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-video rounded-lg overflow-hidden ${
                  index === activeIndex ? "ring-2 ring-green-500" : ""
                }`}
              >
                <Image
                  src={item.after.src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Regular Gallery Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our Plant Gallery
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse through our collection of plants, garden designs, and café
            ambiance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={imgSrc}
                alt={`Gallery image ${index + 1}`}
                width={600}
                height={400}
                className="h-full w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">
                    Plant Collection
                  </h3>
                  <p className="text-sm text-gray-200">
                    View our beautiful selection
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Photos
          </Button>
        </div>
      </div>
    </section>
  );
}
