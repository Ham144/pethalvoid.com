import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import LiveProof from "@/components/LiveProof";
import ComparisonTable from "@/components/ComparisonTable";
import Process from "@/components/Process";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] flex flex-col selection:bg-[#f5e642] selection:text-[#080808]">
      <Navbar />
      <Hero />
      <TechStack />
      <Problem />
      <Services />
      <LiveProof />
      <ComparisonTable />
      <Process />
      <BookingCTA />
      <Footer />
    </main>
  );
}
