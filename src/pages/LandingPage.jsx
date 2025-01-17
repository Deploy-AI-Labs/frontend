import React from "react";
import { Hero } from "../components/pages/landing-page/Hero";
import { About } from "../components/pages/landing-page/About";
import { Feature } from "../components/pages/landing-page/Feature";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Feature />
    </div>
  );
}
