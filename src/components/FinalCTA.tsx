import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

const trustElements = [
  "30-second receipt creation",
  "Automatic tax calculations", 
  "Professional branding"
];

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Users className="h-5 w-5" />
          <span className="text-primary-foreground/90">Join 2,847 professionals already on the waitlist</span>
        </div>

        {/* Urgency Message */}
        <h2 className="text-section-title mb-6">
          Join thousands of freelancers and small businesses who've reclaimed their time
        </h2>

        <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
          Stop wasting hours on receipt paperwork. Start creating professional documentation 
          that wins clients and saves time.
        </p>

        {/* Trust Elements */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {trustElements.map((element, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-primary-foreground/90">{element}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="success" 
            size="lg" 
            className="text-lg px-8 py-4 bg-success hover:bg-success-light text-success-foreground"
          >
            Start Creating Professional Receipts Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
          >
            See Live Demo
          </Button>
        </div>

        {/* Additional Trust Signal */}
        <p className="text-primary-foreground/70 mt-8 text-sm">
          No credit card required • Free trial available • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;