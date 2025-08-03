import { Clock, FileX, Calculator } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Wasting time on manual receipt creation",
    description: "You spend valuable billable hours formatting receipts, calculating taxes, and making sure everything looks professional. Time that could be spent actually earning money instead of doing administrative busywork."
  },
  {
    icon: FileX,
    title: "Embarrassing unprofessional-looking invoices", 
    description: "Your handwritten receipts or basic templates make you look amateur to clients. You know first impressions matter, but creating polished, branded receipts from scratch takes design skills you don't have."
  },
  {
    icon: Calculator,
    title: "Tax calculation nightmares and compliance fears",
    description: "You're not an accountant, but you need to get tax rates right for different locations. One mistake could mean compliance issues, unhappy clients, or problems come tax season. The stress of 'did I calculate this correctly?' haunts every receipt you send."
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-muted/30" id="pain-points">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            Sound familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-3 bg-destructive/10 rounded-lg w-fit mb-6">
                <point.icon className="h-8 w-8 text-destructive" />
              </div>
              
              <h3 className="text-subsection text-foreground mb-4">
                {point.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;