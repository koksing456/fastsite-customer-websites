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
import {
  companyInfo,
  services,
  reviews,
  images,
} from "@/components/landscaping/config/rent-a-pot";

export default function RentAPotLandscapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header company={companyInfo} />
      <main className="flex-1">
        <Hero company={companyInfo} heroImage={images.hero} />
        <Services services={services} />
        <Cafe />
        <Gallery />
        <Reviews reviews={reviews} />
        <Contact />
        <Map />
        <BackToFastSite />
      </main>
      <Footer />
    </div>
  );
}
