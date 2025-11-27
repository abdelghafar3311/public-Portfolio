import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      skills: [
        "Analytical & Problem-Solving",
        "Accuracy & Data Handling",
        "Computer Literacy",
        "Communication",
      ],
    },
    {
      title: "Technical Skills",
      skills: [
        "React & Next.js",
        "Microsoft Word",
        "Microsoft Excel",
        "Web Development",
      ],
    },
    {
      title: "Languages",
      skills: [
        "Arabic (Native)",
        "English (B1)",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Essential Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
