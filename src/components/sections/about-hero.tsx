"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutHero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-20 lg:py-32 bg-[#FDF8F3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary text-primary pl-3 pr-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase mb-6">
              <span>About Livohaus</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-text-dark mb-6 leading-tight">
              Building Dreams Since <span className="text-primary">2009</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over 15 years, Livohaus has been transforming houses into homes across California. Our commitment to excellence, attention to detail, and client-focused approach have made us the premier choice for luxury home renovations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe every home tells a story, and our mission is to help you write yours with spaces that reflect your personality, lifestyle, and aspirations.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/tUSgx4XMKr8Q8ZDMyDkJGYJXE-1.png"
                alt="Modern home interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
