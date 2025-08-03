import { Zap, Star, Shield } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "Create receipts as fast as you think",
    description: "Type 'Web design $500 for Sarah Johnson, due next Friday' and watch it transform into a polished, tax-calculated receipt with proper timestamps — all in under 30 seconds. More time earning, less time on paperwork."
  },
  {
    icon: Star,
    title: "Professional branding that wins clients",
    description: "Every receipt showcases your brand with custom logos and elegant templates. Clients see attention to detail and professionalism, leading to repeat business and referrals."
  },
  {
    icon: Shield,
    title: "Compliance handled automatically", 
    description: "Automatic tax calculations, precise timestamps, and professional formatting that meets legal requirements — no accounting knowledge required."
  }
];

const Solution = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            Imagine this instead...
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-success/5 border border-success/20 rounded-xl p-8 hover:bg-success/10 transition-colors duration-300">
              <div className="p-3 bg-success/10 rounded-lg w-fit mb-6">
                <solution.icon className="h-8 w-8 text-success" />
              </div>
              
              <h3 className="text-subsection text-foreground mb-4">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;