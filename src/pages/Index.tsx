import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import ProductIntro from "@/components/ProductIntro";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PainPoints />
      <Solution />
      <ProductIntro />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
