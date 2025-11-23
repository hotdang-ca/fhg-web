import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import WhyMe from "@/components/WhyMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Services />
      <Packages />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      {/* Placeholder for future content or spacing as requested */}
      <div className="h-20 bg-background"></div>
    </div>
  );
}
