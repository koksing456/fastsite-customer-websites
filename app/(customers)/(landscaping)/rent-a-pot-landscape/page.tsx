import { Header } from "@/components/landscaping/Header";
import { Hero } from "@/components/landscaping/Hero";
import Services from "@/components/landscaping/Services";
import { Gallery } from "@/components/landscaping/Gallery";
import Reviews from "@/components/landscaping/Reviews";
import GoogleReviews from "@/components/landscaping/GoogleReviews";
import { Contact } from "@/components/landscaping/Contact";
import { Map } from "@/components/landscaping/Map";
import { Footer } from "@/components/landscaping/Footer";
import { BackToFastSite } from "@/components/landscaping/BackToFastSite";
import WhyChooseUs from "@/components/landscaping/WhyChooseUs";
import { WhatsAppButton } from "@/components/landscaping/WhatsAppButton";
import SocialProof from "@/components/landscaping/SocialProof";
import {
  companyInfo,
  services,
  reviews,
  images,
  whyChooseUs,
  faqs,
  socialProof,
} from "@/components/landscaping/config/rent-a-pot";

export default function RentAPotLandscapePage() {
  // Get API key and Place ID from environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || "";

  return (
    <div className="flex flex-col min-h-screen">
      <Header company={companyInfo} />
      <main className="flex-1">
        <Hero company={companyInfo} heroImage={images.hero} />
        <Services services={services} />
        <Gallery />
        <WhyChooseUs data={whyChooseUs} />
        <SocialProof
          trustBadges={socialProof.trustBadges}
          clients={socialProof.clients}
        />
        {/* Use either the static Reviews component or the GoogleReviews component */}
        {apiKey && placeId ? (
          <GoogleReviews apiKey={apiKey} placeId={placeId} />
        ) : (
          <Reviews reviews={reviews} />
        )}

        <Contact />
        <Map />
        <BackToFastSite />
      </main>
      <Footer />
      <WhatsAppButton
        phoneNumber={companyInfo.phone}
        message="Hi, I'm interested in your landscaping services! 🌿"
      />
    </div>
  );
}
