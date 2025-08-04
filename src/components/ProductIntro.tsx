import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Download, Quote, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Type naturally",
    description: "\"Carpet cleaning $200 for John Smith, 1 Main St, San Jose, California, USA\""
  },
  {
    icon: Sparkles,
    title: "AI processes", 
    description: "Automatically calculates taxes, formats details, adds timestamps"
  },
  {
    icon: Download,
    title: "Download PDF",
    description: "Professional receipt with your logo, ready to send"
  }
];

const ProductIntro = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-trust/5" id="features">
      <div className="container mx-auto px-4">
        {/* Product Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-6">
            Meet the AI Receipt Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The first receipt generator that actually understands how you think. 
            No forms, no complexity — just natural language that becomes professional documentation.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="p-4 bg-primary rounded-xl w-fit mx-auto mb-6">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-subsection text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight className="h-6 w-6 text-muted-foreground mx-auto mt-6 hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* Founder Message */}
        <div className="bg-background rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Quote className="h-12 w-12 text-primary flex-shrink-0 mt-2" />
            <div>
              <h3 className="text-subsection text-foreground mb-4">
                Why I Built This
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "As a freelancer, I was spending hours each week on receipt paperwork instead of billable work. 
                I realized most small business owners share this frustration — we need professional documentation 
                without the administrative headache. This tool gives you back your time."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">SL</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Stan</p>
                  <p className="text-muted-foreground">Founder & Lead Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;