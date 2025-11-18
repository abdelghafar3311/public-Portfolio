import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const Strengths = () => {
  const strengths = [
    "Reliable, punctual, and committed to delivering tasks on time.",
    "Highly focused and disciplined, especially in repetitive or detail-oriented work.",
    "Quick learner with strong adaptability to new tools, systems, and workflows.",
  ];

  return (
    <section id="strengths" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Key Strengths
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {strengths.map((strength, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-lg">{strength}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
