import CTA from "@/components/marketing/CTA";
import FAQ from "@/components/marketing/FAQ";
import Features from "@/components/marketing/Features";
import Hero from "@/components/marketing/Hero";
import Testimonials from "@/components/marketing/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Home;
