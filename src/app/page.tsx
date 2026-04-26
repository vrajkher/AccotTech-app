import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      <Services />
      <About />
      <Features />
      <Process />
      <Testimonials />
      <Blog />
      <CTABanner />
      <Contact />
      <Footer />
    </main>
  );
}
