import Link from "next/link";
import { Header } from "@/components/landscaping/Header";
import { Hero } from "@/components/landscaping/Hero";
import Services from "@/components/landscaping/Services";
import { Cafe } from "@/components/landscaping/Cafe";
import { Gallery } from "@/components/landscaping/Gallery";
import Reviews from "@/components/landscaping/Reviews";
import { Contact } from "@/components/landscaping/Contact";
import { Map } from "@/components/landscaping/Map";
import { Footer } from "@/components/landscaping/Footer";
import { BackToFastSite } from "@/components/landscaping/BackToFastSite";
import WhyChooseUs from "@/components/landscaping/WhyChooseUs";
import { WhatsAppButton } from "@/components/landscaping/WhatsAppButton";
import {
  companyInfo,
  services,
  reviews,
  images,
  whyChooseUs,
} from "@/components/landscaping/config/rent-a-pot";

export default function RentAPotLandscapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header company={companyInfo} />
      <main className="flex-1">
        <Hero company={companyInfo} heroImage={images.hero} />
        <Services services={services} />
        <WhyChooseUs data={whyChooseUs} />
        <Cafe />
        <Gallery />
        <Reviews reviews={reviews} />
        <Contact />
        <Map />
        <BackToFastSite />
      </main>
      <Footer />
      <WhatsAppButton
        phoneNumber={companyInfo.phone}
        message="Hi, I'm interested in your landscaping services!"
      />
    </div>
  );
}
