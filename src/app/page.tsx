"use client";

import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Works from "@/components/Works";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Reviews />
      <Cta />
    </>
  );
}

export default Home;
