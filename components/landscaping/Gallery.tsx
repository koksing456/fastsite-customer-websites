"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

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

interface PlantImage {
  src: string;
  alt: string;
  category: string;
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

const plantGallery: PlantImage[] = [
  {
    src: "https://plus.unsplash.com/premium_photo-1661454634377-aff280ce8521?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Decorative indoor palm plant",
    category: "Indoor Plants",
  },
  {
    src: "https://images.unsplash.com/photo-1656321572686-a1fe34dffec9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ornamental potted succulents",
    category: "Potted Plants",
  },
  {
    src: "https://images.unsplash.com/photo-1707097702123-795b8465d053?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Tropical foliage houseplant",
    category: "Tropical Plants",
  },
  {
    src: "https://images.unsplash.com/photo-1743669946781-9b1319dc9c2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Exotic flowering plant in container",
    category: "Flowering Plants",
  },
  {
    src: "https://images.unsplash.com/photo-1724344541945-267ba492ee38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Air purifying indoor plant collection",
    category: "Air Purifiers",
  },
  {
    src: "https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    alt: "Small decorative cacti collection",
    category: "Succulents & Cacti",
  },
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
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        {/* Outdoor Transformations Section */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
              Before & After
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Outdoor Transformations
            </h2>
            <p className="text-muted-foreground text-lg">
              See the incredible landscape makeovers we've achieved for our
              clients
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
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
        </div>

        {/* Indoor Plant Gallery Section */}
        <div className="mt-24 pt-6 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-600 font-semibold tracking-wide uppercase text-sm">
              Our Greenhouse
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Indoor Plant Collection
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover our premium selection of indoor plants for home and
              office
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plantGallery.map((plant, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={plant.src}
                  alt={plant.alt}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover aspect-[4/3] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-medium bg-green-600 py-1 px-2 rounded-full">
                          {plant.category}
                        </span>
                        <h3 className="text-lg font-semibold mt-2">
                          {plant.alt}
                        </h3>
                      </div>
                      <div className="bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View Our Plant Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
