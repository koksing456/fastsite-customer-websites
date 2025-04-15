export interface MapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
}

export function Map({
  latitude = 3.106742,
  longitude = 101.677507,
  address = "Lot 5704, Jalan Desa Utama, Taman Desa, 58100 Kuala Lumpur",
}: MapProps) {
  // Generate dynamic Google Maps embed URL
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  }&q=${encodeURIComponent(address) || `${latitude},${longitude}`}`;

  return (
    <section id="map" className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Find Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {address ||
              "Visit us at our location to explore our facilities and services."}
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="500"
            frameBorder="0"
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Location map for ${address}`}
            aria-label={`Location map for ${address}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
