"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Building2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface FloorPlan {
  title: string;
  image: string;
  alt: string;
}

const floorPlans: FloorPlan[] = [
  {
    title: "Basement Floor",
    image: "/BegumpetBasement.png",
    alt: "Begumpet Basement Floor Plan",
  },
  {
    title: "Lower Ground Floor",
    image: "/BegumpetLGFloor.png",
    alt: "Begumpet Lower Ground Floor Plan",
  },
  {
    title: "Upper Ground Floor",
    image: "/BegumpetUGfloor.png",
    alt: "Begumpet Upper Ground Floor Plan",
  },
  {
    title: "4th Floor",
    image: "/Begumpet 4th floor.png",
    alt: "Begumpet 4th Floor Plan",
  },
  {
    title: "Terrace",
    image: "/BegumpetTerrace.png",
    alt: "Begumpet Terrace Floor Plan",
  },
];

export default function ArchitecturalFloorDesign() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-neutral-950 py-20 md:py-24 lg:py-32 overflow-hidden relative"
    >
      {/* Animated background patterns */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-x-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold tracking-[0.05em] uppercase text-primary mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Building2 className="h-4 w-4" />
            </motion.div>
            <span>Architectural Floor Design</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[48px] font-bold leading-[1.2] -tracking-[0.01em] text-text-dark dark:text-white"
          >
            Detailed Floor <span className="text-primary">Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-text-body dark:text-neutral-400"
          >
            Explore our meticulously designed floor plans that maximize space, functionality, and aesthetic appeal for every level of your property.
          </motion.p>
        </div>

        {/* Floor Plans Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {floorPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage({ image: plan.image, title: plan.title })}
            >
              <Image
                src={plan.image}
                alt={plan.alt}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Title overlay on hover */}
              <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white z-10 w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-lg md:text-xl font-semibold leading-snug text-white drop-shadow-lg">{plan.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 h-12 w-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-colors duration-300 z-10"
              aria-label="Close"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain p-4"
                  sizes="100vw"
                  priority
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="mt-4 text-center"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg">
                  {selectedImage.title}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

