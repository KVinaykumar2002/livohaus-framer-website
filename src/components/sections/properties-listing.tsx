"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const properties = [
  {
    id: 1,
    title: "Modern Commercial Building",
    image: "/Property.jpeg",
  },
  {
    id: 2,
    title: "Brand Factory Retail Complex",
    image: "/BrandFactory.jpeg",
  },
  {
    id: 3,
    title: "MassMutual & Medtronic Office Tower",
    image: "/MassMutual.jpeg",
  },
  {
    id: 4,
    title: "MPM Times Square Retail",
    image: "/MPMTimesSquare.jpeg",
  },
  {
    id: 5,
    title: "Ratnadeep Retail Outlet",
    image: "/Ratnadeep.jpeg",
  },
  {
    id: 6,
    title: "AU Infra Commercial Project",
    image: "/AUInfra.jpeg",
  },
  {
    id: 7,
    title: "F-Studio Fashion Showroom",
    image: "/FStudio.jpeg",
  },
];

export default function PropertiesListing() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background dark:bg-[#0B0B0B] overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        {/* Header */}
        <div ref={ref} className={`text-center mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark dark:text-white mb-2 sm:mb-3 md:mb-4">
            Featured <span className="text-primary">Properties</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-neutral-400 max-w-2xl mx-auto px-2 sm:px-4">
            Discover your dream home from our exclusive collection of luxury properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white dark:bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-lg dark:shadow-[0_4px_20px_rgba(255,255,255,0.08)] border border-gray-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/30 hover:shadow-2xl dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark dark:text-white mb-0 sm:mb-2 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
