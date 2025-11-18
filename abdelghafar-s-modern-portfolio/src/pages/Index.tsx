import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Strengths from "@/components/Strengths";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Summary />
      <Education />
      <Skills />
      <Projects />
      <Strengths />
      <Footer />
    </div>
  );
};

export default Index;
