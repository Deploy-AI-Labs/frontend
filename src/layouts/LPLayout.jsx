import React from "react";
import { Outlet } from "react-router";
import Header from "../components/layout/lp-layout/Header";
import { Footer } from "../components/layout/lp-layout/Footer";

export default function LPLayout() {
  return (
    <>
      <Header />
      <main className="relative bg-background-450 min-h-screen w-full overflow-hidden">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
