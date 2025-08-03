import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-hero text-foreground mb-6">
              Tired of spending hours on receipt paperwork?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Generate professional receipts in seconds using simple natural language — 
              no complex forms, no manual tax calculations. Perfect for freelancers and 
              small businesses who need polished documentation fast.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-8">
              {[
                "Type in any language — AI handles the formatting",
                "Automatic tax calculations based on your location", 
                "Professional templates with your logo",
                "Instant PDF download — no data stored anywhere"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="success" size="lg" className="text-lg px-8 py-4">
                Sign up for waiting list
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                See Live Demo
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src={heroMockup}
                alt="AI Receipt Generator Interface"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;