import { Header } from "@/components/landscaping/Header";
import { Hero } from "@/components/landscaping/Hero";
import Services from "@/components/landscaping/Services";
import { Gallery } from "@/components/landscaping/Gallery";
import Reviews from "@/components/landscaping/Reviews";
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
  socialProof,
} from "@/components/landscaping/config/rekabina-ent";

export default function RekabinaEntPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header company={companyInfo} />
      <main className="flex-1">
        <Hero company={companyInfo} heroImage={images.hero} />
        <Services services={services} />
        <Gallery images={images.gallery} />
        <WhyChooseUs data={whyChooseUs} />
        <SocialProof
          trustBadges={socialProof.trustBadges}
          clients={socialProof.clients}
        />
        <Reviews reviews={reviews} />
        <Contact company={companyInfo} />
        <Map
          latitude={3.2098617999999997}
          longitude={101.7468763}
          address={`${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.postcode} ${companyInfo.address.state}, ${companyInfo.address.country}`}
        />
        <BackToFastSite />
      </main>
      <Footer company={companyInfo} />
      <WhatsAppButton
        phoneNumber={companyInfo.phone.replace(/[^0-9]/g, "")}
        message="Hi, I need plumbing services! 🚿"
      />
    </div>
  );
}
