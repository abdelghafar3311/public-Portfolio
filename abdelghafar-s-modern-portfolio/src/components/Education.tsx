import { GraduationCap, Calendar, Award, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const details = [
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Arts – Philosophy Department" },
    { icon: Calendar, label: "Graduation", value: "May 2025" },
    { icon: Award, label: "Grade", value: "Good" },
    { icon: Shield, label: "Military Status", value: "Will receive an exemption" },
  ];

  return (
    <section id="education" className="bg-section-bg">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Education
        </h2>
        <Card className="max-w-3xl mx-auto p-8 card-hover">
          <h3 className="text-2xl font-semibold mb-2">Faculty of Arts, Helwan University</h3>
          <p className="text-muted-foreground mb-6">Philosophy Department</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {details.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
