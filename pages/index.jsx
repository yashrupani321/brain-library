import Head from "next/head";
import { useEffect } from "react";
import Cursor from "../components/Cursor";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhatIs from "../components/WhatIs";
import Experience from "../components/Experience";
import HowItWorks from "../components/HowItWorks";
import Community from "../components/Community";
import Testimonials from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Brain Library — A Space for Deep Thinking</title>
      </Head>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <WhatIs />
        <Experience />
        <HowItWorks />
        <Community />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
