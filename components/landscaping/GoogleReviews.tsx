"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define Google Maps types
declare global {
  interface Window {
    google: {
      maps: {
        places: {
          PlacesService: any;
          PlacesServiceStatus: {
            OK: string;
          };
        };
      };
    };
  }
}

interface PlaceResult {
  reviews?: Review[];
  rating?: number;
}

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface GoogleReviewsProps {
  placeId: string; // Google Maps Place ID for your business
  apiKey: string; // Your Google Maps API key
}

// Individual review card component
interface GoogleReviewCardProps {
  name: string;
  image?: string;
  rating: number;
  text: string;
  date: string;
}

const GoogleReviewCard = ({
  name,
  image,
  rating,
  text,
  date,
}: GoogleReviewCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:shadow-md h-full">
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {image ? (
              <Avatar className="h-10 w-10">
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
            ) : (
              <Avatar className="h-10 w-10 bg-green-50">
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
            )}
            <div>
              <h3 className="font-medium text-gray-900">{name}</h3>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-5 object-contain"
            />
          </div>
        </div>

        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className={cn(
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>

        <p className="text-sm text-gray-600 flex-grow">
          {text.length > 150 ? `${text.substring(0, 150)}...` : text}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span>Verified Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GoogleReviews({ placeId, apiKey }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Load the Google Maps Places API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );

      service.getDetails(
        {
          placeId: placeId,
          fields: ["reviews", "rating"],
        },
        (place: PlaceResult | null, status: string) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            place?.reviews
          ) {
            setReviews(place.reviews);
          } else {
            setError("Failed to load reviews");
          }
          setLoading(false);
        }
      );
    };

    script.onerror = () => {
      setError("Failed to load Google Maps API");
      setLoading(false);
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [placeId, apiKey]);

  // Sort reviews by highest rating
  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

  if (loading) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedReviews.map((review, index) => (
            <div
              key={index}
              className="transition-all duration-300 transform hover:scale-[1.02]"
            >
              <GoogleReviewCard
                name={review.author_name}
                image={review.profile_photo_url}
                rating={review.rating}
                text={review.text}
                date={review.relative_time_description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
