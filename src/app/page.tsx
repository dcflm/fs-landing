
"use client";

import CardCarousel from "@/components/CardCarousel";
import { CountUpStats } from "@/components/CountUpStats";
import FloatingButton from "@/components/FloatingButton";
import HeaderComponent from "@/components/HeaderComponent";
import Navbar from "@/components/Navbar";
import ShiftingContactForm from "@/components/ShiftingContactForm";
import SquishyPricing from "@/components/SquishyPricing";
import { StaggerTestimonials } from "@/components/StaggerTestimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingButton />
      <HeaderComponent />
      <CardCarousel />
      <SquishyPricing />
      <CountUpStats />
      <StaggerTestimonials />
      <ShiftingContactForm />
    </>
  );
}

