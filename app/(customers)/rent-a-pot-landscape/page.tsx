import Link from "next/link";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Cafe } from "@/components/Cafe";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Map } from "@/components/Map";
import { Footer } from "@/components/Footer";
import { BackToFastSite } from "@/components/BackToFastSite";

export default function RentAPotLandscapePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Cafe />
        <Gallery />
        <Reviews />
        <Contact />
        <Map />
        <BackToFastSite />
      </main>
      <Footer />
    </div>
  );
}
