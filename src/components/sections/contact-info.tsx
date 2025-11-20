"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#FDF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Our team is ready to answer your questions and help bring your renovation dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              content: [" H.NO. 6-2-1/13, 2nd FLOOR, opp. SAIFABAD POLICE STATION, Lakdikapul, Hyderabad, Telangana 500004"],
            },
            {
              icon: Phone,
              title: "Call Us",
              content: ["+91-63038 22799", "Mon-Fri 9am-9pm"],
            },
            {
              icon: Mail,
              title: "Email Us",
              content: ["ceo@aslrealtors.com", "We reply within 24hrs"],
            },
            {
              icon: Clock,
              title: "Working Hours",
              content: ["Mon-Fri: 9am-9pm", "Sat: 10am-10pm"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms' }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
              {item.content.map((line, i) => (
                <p key={i} className={`text-muted-foreground ${i === 0 ? 'font-semibold text-text-dark' : 'text-sm'}`}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
