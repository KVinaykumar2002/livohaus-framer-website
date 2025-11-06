"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Layers } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We meet with you to understand your vision, needs, and budget. This helps us create a tailored plan for your renovation.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our design team creates detailed plans and 3D renderings. We work with you to refine every detail until it's perfect.",
  },
  {
    number: "03",
    title: "Permits & Approvals",
    description: "We handle all permits, inspections, and regulatory requirements, ensuring full compliance with local building codes.",
  },
  {
    number: "04",
    title: "Construction",
    description: "Our skilled craftspeople bring the design to life with precision and care, keeping you updated every step of the way.",
  },
  {
    number: "05",
    title: "Quality Check",
    description: "We conduct thorough inspections to ensure every detail meets our high standards and your expectations.",
  },
  {
    number: "06",
    title: "Final Walkthrough",
    description: "We walk you through your newly renovated space, ensuring you're completely satisfied before project completion.",
  },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <div className={`inline-flex items-center gap-2.5 rounded-full border border-primary text-primary pl-3 pr-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Layers className="w-3.5 h-3.5" />
            <span>Our Process</span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold text-text-dark mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            How We <span className="text-primary">Work</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our streamlined six-step process ensures your renovation is completed on time, within budget, and beyond expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-[#FDF8F3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-text-dark mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
